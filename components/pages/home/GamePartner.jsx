import { Button } from "@/components/ui/button";
import { gamePartnerLogo } from "@/data";
import Image from "next/image";
import Link from "next/link";

const GamePartner = () => {
  return (
    <div className="flex flex-col my-8 sm:my-10 md:my-[50px]">
      <div className="flex flex-col justify-center items-center text-center mb-4 md:mb-6">
        <h2 className="font-jost text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] uppercase font-bold text-center mb-5">
          Game partners
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-white/40">
          Katana Inu has partnered with the following companies:
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 items-center pt-7 sm:pt-9 md:pt-11 gap-3">
        {gamePartnerLogo.map((gp, i) => (
          <Link href={"#"} key={i} className="flex justify-center items-center">
            <Image
              src={gp.imgUrl}
              alt={`KatanaInu game Parter ${i + 1}`}
              width={120}
              height={120}
              className="p-2"
            />
          </Link>
        ))}
      </div>

      <div className="mt-7 sm:mt-10 flex justify-center items-center">
        <Link href={"/partners"}>
          <Button
            variant="customAnimated"
            className="px-7 py-3 capitalize 2xl:px-9"
          >
            View all
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GamePartner;
