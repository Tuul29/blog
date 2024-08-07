import React from "react";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
const Hero = () => {
  return (
    <div>
      <div className="bg-contain bg-center background-image: url(@/photo/Logo.png) items-center">
        <div className="w-[598px] h-[252px] rounded-lg  object-left-bottom">
          <button className="rounded-lg bg-sky-700 text-white p-1 text-[14px]">
            Technology
          </button>
          <h3 className="text-4xl">
            Grid system for better Design User Interface
          </h3>
          <p className="text-sm text-slate-400">August 20, 2022</p>
        </div>
      </div>
      <div className="flex gap-2 ">
        <CiSquareChevLeft className="size-10" />
        <CiSquareChevRight className="size-10" />
      </div>
    </div>
  );
};

export default Hero;
