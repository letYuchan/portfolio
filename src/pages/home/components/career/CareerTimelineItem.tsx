import { motion } from "motion/react";

interface CareerTimelineItemProps {
  company: string;
  position: string;
  period: string;
  description?: string;
  index: number;
}

const CareerTimelineItem = ({
  company,
  position,
  period,
  description,
  index,
}: CareerTimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      className="relative pb-12 last:pb-0 group ml-4"
    >
      {/* Timeline dot with pulse */}
      <div className="absolute -left-[44px] top-0">
        <div className="w-5 h-5 rounded-full bg-accent border-4 border-primary shadow-lg group-hover:scale-125 transition-transform duration-300" />
        <div className="absolute inset-0 w-5 h-5 rounded-full bg-accent/30 animate-ping" />
      </div>

      {/* Period badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-gradient-to-r from-accent/20 to-accent/10 text-on-primary text-meta font-semibold rounded-full border border-accent/30">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        {period}
      </div>

      {/* Content */}
      <div className="relative bg-gradient-to-br from-primary to-primary/95 border-2 border-secondary rounded-xl p-5 overflow-hidden group-hover:border-accent transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(198,255,0,0.15)]">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-heading-m text-on-primary">{company}</h4>
            <div className="w-2 h-2 rounded-full bg-accent group-hover:w-3 group-hover:h-3 transition-all duration-300" />
          </div>
          <p className="text-body text-on-primary/80 mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-accent rounded-full" />
            {position}
          </p>
          {description && (
            <div className="mt-4 pt-4 border-t border-secondary/50">
              <p className="text-body text-on-primary/60 leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CareerTimelineItem;
