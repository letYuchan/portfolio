import { motion } from "motion/react";
import type { Project } from "@/pages/home/model/home.types";

interface ProjectBinderProps {
  projects: Project[];
  selectedIndex: number;
  onSelectProject: (index: number) => void;
}

const ProjectBinder = ({
  projects,
  selectedIndex,
  onSelectProject,
}: ProjectBinderProps) => {
  return (
    <div className="w-[320px] flex-shrink-0">
      {/* Binder Book */}
      <div className="relative h-full bg-accent rounded-l-lg shadow-2xl overflow-hidden">
        {/* Book Spine with Perfect Circle Rings */}
        <div className="absolute left-0 top-0 bottom-0 w-14 bg-accent border-r border-accent shadow-[4px_0_15px_rgba(0,0,0,0.5)]">
          {/* Binder Rings - Perfect Circles */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex flex-col justify-around py-12">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center"
              >
                <div className="w-6 h-6 rounded-full bg-secondary shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_0_8px_rgba(0,0,0,0.3)]" />
                <div className="absolute w-4 h-4 rounded-full bg-secondary/60" />
              </div>
            ))}
          </div>
        </div>

        {/* Project List */}
        <div className="ml-14 h-full flex flex-col bg-primary">
          {/* Book Title Area */}
          <div className="px-5 py-6 border-b border-secondary/10">
            <h4 className="text-body font-bold text-on-primary tracking-wide">
              PROJECT INDEX
            </h4>
            <p className="text-caption text-on-primary/50 mt-1">
              {projects.length} Projects
            </p>
          </div>

          <div className="flex-1 px-3 py-4 space-y-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => onSelectProject(index)}
                whileHover={{ scale: 1.01, x: 2 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full text-left px-4 py-3.5 rounded-md transition-all duration-300 group ${
                  selectedIndex === index
                    ? "bg-secondary shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-l-4 border-accent"
                    : "bg-secondary/30 hover:bg-secondary/50 border-l-4 border-transparent hover:border-accent/50"
                }`}
              >
                {/* Project Number & Name */}
                <div className="flex items-baseline gap-3 mb-1">
                  <span
                    className={`text-xs font-bold font-mono transition-all ${
                      selectedIndex === index
                        ? "text-accent"
                        : "text-on-primary/60 group-hover:text-on-primary/80"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4
                    className={`text-body font-semibold transition-all flex-1 ${
                      selectedIndex === index
                        ? "text-accent"
                        : "text-on-primary/80 group-hover:text-on-primary"
                    }`}
                  >
                    {project.name}
                  </h4>
                </div>

                {/* Period */}
                <p
                  className={`text-caption transition-all ml-8 ${
                    selectedIndex === index
                      ? "text-accent/70"
                      : "text-on-primary/50 group-hover:text-on-primary/60"
                  }`}
                >
                  {project.period}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBinder;
