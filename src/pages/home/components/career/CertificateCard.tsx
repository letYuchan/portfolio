import { motion } from "motion/react";

interface CertificateCardProps {
  name: string;
  issuer: string;
  date: string;
  index: number;
}

const CertificateCard = ({
  name,
  issuer,
  date,
  index,
}: CertificateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="relative group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-primary border-2 border-secondary rounded-xl p-6 overflow-hidden transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(198,255,0,0.3)]">
        <div className="relative z-10">
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
            🏆
          </div>
          <h4 className="text-heading-m text-on-primary mb-2">{name}</h4>
          <p className="text-body text-on-primary/70 mb-4">{issuer}</p>
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-secondary" />
            <span className="text-meta text-on-primary/50 font-semibold">
              {date}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
