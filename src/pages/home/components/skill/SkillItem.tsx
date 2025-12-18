import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Skill {
  name: string;
  level?: number;
  icon?: string | ReactNode;
}

interface SkillItemProps {
  skill: Skill;
  index: number;
}

const SkillItem = ({ skill, index }: SkillItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        type: "spring",
        stiffness: 300,
      }}
      className="relative group/item"
    >
      {/* RPG Stat Card */}
      <div className="relative h-44 bg-gradient-to-br from-primary via-primary to-secondary/5 border-2 border-secondary/40 rounded-lg overflow-visible transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(198,255,0,0.25)]">
        {/* File Folded Corner */}
        <div className="absolute -top-0.5 -right-0.5 w-12 h-12">
          <div
            className="absolute top-0 right-0 w-full h-full bg-accent border-2 border-secondary/40 rounded-tl-lg rounded-br-lg"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
          ></div>
          <div
            className="absolute top-0 right-0 w-6 h-6 bg-secondary/10 rounded-tl-lg"
            style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
          ></div>
        </div>

        <div className="p-5 h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {skill.icon &&
                (typeof skill.icon === "string" ? (
                  <span className="text-3xl">{skill.icon}</span>
                ) : (
                  <div className="flex items-center justify-center">
                    {skill.icon}
                  </div>
                ))}
              <span className="text-body text-on-primary font-bold leading-tight">
                {skill.name}
              </span>
            </div>
            {/* LV Badge */}
            {skill.level && (
              <div className="px-3 py-1.5 bg-secondary border-2 border-secondary rounded">
                <span className="text-body text-accent font-bold font-mono">
                  LV{Math.floor(skill.level / 10)}
                </span>
              </div>
            )}
          </div>

          {/* EXP Bar (Level indicator) */}
          {skill.level && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-body text-on-primary/70 font-bold font-mono">
                  EXP
                </span>
                <span className="text-body text-accent font-bold font-mono">
                  {skill.level}%
                </span>
              </div>
              <div className="relative h-4 bg-secondary/20 rounded-full overflow-hidden border-2 border-secondary/30">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: index * 0.05 + 0.3 }}
                  className="h-full bg-gradient-to-r from-accent via-accent to-accent/80 rounded-full relative"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillItem;
