import Hero from "@/Components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-black">
      <div className="flex-1">
        <Hero></Hero>
      </div>
    </div>
  );
}