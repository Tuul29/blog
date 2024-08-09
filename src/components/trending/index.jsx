import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const PostCards = () => {
  console.log("HOME FUNCTION");
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);

  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=1&per_page=4"
    );
    const data = await response.json();
    setArticles(data);
    console.log("DOWNLOADED DATA");
  };

  useEffect(() => {
    console.log("EFFECT");
    getArticleData();
  }, []);
  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl font-bold leading-7 ml-[450px] p-5">Trending</h1>
      <div className="flex flex-wrap max-w-[1280px] m-auto gap-4 items-center justify-center">
        {articles?.map((article) => (
          <Card article={article} />
        ))}
      </div>
    </div>
  );
};

export default PostCards;
