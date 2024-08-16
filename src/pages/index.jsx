import { useContext, useEffect, useState } from "react";
import AllCards from "@/components/all-Post";
import Hero from "@/components/hero/hero";
import PostCards from "@/components/trending";
import { MyContext } from "@/provider/provider";
import Loader from "@/components/Loader";

export default function Home() {
  const { searchValue, isLoading } = useContext(MyContext);
  return (
    <main className="flex flex-col gap-[100px] p-[100px]">
      <h2>Хайлт: {searchValue}</h2>
      <Hero />
      <div className="flex flex-wrap max-w-[1280px] m-auto gap-4">
        {isLoading ? <Loader /> : <PostCards />}
      </div>

      <AllCards />
    </main>
  );
}
