import { Button } from "@/components/ui/button";
import { brandLinks } from "@/constant";
import { aboutKatanaInu } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";

const Brand = () => {
  return (
    <div className="text-white main-container">
      <div className="flex items-center justify-center gap-5 sm:gap-8 xl:gap-10 py-6 ">
        {brandLinks.map((brand, i) => (
          <Link
            key={i}
            href={brand.linkPath}
            target={brand.linkPath.length !== 1 ? "_blank" : "_parent"}
          >
            <Image src={brand.imgPath} alt="" width={210} height={82} />
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
        <div className="flex-1">
          <h2 className="text-lg md:text-xl xl:text-2xl text-[#f5a238] pb-4 sm:pb-6">
            About katana inu
          </h2>
          <ul>
            {aboutKatanaInu.map((li, i) => (
              <li
                key={i}
                className="flex items-start gap-2 py-3 font-medium text-[#e7e7e7]"
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
          <div className="flex flex-wrap 2xl:flex-nowrap items-center justify-center gap-3 pt-2 mx-5">
            <Link
              href={"https://twitter.com/katanainu"}
              target="_blank"
              rel="norefferer"
            >
              <Button
                variant="customAnimated"
                className="min-w-[180px] text-[12px] font-semibold uppercase"
              >
                follow us on twitter
              </Button>
            </Link>
            <Link href={"https://discord.com/invite/katanainu"}>
              <Button
                variant="customAnimated"
                className="min-w-[180px] text-[12px] font-semibold uppercase"
              >
                Join our discord
              </Button>
            </Link>
            <Link href={"#"} target="_blank" rel="norefferer">
              <Button
                variant="customAnimated"
                className="min-w-[180px] text-[12px] font-semibold uppercase"
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
