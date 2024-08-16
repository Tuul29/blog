import React from "react";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import { useState, useEffect } from "react";
import CoverCard from "./cover";
const Hero = () => {
  console.log("HOME FUNCTION");
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);
  const [articleIndex, setArticleIndex] = useState(0);
  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=4&per_page=3"
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
      <div className="overflow-hidden h-[600px]">
        <CoverCard articles={articles} articleIndex={articleIndex} />
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
