import Image from "next/image";
import StickyHeaderName from "@/components/StickyHeaderName";
import WelcomeMessage from "@/components/WelcomeMessage";

export default function Home() {
  return (
    <>
      <WelcomeMessage />
      <main className="min-h-screen flex flex-col items-center justify-center text-white mt-30">
        <div>
          <h1 className="text-3xl font-bold mt-30">Sabina Portofolio</h1>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Sabina Portofolio</h1>
        </div>
        <div>
          <h1 className="text-3xl font-bold mt-30">Sabina Portofolio</h1>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Sabina Portofolio</h1>
        </div>
        <div>
          <h1 className="text-3xl font-bold mt-1000">Sabina Portofolio</h1>
        </div>
      </main>
    </>
  );
}
