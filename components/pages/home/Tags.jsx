"use client";

import { gameTags } from "@/data";
import { useState } from "react";

const Tags = () => {
  const [active, setActive] = useState(-1);
  return (
    <div className="mt-4 md:mt-6 w-full lg:w-[80%]">
      <ul className="flex flex-wrap gap-3 2xl:gap-5">
        {gameTags.map((tag, i) => (
          <li
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(-1)}
            className={` text-sm sm:text-base md:text-lg capitalize  py-[6px] px-3 rounded-md font-jost transition-all duration-300 ease-in list-none ${
              active === i
                ? "bg-[#f9c306] text-black"
                : "bg-[#12151b] text-white"
            }`}
          >
            <span
              className={`${
                active !== i && "text-[#f9c306]"
              } transition duration-100 ease-in-out`}
            >
              {tag.type}
            </span>{" "}
            {tag.tags}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
