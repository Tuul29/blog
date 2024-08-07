import { useEffect, useState } from "react";

import React from "react";

const PostCards = () => {
  const [articles, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles?page-1");
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  console.log("articles", articles);
  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-4">
      {articles.map((card) => (
        <div className="border-2 p-3 rounded-xl border-gray-100 flex flex-col gap-4">
          <img
            className="w-[360px] h-[240px] rounded-lg "
            src="{card.cover_image}"
            alt=""
          />
          <p className="bg-slate-100 text-[#4b6bfb] text-sm font-medium w-24 p-2 rounded-lg">
            {card.typo_of}
          </p>
          <h3 className="text-2xl font-bold">{card.teitle}</h3>
          <span className="text-base font-normal text-white">
            {card.published_at}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PostCards;
