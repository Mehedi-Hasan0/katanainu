"use client";

import { navlinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

const MobileNavbar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <IoMenu size={32} color="#fff" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
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
            </div>
          </SheetHeader>

          {/* menu content */}
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

                      <AccordionTrigger />
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
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavbar;
