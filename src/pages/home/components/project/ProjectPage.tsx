import { motion } from "motion/react";
import type { Project } from "@/pages/home/model/home.types";
import ImageGallery from "@/pages/home/components/project/ImageGallery";

interface ProjectPageProps {
  project: Project;
  direction: number;
  currentIndex: number;
  totalProjects: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const pageVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 30 : -30,
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -30 : 30,
    opacity: 0,
    x: direction > 0 ? -100 : 100,
  }),
};

const ProjectPage = ({
  project,
  direction,
  currentIndex,
  totalProjects,
  onNextPage,
  onPrevPage,
}: ProjectPageProps) => {
  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        rotateY: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        x: { type: "spring", stiffness: 300, damping: 30 },
      }}
      className="flex-1 relative"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      {/* Paper Page */}
      <div className="relative h-full bg-primary rounded-r-lg overflow-hidden shadow-[4px_8px_32px_rgba(0,0,0,0.15)]">
        {/* Subtle Paper Texture */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_3px)]" />

        {/* Book Spine Line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-on-primary/5 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-10 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Project Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-on-primary/5 rounded-md mb-6">
              <div className="w-1.5 h-1.5 bg-on-primary/60 rounded-full" />
              <span className="text-caption text-on-primary/60 font-medium tracking-wider uppercase">
                {project.role}
              </span>
            </div>

            <h2 className="text-[2.5rem] leading-tight font-bold text-on-primary mb-3">
              {project.name}
            </h2>

            <p className="text-body text-on-primary/50 font-mono">
              {project.period}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-on-primary/10 via-on-primary/5 to-transparent mb-8" />

          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-heading-m font-bold text-on-primary mb-4 tracking-tight">
              Summary
            </h3>
            <p className="text-body text-on-primary/70 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-heading-m font-bold text-on-primary mb-5 tracking-tight">
              Highlights
            </h3>
            <ul className="space-y-4">
              {project.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-start gap-4 text-body text-on-primary/75 group"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-sm bg-on-primary/30 flex-shrink-0 group-hover:bg-on-primary/60 transition-colors" />
                  <span className="leading-relaxed">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image Gallery Section */}
          {project.images && project.images.length > 0 && (
            <ImageGallery images={project.images} />
          )}

          {/* Page Number & Navigation */}
          <div className="mt-auto pt-8 border-t border-on-primary/10 flex items-center justify-between">
            <div className="text-caption text-on-primary/50 font-mono tracking-wider">
              <span className="text-on-primary/70 font-semibold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="mx-2 text-on-primary/30">/</span>
              <span className="text-on-primary/50">
                {String(totalProjects).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={onPrevPage}
                disabled={currentIndex === 0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-all ${
                  currentIndex === 0
                    ? "bg-on-primary/5 text-on-primary/20 cursor-not-allowed"
                    : "bg-on-primary/10 text-on-primary/70 hover:bg-on-primary/20 hover:text-on-primary"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>

              <motion.button
                onClick={onNextPage}
                disabled={currentIndex === totalProjects - 1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-all ${
                  currentIndex === totalProjects - 1
                    ? "bg-on-primary/5 text-on-primary/20 cursor-not-allowed"
                    : "bg-on-primary/10 text-on-primary/70 hover:bg-on-primary/20 hover:text-on-primary"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
