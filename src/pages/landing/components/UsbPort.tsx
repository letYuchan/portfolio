import { motion } from "motion/react";
import { useState } from "react";

interface UsbPortProps {
  setIsClickedPort: React.Dispatch<React.SetStateAction<boolean>>;
}
const UsbPort = ({ setIsClickedPort }: UsbPortProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative z-20 group flex flex-col gap-4 items-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setIsClickedPort(true)}
    >
      <div
        className={`relative w-64 h-40 bg-secondary border-4 rounded-2xl transition-all duration-300 ${
          isHovering
            ? "border-accent shadow-neon-strong scale-105"
            : "border-on-secondary/30 shadow-neon"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-20 bg-on-secondary/5 rounded-lg border-2 border-on-secondary/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              className={`transition-colors duration-300 ${
                isHovering ? "fill-accent" : "fill-on-secondary/30"
              }`}
            >
              <path d="M12 2L12 16M12 2L9 5M12 2L15 5M7 10L7 13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13L9 10M9 10L7 10M17 8L17 14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14L15 8M15 8L17 8M10 19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19Z" />
            </svg>
          </div>
        </div>
        <div className="absolute top-4 left-4 right-4 h-1 bg-on-secondary/10 rounded" />
        <div className="absolute bottom-4 left-4 right-4 h-1 bg-on-secondary/10 rounded" />
        {isHovering && (
          <div className="absolute inset-0 rounded-2xl bg-accent/10 animate-pulse" />
        )}
      </div>
      {isHovering && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-on-primary text-body font-semibold absolute -bottom-12"
        >
          Click to Connect
        </motion.p>
      )}
    </div>
  );
};

export default UsbPort;
