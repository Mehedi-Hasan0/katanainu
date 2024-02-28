import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { navlinks } from "@/constant";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="main-container max-screen-width ">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="flex-1 lg:flex-initial">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={70}
              height={70}
              priority={true}
              className="w-[70px] h-[70px] xl:w-[117px] xl:h-[120px]"
            />
          </Link>

          {/* nav links */}
          <ul className="hidden lg:flex items-center text-sm text-primary-color font-semibold uppercase xl:flex-1 2xl:flex-initial xl:ml-5">
            {navlinks.textLinks.map((link, i) => (
              <li key={i} className="py-5 px-4 2xl:px-8">
                <Link
                  href={link.path}
                  className={`text-base 2xl:text-lg relative hover:text-[#f5a238] transition-all duration-300 ease-in-out ${
                    i !== 0 && "nav-links"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* social links */}
          <ul className="hidden sm:flex items-center gap-5 md:gap-10 mr-12 lg:mr-0">
            {navlinks.socialLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.path} target="_blank">
                  <Image
                    width={16}
                    height={16}
                    src={link.imageUrl}
                    alt={link.name}
                    className={`${
                      i === 4 ? "w-6" : i === 5 ? "w-4 md:w-[18px]" : "w-4"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
          {/* mobile nav & icons */}
          <div className="flex lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
