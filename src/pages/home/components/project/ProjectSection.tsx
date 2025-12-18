import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import type { Project } from "@/pages/home/model/home.types";
import ProjectPage from "@/pages/home/components/project/ProjectPage";
import ProjectBinder from "@/pages/home/components/project/ProjectBinder";

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection = ({ projects }: ProjectSectionProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleSelectProject = (index: number) => {
    setDirection(index > selectedIndex ? 1 : -1);
    setSelectedIndex(index);
  };

  const handleNextPage = () => {
    if (selectedIndex < projects.length - 1) {
      setDirection(1);
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (selectedIndex > 0) {
      setDirection(-1);
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex items-center gap-2">
          <svg
            className="w-9 h-9 text-on-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <h3 className="text-heading-l text-on-primary">Projects</h3>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent" />
      </div>

      {/* Binder Layout */}
      <div className="flex h-[900px]">
        {/* Left Binder - Project List */}
        <ProjectBinder
          projects={projects}
          selectedIndex={selectedIndex}
          onSelectProject={handleSelectProject}
        />

        {/* Right Page - Project Details */}
        <AnimatePresence mode="wait" custom={direction}>
          <ProjectPage
            key={selectedIndex}
            project={projects[selectedIndex]}
            direction={direction}
            currentIndex={selectedIndex}
            totalProjects={projects.length}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
