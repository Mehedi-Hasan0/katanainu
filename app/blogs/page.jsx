import { blogPageData } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const firstBlog = blogPageData[0];
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        <div className="flex flex-col justify-center items-center">
          <h5 className="uppercase font-jost font-bold text-gradient text-xl sm:text-2xl md:text-3xl tracking-wider">
            Blog
          </h5>
          <h2 className=" max-w-[900px] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-center uppercase font-jost text-white font-bold">
            News & Updates
          </h2>
        </div>

        {/*  */}
        <div className="flex flex-col md:flex-row items-start gap-6 mt-10 mb-10 md:mt-14 md:mb-20">
          <Link href={firstBlog.link} className=" w-full md:w-[42%] ">
            <Image
              src={firstBlog.imgUrl}
              alt={firstBlog.title}
              width={553}
              height={300}
              className="object-cover md:object-fill h-[300px] rounded-lg md:mx-2"
            />
          </Link>
          <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-[58%] md:mx-2 mt-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-jost text-white font-semibold hover:text-[#f5a238] transition duration-500 ease-in-out text-center md:text-start">
              <Link href={firstBlog.link}>{firstBlog.title}</Link>
            </h2>
            <p className="text-gradient font-oswald text-xs sm:text-sm md:text-base lg:text-lg font-light">
              {firstBlog.date}
            </p>
            <p className="text-[#787878] text-xs sm:text-sm md:text-base">
              {firstBlog.greetings}
            </p>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gapa-8 lg:gap-10 items-stretch">
          {blogPageData.map((blog, i) => (
            <div
              key={i}
              className={`rounded-lg border border-[#2a2a2a] hover:border-[#f5a238] transition duration-700 ease-in overflow-hidden ${
                i === 0 && "hidden"
              }`}
            >
              <Link href={blog.link}>
                <Image
                  src={blog.imgUrl}
                  alt="blogs image"
                  width={408}
                  height={270}
                  className="w-full h-[270px] rounded-lg hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </Link>

              {/* heading & description */}
              <div className="flex flex-col items-center">
                <h2 className="my-3 font-jost text-xl lg:text-2xl font-semibold text-center px-2 hover:text-[#f5a238] transition duration-500 ease-in-out text-white">
                  <Link href={blog.link}>{blog.title}</Link>
                </h2>
                <p className="text-gradient font-oswald text-xs sm:text-sm md:text-base lg:text-lg font-light mb-2 tracking-widest">
                  {firstBlog.date}
                </p>
                <p className="px-3 text-center pb-4 text-sm md:text-base text-[#787878]">
                  {blog.greetings}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
