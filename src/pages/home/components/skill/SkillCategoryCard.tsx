import SkillItem from "@/pages/home/components/skill/SkillItem";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Skill {
  name: string;
  level?: number;
  icon?: string | ReactNode;
}

interface SkillCategoryCardProps {
  title: string;
  skills: Skill[];
  index: number;
}

const SkillCategoryCard = ({
  title,
  skills,
  index,
}: SkillCategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      className="relative group"
    >
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-2xl" />

      <div className="relative bg-gradient-to-br from-secondary/95 via-secondary to-secondary/80 border border-accent/30 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-lg">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        <div className="relative z-10 p-8">
          {/* Clean Title */}
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-heading-l font-bold text-accent tracking-tight">
              {title}
            </h4>
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <span className="text-body text-accent font-bold">
                ★
              </span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-4">
            {skills.map((skill, idx) => (
              <SkillItem key={idx} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCategoryCard;
