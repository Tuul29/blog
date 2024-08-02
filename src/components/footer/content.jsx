import React from "react";
const menuList = [
  { label: "Home", link: "/#home" },
  { label: "Blog", link: "/#blog" },
  { label: "Contact", link: "/#contact" },
];
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
const Content = () => {
  return (
    <div className="flex justify-around ">
      <div className="flex flex-col">
        <h5 className="text-lg text-black font-semibold">About</h5>
        <p className="w-[298px] font-normal text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          ratione aspernatur eos omnis soluta illum autem magnam fugit. A vel
          consequuntur tempora, perspiciatis in reiciendis. Aperiam atque et
          quas ipsa?
        </p>
        <a
          className="text-lg text-black font-semibol"
          href="mailto:info@jstemplate.net"
        >
          Email : info@jstemplate.net
        </a>
        <a
          className="text-lg text-black font-semibol"
          href="tel:+880 123 456 789"
        >
          Phone : 880 123 456 789{" "}
        </a>
      </div>
      <div>
        <ul className=" gap-10 text-base text-gray-500">
          {menuList.map((menu) => (
            <li>
              <a href={menu.link}>{menu.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex gap-8">
          <IoLogoFacebook />
          <IoLogoTwitter />
          <IoLogoInstagram />
          <IoLogoLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Content;
