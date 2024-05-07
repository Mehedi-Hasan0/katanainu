import { blogsStaticData } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <section className="relative mb-32 xl:mb-44 lg:pt-8">
      <div className="main-container text-white flex flex-col gap-16 lg:gap-24">
        {/* heading */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <h5 className="uppercase text-gradient font-bold tracking-[2px] text-lg md:text-xl lg:text-2xl font-jost">
              Katana inu
            </h5>
            <h2 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] text-white font-jost font-bold">
              news
            </h2>
          </div>

          <p className="text-sm md:text-base lg:text-lg text-center mx-10 sm:mx-0">
            Stay tuned to the latest updates by reading our blog!
          </p>
        </div>

        {/* blogs content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gapa-8 lg:gap-10 items-stretch">
          {blogsStaticData.map((blog, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#2a2a2a] hover:border-[#f5a238] transition duration-700 ease-in overflow-hidden pb-3"
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
