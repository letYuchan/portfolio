import CheckerPattern from "@/pages/home/components/CheckerPattern";
import HeroSection from "@/pages/home/components/HeroSection";
import IntroSection from "@/pages/home/components/IntroSection";
import { useState } from "react";
import type { Tab } from "@/pages/home/model/home.types";
import TabNavigation from "@/pages/home/components/TabNavigation";
import CareerSection from "@/pages/home/components/career/CareerSection";
import {
  awards,
  careers,
  certificates,
  schools,
  projects,
  skillCategories,
} from "@/pages/home/model/home.data";
import ProjectSection from "@/pages/home/components/project/ProjectSection";
import SkillSection from "@/pages/home/components/skill/SkillSection";
const Home = () => {
  const [activeTab, setActiveTab] = useState<Tab>("career");

  // Mock Data

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
      <section className="w-full max-w-5xl px-4 py-20 flex flex-col items-center">
        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <div className="w-full mt-12">
          {activeTab === "career" && (
            <CareerSection
              schools={schools}
              careers={careers}
              certificates={certificates}
              awards={awards}
            />
          )}
          {activeTab === "project" && <ProjectSection projects={projects} />}
          {activeTab === "skill" && (
            <SkillSection categories={skillCategories} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
