import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import CoreSystems from "@/components/home/CoreSystems";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col">
        <Hero />
        <CoreSystems />
      </main>
    </div>
  );
}
