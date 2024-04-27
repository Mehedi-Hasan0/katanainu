"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RiskWarning = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleShowFullText = () => {
    setShowFullText((preV) => setShowFullText(!preV));
  };
  return (
    <div className="flex flex-col justify-center items-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-24">
      <h2 className="font-jost text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] uppercase font-bold text-center mb-7 sm:mb-9 md:mb-11 lg:mb-12">
        Risk warning
      </h2>
      <p className="text-[#d3d3d3] text-xs sm:text-sm md:text-base text-center max-w-[940px]">
        Cryptocurrency trading is subject to high market risk. Please make sure
        you always trade cautiously.{" "}
        <span className={showFullText ? "inline" : "hidden"}>
          Be advised that Katana Inu is not responsible for your trading losses.
          You are solely responsible for determining whether any investment,
          investment strategy or related transaction is appropriate for you and
          you shall be solely responsible for any loss or liability therefrom.
          Before trading, you should conduct your own due diligence and consult
          your financial advisors. Katana Inu will not be held responsible for
          the decisions you make to buy, sell, or hold any digital assets.
          Nothing herein shall be construed as Katana Inu providing any
          financial advice.
        </span>
      </p>
      <p className="text-[#d3d3d3] text-xs sm:text-sm md:text-base text-center max-w-[940px]">
        If you have any questions please don&apos;t hesitate to contact us:
        support@katanainu.com
      </p>

      {/* btn */}
      <button
        onClick={handleShowFullText}
        className="bg-[#ffb42f] rounded-full flex justify-center items-center px-3 py-3 mt-6"
      >
        {showFullText ? (
          <IoIosArrowUp color="#fff" size={32} />
        ) : (
          <IoIosArrowDown color="#fff" size={32} />
        )}
      </button>
    </div>
  );
};

export default RiskWarning;
