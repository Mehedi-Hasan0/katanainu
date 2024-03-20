"use client";

import { useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../../ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loader from "../../shared/Loader";
import DOMPurify from "dompurify";

export default function CreateBlogPage() {
  const [blogData, setBlogData] = useState({
    imgUrl: "",
    title: "",
    date: "",
    desc: "",
    greetings: "Hello Katafam,",
  });
  const [editorValue, setEditorValue] = useState("");
  const quillRef = useRef(null);
  const [loading, setLoading] = useState(false);

  /////////
  const { register, handleSubmit, reset } = useForm();

  // Add fonts to whitelist
  let Font = Quill.import("formats/font");
  // We do not add Sans Serif since it is the default
  Font.whitelist = ["poppins", "oswald", "grind", "jost"];
  Quill.register(Font, true);

  const fontSizeArr = [
    "12px",
    "14px",
    "18px",
    "24px",
    "32px",
    "36px",
    "48px",
    "56px",
    "64px",
    "72px",
  ];
  var Size = Quill.import("attributors/style/size");
  Size.whitelist = fontSizeArr;
  Quill.register(Size, true);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [
      {
        color: [
          "#ffffff",
          "#000000",
          "#f5a238",
          "#f7d33f",
          "#fccc78",
          "#ffc45d",
          "#b79355",
          "#efb857",
          "#eac177",
          "#787878",
          " #ffa500",
          "#191d23",
        ],
      },
      { background: [] },
    ], // dropdown with defaults from theme
    [{ font: ["", "poppins", "oswald", "grind", "jost"] }],
    [
      {
        size: fontSizeArr,
      },
    ],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const modules = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: handleImageUpload,
        },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  function handleImageUpload() {
    if (!quillRef.current) return;

    var input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async function () {
      var file = input.files[0];

      // Upload image to Cloudinary
      var formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "house-hunter"); // Replace with your Cloudinary upload preset

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();

        // Insert image URL into editor
        const range = quillRef.current.getEditor().getSelection(true);
        quillRef.current
          .getEditor()
          .insertEmbed(range.index, "image", data.secure_url);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    };
  }

  ///////////// SAVE BLOG TO DATABASE /////////////////
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleBlogUpload = async (data) => {
    // Sanitize editorValue using DOMPurify
    const sanitizedContent = DOMPurify.sanitize(editorValue);
    let blogData = {
      ...data,
      content: sanitizedContent,
    };
    try {
      setLoading(true);
      const blogResponse = await axios.post("/api/create-blog", blogData, {
        headers: { "Content-Type": "application/json" },
      });
      // console.log(blogResponse, "blog response");
      if (
        blogResponse.status === 200 ||
        blogResponse.status === 202 ||
        blogResponse.data.status === 200
      ) {
        setLoading(false);
        toast.success(`${blogResponse.data.message}`);
        reset(); // reset form value
        setTimeout(() => {
          window.location.reload();
        }, 700);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="main-container section-margin text-white">
      <form
        onSubmit={handleSubmit(handleBlogUpload)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="imgUrl" className="text-sm sm:text-base ml-[2px]">
            Image url
          </label>
          <input
            type="text"
            id="imgUrl"
            placeholder="Image link..."
            className=" bg-transparent text-white border border-[#787878] px-3 mr-2 h-14 placeholder:text-[#7a7676] placeholder:font-medium rounded-md"
            {...register("imgUrl", { required: true })}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-sm sm:text-base ml-[2px]">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Heading / Title here..."
            className=" bg-transparent text-white border border-[#787878] px-3 mr-2 h-14 placeholder:text-[#7a7676] placeholder:font-medium rounded-md"
            {...register("title", { required: true })}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="date" className="text-sm sm:text-base ml-[2px]">
            Date
          </label>
          <input
            type="text"
            id="date"
            placeholder="Publish date..."
            className=" bg-transparent text-white border border-[#787878] px-3 mr-2 h-14 placeholder:text-[#7a7676] placeholder:font-medium rounded-md"
            {...register("date", { required: true })}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="description"
            className="text-sm sm:text-base ml-[2px]"
          >
            Description
          </label>
          <textarea
            type="text"
            id="description"
            placeholder="Description..."
            rows="5"
            cols="40"
            className=" bg-transparent text-white border border-[#787878] p-3 mr-2 placeholder:text-[#7a7676] placeholder:font-medium rounded-md"
            {...register("desc", { required: true })}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mt-5">
          <h3 className="font-jost text-sm sm:text-base mb-2">
            Your blog content
          </h3>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            modules={modules}
            value={editorValue}
            onChange={setEditorValue}
            bounds={".app"}
            placeholder="Write your content here..."
          />
        </div>

        {/* save btn */}
        <div className="mt-8 flex justify-center items-center">
          <Button
            disabled={loading}
            variant="customAnimated"
            className="py-5 min-w-[300px] disabled:cursor-not-allowed"
          >
            {loading ? <Loader /> : "Create Blog"}
          </Button>
        </div>
      </form>

      {/* ////////// PREVIEW /////////// */}
      <h1 className="mt-20">Preview</h1>
      <div className="flex flex-col gap-3 sm:gap-5 mt-10">
        {blogData.imgUrl && (
          <Image
            src={blogData.imgUrl}
            alt="baby doge"
            width={1230}
            height={284}
          />
        )}

        <div className="flex flex-col gap-2">
          <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-jost text-white font-bold mb-[6px]">
            {blogData.title}
          </h2>
          <p className="text-gradient font-oswald text-sm sm:text-base md:text-lg font-light tracking-[5px]">
            {blogData.date}
          </p>
          <strong className="text-white text-xs sm:text-sm md:text-base">
            {blogData.greetings}
          </strong>
          <p className="text-[#787878] text-xs sm:text-sm md:text-base">
            {blogData.desc}
          </p>
        </div>
      </div>

      <div className="mt-5" dangerouslySetInnerHTML={{ __html: editorValue }} />
    </div>
  );
}
