import { motion } from "motion/react";

interface EducationCardProps {
  name: string;
  major: string;
  period: string;
  description?: string;
  index: number;
}

const EducationCard = ({
  name,
  major,
  period,
  description,
  index,
}: EducationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-primary border-2 border-secondary rounded-xl p-5 overflow-hidden transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(198,255,0,0.15)]">
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-accent/10 text-meta font-semibold rounded-full border border-accent/20">
            {period}
          </div>

          <h4 className="text-heading-m text-on-primary mb-2">{name}</h4>
          <p className="text-body text-on-primary/80 mb-3">{major}</p>

          {description && (
            <div className="mt-3 pt-3 border-t border-secondary/50">
              <p className="text-body text-on-primary/60">{description}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
