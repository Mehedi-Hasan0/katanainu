"use client";

import { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreateBlogPage() {
  const [value, setValue] = useState("");

  // Add fonts to whitelist
  let Font = Quill.import("formats/font");
  // We do not add Sans Serif since it is the default
  Font.whitelist = ["poppins", "oswald", "grind", "jost"];
  Quill.register(Font, true);

  const fontSizeArr = ["12px", "14px", "18px", "24px"];
  var Size = Quill.import("attributors/style/size");
  Size.whitelist = fontSizeArr;
  Quill.register(Size, true);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video"],

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
          " #787878",
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

  console.log(value);
  return (
    <div className="main-container section-margin text-white">
      <ReactQuill
        theme="snow"
        modules={{ toolbar: toolbarOptions }}
        value={value}
        onChange={setValue}
        bounds={".app"}
        placeholder="Write your content here..."
      />

      <h1 className="mt-20">Preview</h1>

      <div className="mt-10" dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}
