import { facData } from "@/data";
import Image from "next/image";

export default function FacSummary() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <section className="main-container">
        <div className="flex flex-col gap-2 justify-center items-center mb-8 sm:mb-10 md:mb-12">
          <h5 className="uppercase font-jost font-bold text-gradient text-xl sm:text-2xl md:text-3xl tracking-wider">
            Katana inu
          </h5>
          <h2 className=" max-w-[900px] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-center uppercase font-jost text-white font-bold">
            factions summary
          </h2>
        </div>

        <div className="flex flex-col gap-5 md:gap-7">
          {facData.map((data, i) => (
            <div
              key={i}
              className={`flex flex-col gap-7 lg:gap-10 items-center ${
                i !== facData.length - 1 && "mb-10 sm:mb-12 md:mb-16 2xl:mb-20"
              } ${
                i === 1 || i === 3 || i === 5
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              }`}
            >
              <div className="w-full lg:w-[59%]">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-grind text-[#f3a511] uppercase">
                    <span className="text-white">{data.title1}</span>{" "}
                    {data.title1name}
                  </h2>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-grind text-[#f3a511] uppercase">
                    <span className="text-white">{data.title2}</span>{" "}
                    {data.title2name}
                  </h2>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-grind text-[#f3a511] uppercase pb-6 sm:pb-8">
                    <span className="text-white">{data.title3}</span>{" "}
                    {data.title3name}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium mb-2">
                    {data.desc1}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium mb-2">
                    {data.desc2}
                  </p>
                  {data.desc3 && (
                    <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium mb-2">
                      {data.desc3}
                    </p>
                  )}
                  {data.desc4 && (
                    <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium mb-2">
                      {data.desc4}
                    </p>
                  )}
                </div>
              </div>

              {/*  */}
              <div>
                <Image
                  src={data.imgUrl}
                  alt="katana inu characters"
                  width={575}
                  height={716}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
