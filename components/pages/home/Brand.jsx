import { Button } from "@/components/ui/button";
import { brandLinks } from "@/constant";
import { aboutKatanaInu } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";

const Brand = () => {
  return (
    <div className="text-white main-container">
      <div className="flex items-center justify-center gap-5 sm:gap-8 xl:gap-12 2xl:gap-20 py-6 ">
        {brandLinks.map((brand, i) => (
          <Link
            key={i}
            href={brand.linkPath}
            target={brand.linkPath.length !== 1 ? "_blank" : "_parent"}
          >
            <Image src={brand.imgPath} alt="" width={250} height={82} />
          </Link>
        ))}
      </div>

      <section className=" flex flex-col gap-5 sm:gap-7 lg:flex-row">
        <div className="relative w-full min-h-[373px] sm:min-h-[641px] flex-1">
          <Image
            src={"/assets/images/aboutImg.png"}
            alt="dog nft with sowrd"
            fill
            className="object-contain"
          />
        </div>

        {/* texts */}
        <div className="flex-1 py-10">
          <h2 className="text-lg md:text-xl xl:text-2xl text-[#f5a238] pb-4 sm:pb-6">
            About katana inu
          </h2>
          <ul className="ml-0">
            {aboutKatanaInu.map((li, i) => (
              <li
                key={i}
                className="flex items-start gap-2 py-3 font-medium text-[#e7e7e7] list-none"
              >
                <span className="w-4">
                  <FaCircleArrowRight
                    color="#f5a238"
                    size={16}
                    className="inline-flex"
                  />
                </span>
                <span>{li.text}</span>
              </li>
            ))}
          </ul>

          {/* btn */}
          <div className="flex flex-wrap 2xl:flex-nowrap items-center justify-between gap-3 pt-2 2xl:pt-4 mx-1">
            <Link
              href={"https://twitter.com/katanainu"}
              target="_blank"
              rel="norefferer"
            >
              <Button
                variant="customAnimated"
                className="min-w-[190px] text-[12px] font-bold uppercase"
              >
                follow us on twitter
              </Button>
            </Link>
            <Link href={"https://discord.com/invite/katanainu"}>
              <Button
                variant="customAnimated"
                className="min-w-[190px] text-[12px] font-bold uppercase"
              >
                Join our discord
              </Button>
            </Link>
            <Link href={"#"} target="_blank" rel="norefferer">
              <Button
                variant="customAnimated"
                className="min-w-[190px] text-[12px] font-bold uppercase"
              >
                Sign up to newsletter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;
