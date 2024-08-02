import Link from "next/link";
import React from "react";
const menuList = [
  { label: "Home", link: "/#home" },
  { label: "Blog", link: "/#blog" },
  { label: "Contact", link: "/#contact" },
];
const Menu = () => {
  return (
    <ul className="flex gap-10 text-base text-gray-500">
      {menuList.map((menu) => (
        <li>
          <a href={menu.link}>{menu.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
