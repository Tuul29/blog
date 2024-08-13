import { useContext, useEffect, useState } from "react";
import AllCards from "@/components/all-Post";
import Hero from "@/components/hero/hero";
import PostCards from "@/components/trending";
import { MyContext } from "@/provider/provider";

export default function Home() {
  const { searchValue, articles, isLoading } = useContext(MyContext);
  return (
    <main className="flex flex-col gap-[100px] p-[100px]">
      <Hero />
      <h2>Хайлт: {searchValue}</h2>
      <div className="flex flex-wrap max-w-[1280px] m-auto gap-4">
        {isLoading ? (
          <Loader />
        ) : (
          articles.map((article) => (
            <PostCards key={article.id} article={article} />
          ))
        )}
      </div>

      <AllCards />
    </main>
  );
}
