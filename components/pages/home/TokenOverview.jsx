"use client";

import { coinkataData } from "@/data";
import Image from "next/image";
import { useState } from "react";

const TokenOverview = () => {
  const [active, setActive] = useState(Array(coinkataData.length).fill(false));
  return (
    <section className="main-container section-margin">
      <div className="flex flex-col justify-center items-center gap-2 mb-10 xl:mb-[200px]">
        <h5 className="uppercase text-gradient font-bold tracking-[2px] text-lg md:text-xl lg:text-2xl font-jost">
          $Kata
        </h5>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] text-white font-jost font-bold uppercase">
          Token overview
        </h2>
        <span className="mt-3">
          <p className="text-white/40 text-sm md:text-base lg:text-lg text-center leading-7 max-w-[840px]">
            The $KATA Token is Katana Inu’s primary in-game currency. You will
            be able to buy in-game items, pay tournaments entry fees and get
            offers on trading fees. To take advantage of the Play & Earn system
            in game, you will need to hold $KATA.
          </p>
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-3 relative">
        <div className="lg:w-1/4 2xl:w-1/3 px-3 hidden md:block absolute right-0 bottom-0 lg:static">
          <Image
            src={"/assets/images/coinkata.webp"}
            alt="coin"
            width={403}
            height={330}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-start px-3 w-full md:w-3/4 2xl:w-2/3 coin-desc">
          {coinkataData.map((data, i) => (
            <div
              key={i}
              className="coin-item relative z-[1] my-4 mx-4 p-4 flex flex-col items-center lg:flex-row lg:items-start gap-4 cursor-pointer"
              onMouseEnter={() => {
                setActive((prevState) => {
                  const newState = [...prevState];
                  newState[i] = true;
                  return newState;
                });
              }}
              onMouseLeave={() => {
                setActive((prevState) => {
                  const newState = [...prevState];
                  newState[i] = false;
                  return newState;
                });
              }}
            >
              <img
                src={data.imgUrl}
                alt="coin-item"
                className={`${
                  i === 0
                    ? "w-20 h-16"
                    : i === 1
                    ? "w-14 h-11"
                    : i === 2
                    ? "w-20 h-16"
                    : "w-[100px] xl:w-[158px]"
                } ${
                  active[i] && "mt-2"
                } transition-all duration-500 ease-in-out`}
              />
              <div className="flex flex-col gap-3">
                <h5 className="text-white text-base sm:text-lg md:text-xl">
                  {data.label}
                </h5>
                <p className="text-white/60 text-sm sm:text-base">
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenOverview;
