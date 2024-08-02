import React from "react";

const Copyright = () => {
  return (
    <div className="flex justify-around border-t-2 p-10">
      <img
        className="w-[231px] h-[54px]"
        src="./photo/Copyright.png"
        alt="logo"
      />
      <ul className="flex gap-5 justify-around font-normal text-base text-gray-600">
        <li className="border-r m-2 pr-5">Terms of Use</li>
        <li className="border-r m-2 pr-5">Privacy Policy</li>
        <li className="m-2 p-5">Cookie Policy</li>
      </ul>
    </div>
  );
};

export default Copyright;
