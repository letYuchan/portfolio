import CheckerPattern from "@/pages/home/components/CheckerPattern";
import HeroSection from "@/pages/home/components/HeroSection";
import IntroSection from "@/pages/home/components/IntroSection";
import { useState } from "react";
import { motion } from "motion/react";

const Home = () => {
  const [activeTab, setActiveTab] = useState<"career" | "project" | "skill">(
    "career"
  );

  return (
    <main className="w-full h-full flex flex-col justify-start items-center">
      {/* introduce */}
      <IntroSection />

      <div className="w-full self-stretch">
        <CheckerPattern height={40} squareSize={20} />
      </div>
      {/* hero */}
      <HeroSection />
      <div className="w-full self-stretch">
        <CheckerPattern height={40} squareSize={20} />
      </div>

      {/* tab - career / project / skill&how */}
      <section className="w-full max-w-5xl px-4 py-20 flex flex-col items-center"></section>
    </main>
  );
};

export default Home;
