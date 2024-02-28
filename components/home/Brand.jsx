import { brandLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <div className="text-white py-6 main-container">
      <div className="flex items-center justify-center gap-5 sm:gap-8 xl:gap-10">
        {brandLinks.map((brand) => (
          <Link
            href={brand.linkPath}
            target={brand.linkPath.length !== 1 ? "_blank" : "_parent"}
          >
            <Image src={brand.imgPath} alt="" width={210} height={82} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brand;
