import React from "react";
import { useState, useEffect } from "react";
import Cards from "./card";
const AllCards = () => {
  console.log("HOME FUNCTION");
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);

  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=3&per_page=6"
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
      <h1 className="ml-[400px] text-2xl font-bold leading-7 p-4">
        All Blog Post
      </h1>
      <div className="flex justify-between mx-[400px]">
        <ul className="flex gap-6">
          <li>All</li>
          <li>Design</li>
          <li>Travel</li>
          <li>Fashion</li>
          <li>Technology</li>
          <li>Branding</li>
        </ul>
        <button>View All</button>
      </div>
      <div className="flex flex-wrap max-w-[1280px] m-auto gap-6 items-center justify-center">
        {articles?.map((article) => (
          <Cards article={article} />
        ))}
      </div>
      <button onClick={() => setCount(count + 1)}>Load More</button>
    </div>
  );
};

export default AllCards;
