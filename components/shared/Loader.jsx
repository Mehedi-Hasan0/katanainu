"use client";

import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <PulseLoader color="#ffc306" size={15} speedMultiplier={0.6} />
    </div>
  );
};

export default Loader;
