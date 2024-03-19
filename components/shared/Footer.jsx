"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { footerLinks } from "@/constant";

const Footer = () => {
  const handleFormSubmit = (e) => {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzeAbxFMf2EMhqDI4UOSRb7scAankyXCIp57WQmo0uqrCq8PlrzXBJ4FrWAYTyxBydU/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <footer className="section-padding bg-black border-b-2 border-[#ffb42f]">
      <section className="main-container flex flex-col md:flex-row gap-10 justify-between">
        {/* logo */}
        <div className="flex flex-col mb-10 md:mb-0 min-w-[325px]">
          <Link href={"/"}>
            <Image
              src="/assets/images/logo.png"
              alt="Katana Inu logo"
              width={136}
              height={139}
              className="mb-7 sm:mb-9 md:mb-12"
            />
          </Link>
          <h5 className="text-white font-jost uppercase text-xs sm:text-sm md:text-base mb-3 sm:mb-5 md:mb-7">
            Don&apos;t miss our latest news
          </h5>
          {/* form data */}
          <form
            onSubmit={(e) => {
              handleFormSubmit(e);
            }}
            className="flex items-center form"
          >
            <div className="bg-transparent rounded-full border border-[#414141] p-1">
              <label htmlFor="email">
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-[150px] bg-transparent text-white outline-none px-3 mr-2 h-14 placeholder:text-[#7a7676] placeholder:font-medium"
                />
              </label>
              <Button className="rounded-full bg-[#f3a511] hover:bg-[#f3a511] sm:px-8 h-14 2xl:text-base">
                Subscribe!
              </Button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {/* fotter links */}
          <div>
            <h5 className="font-jost text-white uppercase text-base mb-4 sm:mb-6">
              Game
            </h5>
            <ul className="flex flex-col gap-4 sm:gap-6">
              {footerLinks.game.map((link, i) => (
                <li key={i} className=" list-none">
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noreferer"
                    className="text-white hover:text-[#ffb42f] hover:opacity-100 transition-all duration-300 ease-in opacity-70 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-jost text-white uppercase text-base mb-4 sm:mb-6">
              Contact
            </h5>
            <ul className="flex flex-col gap-4 sm:gap-6">
              {footerLinks.contact.map((link, i) => (
                <li key={i} className=" list-none">
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noreferer"
                    className="text-white  hover:text-[#ffb42f] hover:opacity-100 transition-all duration-300 ease-in opacity-70 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-jost text-white uppercase text-base mb-4 sm:mb-6">
              Legal
            </h5>
            <ul className="flex flex-col gap-4 sm:gap-6">
              {footerLinks.legal.map((link, i) => (
                <li key={i} className=" list-none">
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noreferer"
                    className="text-white  hover:text-[#ffb42f] hover:opacity-100 transition-all duration-300 ease-in opacity-70 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="section-margin py-6 sm:py-8 md:py-10lg:py-12 text-sm font-medium text-white text-center font-jost">
        All rights reserved by{" "}
        <span className="text-[#f3a511]">Chainvision Games</span>
      </div>
    </footer>
  );
};

export default Footer;
