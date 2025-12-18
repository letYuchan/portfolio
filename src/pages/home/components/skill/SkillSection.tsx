import SkillCategoryCard from "@/pages/home/components/skill/SkillCategoryCard";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Skill {
  name: string;
  level?: number;
  icon?: string | ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillSectionProps {
  categories: SkillCategory[];
}

const SkillSection = ({ categories }: SkillSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-5xl mx-auto"
    >
      <div className="space-y-12">
        {/* Header */}
        <div className="flex items-center gap-4">
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
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h3 className="text-heading-l font-bold text-on-primary">Skills</h3>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-on-primary/20 to-transparent" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <SkillCategoryCard
              key={index}
              title={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillSection;
