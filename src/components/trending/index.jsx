import React, { useContext } from "react";
import Card from "./Card";
import { MyContext } from "@/provider/provider";

const PostCards = () => {
  const { articles, searchValue } = useContext(MyContext);

  console.log("Contect", useContext(MyContext));
  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl font-bold leading-7 ml-[450px] p-5">
        Trending {searchValue}
      </h1>
      <div className="flex flex-wrap max-w-[1280px] m-auto gap-4 items-center justify-center">
        {articles?.map((article) => (
          <Card article={article} />
        ))}
      </div>
    </div>
  );
};

export default PostCards;
