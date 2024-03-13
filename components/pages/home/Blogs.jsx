import { blogsStaticData } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <section className="section-padding relative mb-32 xl:mb-44">
      <div className="main-container text-white flex flex-col gap-16 lg:gap-24">
        {/* heading */}
        <div className="flex flex-col gap-3 md:gap-5 justify-center items-center">
          <h2 className="text-heading-2 uppercase italic  font-jost font-semibold">
            Katana inu news
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-center mx-10 sm:mx-0">
            Stay tuned to the latest updates by reading our blog!
          </p>
        </div>

        {/* blogs content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gapa-8 lg:gap-10 items-stretch">
          {blogsStaticData.map((blog, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#2a2a2a] hover:border-[#f5a238] transition duration-700 ease-in overflow-hidden"
            >
              <Link href={blog.href}>
                <Image
                  src={blog.imgUrl}
                  alt="blogs image"
                  width={408}
                  height={270}
                  className="w-full h-[270px] rounded-xl hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </Link>

              {/* heading & description */}
              <div className="flex flex-col items-center">
                <span className="text-sm md:text-base lg:text-lg text-[#ffd894] uppercase font-oswald opacity-95 font-light tracking-[5px] pt-6">
                  Features
                </span>
                <h2 className="mt-2 mb-4 font-jost text-xl lg:text-2xl font-semibold text-center px-2 hover:text-[#f5a238] transition duration-500 ease-in-out">
                  <Link href={"#"}>{blog.heading}</Link>
                </h2>
                <p className="px-3 text-center pb-4 text-sm md:text-base">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
