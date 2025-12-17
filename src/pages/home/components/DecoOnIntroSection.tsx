import { motion } from "motion/react";

const DecoOnIntroSection = () => {
  // 캐릭터 중심 (top-24 = 96px + 캐릭터 높이/2 기준으로 top: 50%로 설정)
  const centerX = "50%";
  const centerY = "30%"; // 캐릭터가 top-24에 위치하므로

  // 8개의 막대기를 둥그렇게 배치 (360도를 8등분)
  const lines = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 360) / 8; // 0, 45, 90, 135, 180, 225, 270, 315도
    return { angle, delay: i * 0.1 };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Stars */}
      <motion.div
        initial={{ x: centerX, y: centerY, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="absolute top-24 left-1/4 text-6xl text-accent animate-pulse"
        style={{ textShadow: "0 0 20px #C6FF00" }}
      >
        ★
      </motion.div>
      <motion.div
        initial={{ x: `-${centerX}`, y: centerY, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="absolute top-1/3 right-1/4 text-5xl text-accent"
        style={{ textShadow: "0 0 15px #C6FF00" }}
      >
        ★
      </motion.div>
      <motion.div
        initial={{ x: centerX, y: centerY, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/5 text-4xl text-accent animate-pulse"
        style={{ textShadow: "0 0 10px #C6FF00" }}
      >
        ★
      </motion.div>
      <motion.div
        initial={{ x: `-${centerX}`, y: `-${centerY}`, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        className="absolute bottom-1/3 right-1/5 text-7xl text-accent"
        style={{ textShadow: "0 0 25px #C6FF00" }}
      >
        ★
      </motion.div>
      <motion.div
        initial={{ x: `-${centerX}`, y: centerY, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="absolute top-2/3 right-2/3 text-3xl text-accent animate-pulse"
        style={{ textShadow: "0 0 12px #C6FF00" }}
      >
        ★
      </motion.div>
      <motion.div
        initial={{ x: centerX, y: `-${centerY}`, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        className="absolute bottom-1/4 left-1/4 text-5xl text-accent"
        style={{ textShadow: "0 0 18px #C6FF00" }}
      >
        ★
      </motion.div>

      {/* Small stars */}
      <motion.div
        initial={{ x: `-${centerX}`, y: centerY, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="absolute top-16 right-1/3 text-2xl text-accent"
      >
        ✦
      </motion.div>
      <motion.div
        initial={{ x: `-${centerX}`, y: `-${centerY}`, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-40 right-[55%] text-xl text-accent"
      >
        ✦
      </motion.div>
      <motion.div
        initial={{ x: `-${centerX}`, y: centerY, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
        className="absolute top-1/2 right-1/4 text-2xl text-accent"
      >
        ✦
      </motion.div>

      {/* Dots */}
      <motion.div
        initial={{ x: `-${centerX}`, y: centerY, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        className="absolute top-20 right-1/4 w-4 h-4 bg-accent rounded-full shadow-neon"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
        className="absolute top-1/2 right-1/2 w-5 h-5 bg-accent rounded-full"
      />
      <motion.div
        initial={{ x: centerX, y: centerY, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        className="absolute top-2/3 left-1/5 w-3 h-3 bg-accent rounded-full shadow-neon"
      />
      <motion.div
        initial={{ x: `-${centerX}`, y: `-${centerY}`, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
        className="absolute bottom-1/3 right-0 w-4 h-4 bg-accent rounded-full animate-pulse"
      />

      {/* Geometric shapes */}
      <motion.div
        initial={{ x: `-${centerX}`, y: centerY, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        className="absolute top-1/3 right-20 w-32 h-32 border-4 border-accent rotate-12"
      />
      <motion.div
        initial={{ x: centerX, y: `-${centerY}`, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
        className="absolute bottom-[40%] left-16 w-40 h-40 border-4 border-accent rounded-full"
      />
      <motion.div
        initial={{ x: centerX, y: centerY, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
        className="absolute top-40 left-2/3 w-6 h-6 bg-accent rotate-12"
      />
      <motion.div
        initial={{ x: `-${centerX}`, y: `-${centerY}`, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.95, ease: "easeOut" }}
        className="absolute bottom-40 right-1/4 w-8 h-8 bg-accent rotate-45"
      />

      {/* 우측 하단 별 */}
      <motion.div
        initial={{ x: `-${centerX}`, y: `-${centerY}`, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        className="absolute bottom-[20%] right-[5%] text-5xl text-accent animate-pulse"
        style={{ textShadow: "0 0 20px #C6FF00" }}
      >
        ★
      </motion.div>
      <motion.div
        initial={{ x: `-${centerX}`, y: `-${centerY}`, opacity: 0, scale: 0 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-[35%] right-[25%] text-4xl text-accent"
        style={{ textShadow: "0 0 15px #C6FF00" }}
      >
        ★
      </motion.div>

      {/* Lines - 캐릭터 중심으로 8방향 원형 배치 */}
      {lines.map(({ angle, delay }, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 + delay, ease: "easeOut" }}
          className="absolute bg-accent origin-left z-10"
          style={{
            top: "30%",
            left: "50%",
            width: "500px",
            height: "3px",
            rotate: `${angle}deg`,
          }}
        />
      ))}
    </div>
  );
};
export default DecoOnIntroSection;
