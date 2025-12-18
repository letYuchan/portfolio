import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import runningImg from "@/assets/imgs/home/running.png";
import studyingImg from "@/assets/imgs/home/studying.png";
import studyEngImg from "@/assets/imgs/home/studyEng.png";
import listenMusicImg from "@/assets/imgs/home/listenMusic.png";

interface FactSlide {
  image: string;
  title: string;
  description: string;
}

const facts: FactSlide[] = [
  {
    image: runningImg,
    title: "Running",
    description: "Staying healthy through consistent running",
  },
  {
    image: studyingImg,
    title: "CS Study",
    description: "Continuously learning computer science fundamentals",
  },
  {
    image: studyEngImg,
    title: "English",
    description: "Studying English to become a global talent",
  },
  {
    image: listenMusicImg,
    title: "Listening Music",
    description: "Enjoying music, especially hip-hop",
  },
];

const FactSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-primary">
      <AnimatePresence initial={false}>
        {/* Current Slide */}
        <motion.div
          key={currentIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <img
              src={facts[currentIndex].image}
              alt={facts[currentIndex].title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/20 to-transparent" />

            {/* Text Content - Top Left */}
            <div className="absolute top-0 left-0 p-12 md:p-16 max-w-xl">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-heading-xl md:text-display-s font-bold text-white mb-4"
              >
                {facts[currentIndex].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-body md:text-heading-s text-white/90"
              >
                {facts[currentIndex].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators - Fixed */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {facts.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-12 bg-accent" : "w-8 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FactSection;
