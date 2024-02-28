import Image from "next/image";
import { Button } from "../ui/button";
import ArrowIcon from "../shared/ArrowIcon";
import Link from "next/link";

const Bannner = () => {
  return (
    <section>
      <video
        src="https://res.cloudinary.com/dlhexsnxq/video/upload/v1709041993/bg-video_lq0fuk.mp4"
        autoPlay
        muted
        loop
        poster="/assets/images/thumbnail2.png"
        width={"100%"}
        height={"100%"}
        className="w-full h-svh md:h-screen object-cover"
      />
      {/* overlay/backdrop/shadow */}
      <div className=" bg-gradient-to-b from-black/10 to-black/20 absolute w-full h-full z-10 top-0 left-0" />

      {/* inner content */}
      <div className="absolute top-[35%] left-0 w-full flex flex-col justify-center items-center gap-5 sm:gap-7 z-20 px-10 text-center">
        <h1 className="text-2xl sm:text-[40px]">
          <Image
            src="/assets/images/title2.png"
            alt=""
            width={"496"}
            height={"59"}
            priority={true}
            className="lg:w-[741px] lg:h-[88px]"
          />
        </h1>
        <h2 className="text-lg lg:text-[28px] uppercase text-white font-medium">
          Multiplayer on-chain action game
        </h2>

        {/* btn */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 pt-2">
          <Link
            href={"https://mint.katanainu.com/"}
            target="_blank"
            rel="norefferer"
          >
            <Button
              variant="customAnimated"
              className="flex items-center gap-2 min-w-[190px] text-sm sm:text-base"
            >
              Mint NFTs
              <ArrowIcon />
            </Button>
          </Link>
          <Button
            variant="customAnimated"
            className="flex items-center gap-2 min-w-[190px] text-sm sm:text-base"
          >
            Purchase Token
            <ArrowIcon />
          </Button>
          <Link
            href={"https://play.katanainu.com/"}
            target="_blank"
            rel="norefferer"
          >
            <Button
              variant="customAnimated"
              className="flex items-center gap-2 min-w-[190px] text-sm sm:text-base"
            >
              Play
              <ArrowIcon />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bannner;
