"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { sliderImg } from "@/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import { Dialog, DialogContent } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

const TrailerCarouosel = () => {
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );
  const [slidesPerView, setSlidesPerView] = useState(
    innerWidth > 1536 ? 2 : innerWidth < 768 ? 1 : 1.6
  );
  const [playSvgSize, setPlaySvgSize] = useState(
    innerWidth > 1536 ? 32 : innerWidth < 768 ? 28 : 24
  );
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [ytVideoUrl, setYtVideoUrl] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      setInnerWidth(window.innerWidth);
      setSlidesPerView(innerWidth > 1536 ? 2 : innerWidth < 768 ? 1 : 1.6);
      setPlaySvgSize(innerWidth > 1536 ? 32 : innerWidth < 768 ? 28 : 24);
    };

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [innerWidth]);

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
      <div className="flex items-stretch px-4 md:px-0">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          effect={"coverflow"}
          centeredSlides={true}
          loop="true"
          navigation
          slidesPerView={slidesPerView}
          spaceBetween={180}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
        >
          {sliderImg.map((slider, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <Image
                  src={slider.imgUrl}
                  alt="katana inu gameplay trailers"
                  width={1000}
                  height={431}
                  className="border border-[#f5a238] xl:w-full"
                />
                <h4 className="font-jost text-xl sm:text-3xl uppercase text-white font-bold text-center pt-2 sm:pt-5">
                  Gameplay trailer
                </h4>

                <Dialog>
                  <DialogTrigger asChild>
                    <span
                      className="absolute top-0 flex justify-center items-center w-full h-full"
                      onClick={() => {
                        setYtVideoUrl(slider.youtubeUrl);
                      }}
                    >
                      <span className="cursor-pointer p-6 lg:p-7 2xl:p-9 bg-[#ffb42f] rounded-full flex justify-center items-center">
                        <FaPlay color="#000" size={playSvgSize} />
                      </span>
                    </span>
                  </DialogTrigger>
                  <DialogContent>{ytVideoUrl}</DialogContent>
                </Dialog>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TrailerCarouosel;
