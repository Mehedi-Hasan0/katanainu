"use client";

import { celebritiesData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaLink, FaTwitter, FaYoutube } from "react-icons/fa6";

const Promoters = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 mb-7 sm:mb-10 md:mb-12">
        <h5 className="uppercase text-gradient font-bold text-xl sm:text-2xl md:text-3xl font-jost text-center">
          Influencer celebrities
        </h5>
        <h2 className="uppercase text-2xl sm:text-3xl md:text-4x lg:text-[38px] text-white font-jost font-bold text-center">
          Who promoted katana inu
        </h2>
      </div>

      {/* celebrities */}
      <div className="pt-7 sm:pt-9 md:pt-12 lg:pt-14">
        <div className="grid grid-cols-2 sm:flex justify-center items-center flex-wrap">
          {celebritiesData.map((celeb, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center px-4 mb-12"
            >
              <Link
                href={celeb.twitter}
                className="relative flex justify-center items-center rounded-full border-2 border-transparent hover:border-[#ff8503] transition-all duration-500 ease-in"
                onMouseEnter={() => {
                  setHoveredIndex(i);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(-1);
                }}
              >
                <Image
                  src={celeb.profileImg}
                  alt={celeb.name}
                  width={204}
                  height={204}
                />

                <span
                  className={`absolute opacity-0 transition-all duration-500 ease-in ${
                    hoveredIndex === i && "opacity-100"
                  }`}
                >
                  <FaLink color="ff8503" size={44} />
                </span>
              </Link>
              <h2 className="text-white font-jost font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase">
                {celeb.name}
              </h2>
              <div className="flex items-center gap-2 my-1">
                <Link href={celeb.twitter}>
                  <FaTwitter color="#ffb42f" size={28} />
                </Link>
                <Link href={celeb.youtube}>
                  <FaYoutube color="#ffb42f" size={28} />
                </Link>
                <Link href={celeb.instagram}>
                  <FaInstagram color="#ffb42f" size={28} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Promoters;
