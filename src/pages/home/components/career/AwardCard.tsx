import { motion } from "motion/react";

interface AwardCardProps {
  name: string;
  organization: string;
  date: string;
  index: number;
}

const AwardCard = ({ name, organization, date, index }: AwardCardProps) => {
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
      whileHover={{ scale: 1.03, y: -5 }}
      className="relative group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-gradient-to-br from-secondary to-secondary/90 border-2 border-accent rounded-xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full" />
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className="text-4xl"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              🏅
            </motion.div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-meta bg-accent/20 text-accent px-3 py-1 rounded-full backdrop-blur-sm">
                {date}
              </span>
              <div className="w-12 h-1 bg-accent rounded-full group-hover:w-16 transition-all duration-300" />
            </div>
          </div>
          <h4 className="text-heading-m text-on-secondary mb-3">{name}</h4>
          <p className="text-body text-on-secondary/80 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {organization}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AwardCard;
