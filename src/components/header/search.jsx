import React from "react";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <button className="flex gap-3 border rounded-md bg-slate-100 w-[166px] h-9 items-center p-2 justify-between">
      <p className="text-sm text-gray-400">Search</p>
      <CiSearch />
    </button>
  );
};

export default Search;
