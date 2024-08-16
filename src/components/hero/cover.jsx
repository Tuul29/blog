import React from "react";
import Link from "next/link";

const CoverCard = ({ articles, articleIndex }) => {
  return (
    <div
      className="flex h-full transition-all duration-150 border p-4 gap-4 w-full"
      style={{ transform: `translateX(-${articleIndex * 100}%)` }}
    >
      {articles.map((article) => (
        <div className="min-w-full h-full">
          <div className="">
            <img
              src={
                article.social_image ? article.social_image : "/default.avif"
              }
              className="rounded-[6px] "
            />
          </div>
          <div className="">
            <span className="text-[#4B6BFB] bg-[#4B6BFB]/5 px-[10px] py-1 block rounded-[6px]">
              {article?.type_of}
            </span>
            <h2 className="text-2xl font-semibold truncate">{article.title}</h2>
            <div className="flex items-center gap-2 ">
              <img
                src={article.user.profile_image}
                className="w-[36px] h-[36px] rounded-full"
              />
              <p className="text-[#97989F] text-4">{article.user.name}</p>
              <p className="text-[#97989F] text-4">{article.published_at}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoverCard;
