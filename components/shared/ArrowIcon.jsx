"use client";

import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ArrowIcon = () => {
  const initialScreenSize = typeof window !== "undefined" && window.innerWidth;
  const [screenSize, setScreenSize] = useState(initialScreenSize);

  useEffect(() => {
    if (typeof window !== undefined) {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);

  // console.log(screenSize, "screen");

  return (
    <>
      <MdOutlineKeyboardArrowRight
        color="#fff"
        size={screenSize < 768 ? 24 : 28}
      />
    </>
  );
};

export default ArrowIcon;
