import { partnersPageData } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <main className="pt-36 sm:pt-44 pb-0 md:pt-52 lg:pt-60 2xl:pt-64 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-cover">
      <div className="main-container ">
        <div className="flex flex-col">
          <h2 className="font-jost text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] uppercase font-bold text-center mb-10 2xl:my-[120px]">
            Partners & backers
          </h2>

          <div className="columns-2 sm:col-span-3 md:columns-4 lg:columns-5">
            {partnersPageData.backers.map((bac, i) => (
              <Link href={bac.link} key={i} className="">
                <Image
                  src={bac.logoUrl}
                  alt={`KatanaInu Parter ${i + 1}`}
                  width={242}
                  height={226}
                  className="mb-4"
                />
              </Link>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col mt-10 sm:mt-14 md:mt-20">
          <h2 className="font-jost text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] uppercase font-bold text-center mb-10 2xl:my-[120px]">
            GAME PARTNERS
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-5">
            {partnersPageData.gamePartner.map((bac, i) => (
              <div key={i} className="">
                <Image
                  src={bac.logoUrl}
                  alt={`KatanaInu Parter ${i + 1}`}
                  width={140}
                  height={140}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
