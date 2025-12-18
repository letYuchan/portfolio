import CheckerPattern from "@/pages/home/components/CheckerPattern";
import HeroSection from "@/pages/home/components/HeroSection";
import IntroSection from "@/pages/home/components/IntroSection";
import { useState } from "react";
import type { Tab } from "@/pages/home/model/home.types";
import TabNavigation from "@/pages/home/components/TabNavigation";
import CareerSection from "@/pages/home/components/career/CareerSection";

const Home = () => {
  const [activeTab, setActiveTab] = useState<Tab>("career");

  // Mock Data
  const schools = [
    {
      name: "Seoul National University of Science and Technology",
      major: "Computer Engineering",
      period: "Mar 2021 - Present",
      description: "GPA: 3.9 / 4.5, Minor in Visual Design",
    },
  ];

  const careers = [
    {
      company: "SaaS Startup",
      position: "Frontend Developer",
      period: "Dec 2024 - Mar 2025",
      description:
        "Developed B2B task management SaaS and a golf course monitoring system",
    },
  ];

  const certificates = [
    {
      name: "Word Processor Level 1",
      issuer: "Korea Chamber of Commerce and Industry",
      date: "Nov 2022",
    },
  ];

  const awards = [
    {
      name: "Gold Prize, Term Project Competition",
      organization: "Seoul National University of Science and Technology",
      date: "Dec 2024",
    },
  ];

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
        </div>
      </section>
    </main>
  );
};

export default Home;
