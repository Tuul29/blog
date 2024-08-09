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
      "https://dev.to/api/articles?page=5&per_page=1"
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
    <div>
      <div className="flex flex-col ">
        <div className="flex flex-wrap max-w-[1280px] m-auto gap-4 items-center justify-center">
          {articles?.map((article) => (
            <CoverCard article={article} />
          ))}
        </div>
        <div className="flex justify-end gap-2 mr-[450px] p-5">
          <CiSquareChevLeft className="size-10" />
          <CiSquareChevRight className="size-10" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
