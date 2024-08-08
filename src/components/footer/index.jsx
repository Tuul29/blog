import React from "react";
import Content from "./content";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <div className="bg-slate-100 p-[50px]">
      <Content />
      <Copyright />
    </div>
  );
};

export default Footer;
