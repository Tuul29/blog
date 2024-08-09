import React from "react";
import Menu from "./menu";
import Search from "./search";

const Header = () => {
  return (
    <div className="flex justify-around pt-[20px]">
      <img className="w-[158px] h-9" src="./photo/Logo.png" alt="Logo" />
      <Menu />
      <Search />
    </div>
  );
};

export default Header;

// import Articles from "@/pages/articles";
// import Articles from "@/pages/articles";

// let Articles = [<Articles />];
// const [searchValue, setSearchValue] = useState("");
// const [users, setUsers] = useState([<Articles />]);
// const handleClick = () => {
//   setUsers();
// };
// const handleChange = (text) => {
//   setSearchValue(text);
//   const findUser = Articles.filter((user) =>
//     user.article.title.toLowerCase().includes(text.toLowerCase())
//   );
//   setUsers(findUser);
// };
// const showClick = () => {
//   setUsers(profiles);
// };
