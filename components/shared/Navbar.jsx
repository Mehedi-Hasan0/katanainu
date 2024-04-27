"use client";

import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { navlinks } from "@/constant";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollNav, setShowScrollNav] = useState(false);
  const [isFirstLinkHovered, setIsFirstLinkHovered] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(-1);
  const [isSecondLinkHovered, setIsSecondLinkHovered] = useState(false);
  const [activeSecondSubMenu, setActiveSecondSubMenu] = useState(-1);
  const subMenuRef = useRef(null);

  const pathName = usePathname();

  const handleFirstLinkHover = () => {
    setIsFirstLinkHovered(true);
  };

  const handleFirstLinkMouseLeave = () => {
    setIsFirstLinkHovered(false);
    setActiveSubMenu(false);
  };

  const handleSecondLinkHover = () => {
    setIsSecondLinkHovered(true);
  };

  const handleSecondLinkMouseLeave = () => {
    setIsSecondLinkHovered(false);
    setActiveSecondSubMenu(false);
  };

  const handleListMouseLeave = (i) => {
    if (i === 0) {
      handleFirstLinkMouseLeave();
    } else if (i === 1) {
      handleSecondLinkMouseLeave();
    } else {
      handleFirstLinkMouseLeave();
      handleSecondLinkMouseLeave();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowScrollNav(scrollPosition >= window.innerHeight);
  }, [scrollPosition]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        setIsFirstLinkHovered(false);
        setIsSecondLinkHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={` top-0 left-0 w-full z-50 ${
        showScrollNav ? "fixed animate-fade-in bg-black" : "absolute"
      }`}
    >
      <div className="main-container max-screen-width">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="flex-1 lg:flex-initial">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={70}
              height={70}
              priority={true}
              className={`w-[70px] h-[70px] ${
                !showScrollNav && " xl:w-[117px] xl:h-[120px]"
              }`}
            />
          </Link>

          {/* nav links */}
          <ul
            className="hidden lg:flex items-center text-sm text-primary-color font-semibold uppercase xl:flex-1 2xl:flex-initial xl:ml-5"
            ref={subMenuRef}
          >
            {navlinks.textLinks.map((link, i) => (
              <li
                key={i}
                onMouseLeave={() => handleListMouseLeave(i)}
                className={`py-5 px-4 2xl:px-8 list-none ${
                  (i === 0 && isFirstLinkHovered) ||
                  (i === 1 && isSecondLinkHovered)
                    ? "relative"
                    : ""
                }`}
              >
                <Link
                  href={link.path}
                  target={i === 2 || i === 3 ? "_blank" : "_parent"}
                  rel="noreferrer"
                  className={`text-base 2xl:text-lg relative hover:text-[#f5a238] font-medium ${
                    i !== 0 && i !== 1 && "nav-links"
                  }`}
                  onMouseEnter={
                    i === 0
                      ? handleFirstLinkHover
                      : i === 1
                      ? handleSecondLinkHover
                      : () => {
                          setIsFirstLinkHovered(false);
                          setIsSecondLinkHovered(false);
                        }
                  }
                >
                  {link.label}
                </Link>
                {/* sub menu */}
                <ul
                  onMouseLeave={i === 0 ? handleFirstLinkMouseLeave : undefined}
                  className={`top-[115%] left-0 transition-all duration-700 ease-in-out rounded-[5px] min-w-[230px] py-4 z-50 -mt-5 ${
                    isFirstLinkHovered && i === 0
                      ? "w-full opacity-100 absolute bg-[#0d0d0f] animate-fade-in"
                      : "opacity-0 hidden"
                  }`}
                >
                  {link.subMenu?.map((subM, i) => (
                    <li key={i} className=" list-none">
                      <Link
                        href={subM.path}
                        onMouseEnter={() => setActiveSubMenu(i)}
                        onMouseLeave={() => setActiveSubMenu(-1)}
                        className={`py-4 px-5 border-t border-b border-dashed border-transparent hover:border-[#f5a238] transition-all duration-700 ease-in-out cursor-pointer block ${
                          activeSubMenu === i || pathName === subM.path
                            ? "text-[#f5a238]"
                            : "text-white"
                        }`}
                      >
                        {subM.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* second sub menu */}
                <ul
                  onMouseLeave={
                    i === 1 ? handleSecondLinkMouseLeave : undefined
                  }
                  className={`top-[115%] left-0 transition-all duration-700 ease-in-out rounded-[5px] min-w-[230px] py-4 z-50 -mt-5 ${
                    isSecondLinkHovered && i === 1
                      ? "w-full opacity-100 absolute bg-[#0d0d0f] animate-fade-in"
                      : "opacity-0 hidden"
                  }`}
                >
                  {link.secondSubMenu?.map((subM, i) => (
                    <li key={i} className=" list-none">
                      <Link
                        href={subM.path}
                        target={
                          i === 1 || i === 2 || i === 3 ? "_blank" : "_parent"
                        }
                        rel="noreferer"
                        onMouseEnter={() => setActiveSecondSubMenu(i)}
                        onMouseLeave={() => setActiveSecondSubMenu(-1)}
                        className={`py-4 px-5 border-t border-b border-dashed border-transparent hover:border-[#f5a238] transition-all duration-700 ease-in-out cursor-pointer block ${
                          activeSecondSubMenu === i || pathName === subM.path
                            ? "text-[#f5a238]"
                            : "text-white"
                        }`}
                      >
                        {subM.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* social links */}
          <ul className="hidden sm:flex items-center gap-5 md:gap-10 mr-12 lg:mr-0">
            {navlinks.socialLinks.map((link, i) => (
              <li key={i} className=" list-none">
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
