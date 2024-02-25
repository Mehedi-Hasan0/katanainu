"use client";

import { navlinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const MobileNavbar = () => {
  //// STATE ////
  const [showMobieNav, setShowMobileNav] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState({});

  //// REFS ////
  const navElementRef = useRef(null);

  //// LOGIC ////
  const openMobileMenu = () => {
    setShowMobileNav(true);
  };

  const closeMobileMenu = () => {
    setShowMobileNav(false);
    setShowSubMenu({});
  };

  // This handle mobile sub menu toggle
  const toggleSubMenu = (id) => {
    setShowSubMenu((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggling the state for the clicked submenu
    }));
  };

  // This handle mobile menu translate issue
  useEffect(() => {
    const navElement = navElementRef.current;

    if (showMobieNav) {
      navElement.classList.remove("invisible");
      return;
    }

    if (!showMobieNav && !navElement.classList.contains("invisible")) {
      const timeoutId = setTimeout(() => {
        navElement.classList.add("invisible");
        console.log("fired after 3 ms");
      }, 300);

      return () => {
        clearTimeout(timeoutId);
        navElement.classList.remove("invisible");
      };
    } else {
      navElement.classList.remove("invisible");
    }
  }, [showMobieNav]);

  return (
    <>
      <button onClick={openMobileMenu}>
        <IoMenu size={30} color="#000" />
      </button>

      {/* mobile menu */}
      <nav
        ref={navElementRef}
        className={`${
          showMobieNav
            ? "animate-slide-in visible"
            : "animate-slide-out invisible"
        } mobile-menu-container`}
      >
        {/* logo and close btn */}
        <div className="navLogo">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="w-[150px]"
            />
          </Link>
          <button
            onClick={closeMobileMenu}
            className={`
              ${showMobieNav && "rotate-90 transition-all ease-in duration-700"}
            `}
          >
            <IoClose size={24} color="#000" />
          </button>
        </div>

        {/* nav links */}
        <ul className="border-b border-[#00000016]">
          {navlinks.textLinks.map((link, i) => (
            <Accordion key={i} type="single" collapsible>
              <AccordionItem value={`item-${i}`}>
                {/* menu */}
                <li className="border-t border-[#00000016]">
                  <span className=" flex justify-between items-center pl-[25px] pr-[14px] py-[8px]">
                    <Link
                      href={link.path}
                      className=" font-medium text-[15px] capitalize w-full"
                      target={i === 1 || i === 2 ? "_blank" : ""}
                      rel="norefferer"
                    >
                      {link.label}
                    </Link>

                    <AccordionTrigger>
                      <span
                        className={`nav-dropdown ${
                          showSubMenu[link.label] ? "rotate-90" : ""
                        }`}
                        onClick={() => toggleSubMenu(link.label)}
                      >
                        <IoIosArrowDown size={16} />
                      </span>
                    </AccordionTrigger>
                  </span>

                  {/* sub menu if exist */}
                  <AccordionContent>
                    <ul>
                      {link.subMenu &&
                        link.subMenu.map((subLink, i) => (
                          <li
                            key={subLink.label}
                            className=" pl-[25px] pr-[14px] py-3 border-t border-[#00000016]"
                          >
                            <Link
                              href={subLink.path}
                              className=" font-medium text-[15px] capitalize ml-6"
                              target={
                                i === 5 || i === 6 || i === 7 ? "_blank" : ""
                              }
                              rel="noreferer"
                            >
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </AccordionContent>
                </li>
              </AccordionItem>
            </Accordion>
          ))}
        </ul>

        {/* social links */}
        <ul className="flex gap-5 justify-center items-center px-6 py-8">
          {navlinks.socialLinks.map((link, i) => (
            <li key={i} className={i === 4 && "hidden"}>
              <Link href={link.path} target="_blank">
                <Image
                  width={16}
                  height={16}
                  src={link.imageUrlC}
                  alt={link.name}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* bg overlay when mobile menu open */}
      <div
        className={`${
          showMobieNav
            ? "animate-fade-in visible"
            : "animate-fade-out invisible"
        } bg-overlay `}
      />
    </>
  );
};

export default MobileNavbar;
