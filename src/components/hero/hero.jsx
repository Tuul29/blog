import React from "react";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import { useState, useEffect } from "react";
import CoverCard from "./cover";
const Hero = () => {
  console.log("HOME FUNCTION");
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);

  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=2&per_page=5"
    );
    const data = await response.json();
    setArticles(data);
    console.log("DOWNLOADED DATA");
  };

  useEffect(() => {
    console.log("EFFECT");
    getArticleData();
  }, []);
  const [articleIndex, setArticleIndex] = useState(0);
  return (
    <div className="flex flex-col ">
      <div
        className="flex max-w-[1280px] m-auto gap-4 items-center transition-all duration-150"
        style={{ transform: `translateX(-${articleIndex * 100})` }}
      >
        {articles?.map((article) => (
          <CoverCard article={article} />
        ))}
      </div>
      <div className="flex justify-end gap-2 mr-[450px] p-5">
        <CiSquareChevLeft
          className="size-10"
          onClick={() => {
            setArticleIndex(articleIndex - 1);
          }}
        />
        <CiSquareChevRight
          className="size-10"
          onClick={() => {
            setArticleIndex(articleIndex + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
