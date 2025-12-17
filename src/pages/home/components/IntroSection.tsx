import DecoOnIntroSection from "@/pages/home/components/DecoOnIntroSection";
import { motion } from "motion/react";
import myCharImg from "@/assets/imgs/home/letYuchanCharOnIntro.png";
import nero from "@/assets/imgs/home/neroOnIntro.png";
import milk from "@/assets/imgs/home/milkOnIntro.png";

const IntroSection = () => {
  return (
    <section className="w-full max-w-5xl px-4 pt-20 flex flex-col items-center justify-between relative gap-[300px]">
      <DecoOnIntroSection />
      {/* 상단 - 타이틀 */}
      <div className="flex flex-col items-center w-full z-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[90px] font-bold tracking-tight text-on-primary self-start mb-3"
          viewport={{ once: false }}
        >
          My Portfolio
        </motion.h1>
        <div className="w-full flex flex-wrap justify-around gap-28 relative">
          <img
            src={milk}
            alt="Milk"
            className="w-[300px] object-contain absolute right-12 -z-10 bottom-12"
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-bold tracking-tight text-on-primary text-[70px]"
            viewport={{ once: false }}
          >
            Front-end
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-bold tracking-tight text-on-primary text-[70px]"
            viewport={{ once: false }}
          >
            Engineer
          </motion.h1>
        </div>
      </div>
      {/* 하단 - 짧은 멘트 */}
      <div className="flex flex-row justify-between items-center w-full">
        {/* 좌측 - 웰컴멘트 */}
        <div className="flex flex-col">
          <p className="inline-block text-heading-m  bg-secondary text-on-secondary w-fit px-0.5 hover:text-accent transition-all duration-200 ease-out">
            LET'S BUILD
          </p>
          <p className="inline-block text-heading-m ml-10 bg-secondary text-on-secondary w-fit px-0.5 hover:text-accent transition-all duration-200 ease-out ">
            WHAT'S NEXT
          </p>
        </div>
        {/* 우측 - 네로 */}
        <img src={nero} className="w-[300px] object-contain" alt="Nero" />
      </div>
      {/* 캐릭터 */}
      <img
        src={myCharImg}
        alt="Character"
        className="w-full max-w-md h-auto object-contain mx-auto z-20 absolute top-48"
      />
    </section>
  );
};
export default IntroSection;
