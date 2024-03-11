"use client";

import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <section className="main-container section-margin bg-[url('/assets/images/newsletter.png')] bg-no-repeat bg-cover bg-[45%_0%] relative">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 sm:bg-black/20 block md:hidden" />
      <div className="flex justify-center sm:justify-end py-14 sm:pl-7 sm:mr-3 relative z-[1]">
        <div className="flex flex-col gap-1 xl:gap-2">
          <h3 className="italic text-[#f9c306] text-xl md:text-2xl lg:text-3xl 2xl:text-[34px] font-medium font-jost uppercase">
            Join our Journey
          </h3>
          <h2 className="font-semibold text-white text-heading-2 font-jost uppercase">
            Sign up to our newsletter
          </h2>
          {/* form data */}
          <form onSubmit={handleFormSubmit} className="flex items-center">
            <div className="bg-transparent rounded-full border border-[#414141] p-1">
              <label htmlFor="email">
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-[150px] sm:min-w-[200px] bg-transparent text-white outline-none px-3 mr-2 h-14 placeholder:text-[#7a7676] placeholder:font-medium"
                />
              </label>
              <Button className="rounded-full bg-[#f3a511] hover:bg-[#f3a511] sm:px-8 h-14 2xl:text-base">
                Subscribe!
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
