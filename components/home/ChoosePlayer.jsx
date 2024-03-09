"use client";

import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { EffectCoverflow, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { chooseHero } from "@/data";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";

SwiperCore.use([Navigation]);

const swiperOptions = {
  navigation: {
    prevEl: ".chooseHero-prev",
    nextEl: ".chooseHero-next",
  },
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
  },
};

const ChoosePlayer = () => {
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Navigation]);
      setSwiperLoaded(true);
    });
  }, []);

  if (!swiperLoaded) {
    return null; // loading state
  }

  return (
    <>
      <section className=" section-margin mb-20">
        <div className="flex flex-col gap-2 sm:gap-3 justify-center items-center">
          <h5 className="uppercase text-gradient tracking-[2px] text-xl sm:text-2xl md:text-3xl font-jost font-bold">
            Ready to play?
          </h5>
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-jost font-bold italic">
            Choose your warrior
          </h2>
        </div>

        {/* carousel */}
        <div className="relative flex items-center">
          {/* <span className="absolute left-0 flex justify-center items-center cursor-pointer chooseHero-prev z-[1]">
            <IoIosArrowBack color="#fff" size={42} />
          </span> */}
          <div className="w-full text-white p-6">
            <Swiper
              modules={[Navigation, EffectCoverflow]}
              effect={"coverflow"}
              centeredSlides={true}
              loop="true"
              navigation
              slidesPerView={2}
              spaceBetween={200}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
            >
              {chooseHero.map((hero, i) => (
                <SwiperSlide key={i} className="flex flex-col gap-1">
                  <Image
                    src={hero.heroImgUrl}
                    alt="game play character"
                    width={400}
                    height={500}
                    className="aspect-[150/187] object-contain xl:w-[400px] xl:h-[500px]"
                  />
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] italic font-bold text-center">
                    {hero.heroName}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <span className="absolute right-0 flex justify-center items-center cursor-pointer chooseHero-next z-[1]">
            <IoIosArrowForward color="#fff" size={42} />
          </span> */}
        </div>
      </section>
    </>
  );
};

export default ChoosePlayer;
