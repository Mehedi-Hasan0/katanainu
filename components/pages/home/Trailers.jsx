import Image from "next/image";
import TrailerCarouosel from "./TrailerCarouosel";

const Trailers = () => {
  return (
    <>
      <section className="main-container">
        <div className="mb-[-110px] sm:mb-[-165px] md:mb-[-195px] lg:mb-[-260px] xl:mb-[-325px] relative z-[1] text-center gallery-image">
          <div className="flex flex-col justify-center items-center gap-1 md:absolute top-14 left-0 right-0">
            <h5 className="uppercase text-gradient font-bold tracking-[2px] text-lg md:text-xl lg:text-2xl font-jost">
              Katana inu
            </h5>
            <h2 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] text-white font-jost font-bold">
              MEDIA
            </h2>
          </div>

          <Image
            src="/assets/images/gallery_img.webp"
            alt=""
            width={1290}
            height={1075}
            className="bg-[center_0]"
          />
        </div>
      </section>
      {/* Carousel */}
      <TrailerCarouosel />
    </>
  );
};

export default Trailers;
