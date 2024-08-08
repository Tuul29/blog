import AllCards from "@/components/all-Post";
import Hero from "@/components/hero/hero";
import PostCards from "@/components/trending";

export default function Home() {
  return (
    <main className="flex flex-col gap-[100px] p-[100px]">
      <Hero />
      <PostCards />
      <AllCards />
    </main>
  );
}
