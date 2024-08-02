import React from "react";
import Menu from "./menu";
import Search from "./search";
const Header = () => {
  return (
    <div className="flex justify-around">
      <img className="w-[158px] h-9" src="./photo/Logo.png" alt="Logo" />
      <Menu />
      <Search />
    </div>
  );
};

export default Header;
