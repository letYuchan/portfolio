import IconBlog from "@/shared/components/Icons/IconBlog";
import IconEmail from "@/shared/components/Icons/IconEmail";
import IconGithub from "@/shared/components/Icons/IconGithub";
import { motion } from "motion/react";
import milk from "@/assets/imgs/home/milkOnHero.png";
import myCharImg from "@/assets/imgs/home/letYuchanCharOnHero.png";

const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl px-4 pt-20 flex flex-col items-center justify-between relative gap-[200px]">
      {/* 상단 - 타이틀 멘트 */}
      <motion.div
        className="text-center flex flex-col relative z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-on-primary text-[3rem] font-bold leading-none">
          Hello! I am letYuchan,
        </h1>
        <div className="flex-row items-center flex gap-2 justify-center">
          <h1 className="text-on-primary text-[3rem] font-bold leading-none w-fit">
            I am a
          </h1>
          <h1 className="text-on-primary text-[3rem] font-bold leading-none border-4 border-secondary w-fit border-dashed bg-accent/70 p-1 hover:text-on-secondary hover:bg-secondary transition-all duration-200 ease-out">
            Web, App
          </h1>
          <h1 className="text-on-primary text-[3rem] font-bold leading-none border-4 border-secondary w-fit border-dashed bg-accent p-1 hover:text-on-secondary hover:bg-secondary transition-all duration-200 ease-out">
            Front-end engineer
          </h1>
        </div>
        <h1 className="text-on-primary text-[3rem] font-bold leading-none">
          from south korea
        </h1>
        <h1 className="text-on-primary text-[3rem] font-bold leading-none">
          I build interfaces that turn ideas
        </h1>
        <h1 className="text-on-primary text-[3rem] font-bold leading-none">
          into experiences people can actually feel.
        </h1>
      </motion.div>
      {/* 하단 - CTA / 가치관 */}
      <motion.div
        className="w-full flex flex-row justify-between items-start relative z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {/* CTA */}
        <div className="flex flex-col gap-4 items-center p-4 rounded-2xl border-2 border-dashed border-secondary relative h-fit transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-accent bg-gradient-to-br from-primary via-primary to-accent/5">
          <motion.a
            href=""
            className="flex flex-row gap-2 items-center justify-between w-full rounded-lg hover:bg-accent/10 transition-all duration-200 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-on-primary text-heading-m">
              for showing my projects
            </h3>
            <div className="transition-all duration-200 group-hover:scale-125 group-hover:text-accent group-hover:rotate-12">
              <IconGithub />
            </div>
          </motion.a>
          <motion.a
            href=""
            className="flex flex-row gap-2 items-center justify-between w-full rounded-lg hover:bg-accent/10 transition-all duration-200 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-on-primary text-heading-m">
              for contacting me
            </h3>
            <div className="transition-all duration-200 group-hover:scale-125 group-hover:text-accent group-hover:rotate-12">
              <IconEmail />
            </div>
          </motion.a>
          <motion.a
            href=""
            className="flex flex-row gap-2 items-center justify-between w-full rounded-lg hover:bg-accent/10 transition-all duration-200 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-on-primary text-heading-m">
              for reading my study logs
            </h3>
            <div className="transition-all duration-200 group-hover:scale-125 group-hover:text-accent group-hover:rotate-12">
              <IconBlog />
            </div>
          </motion.a>
          <img
            src={milk}
            alt="milk"
            className="absolute -top-40 left-0 w-[300px] object-contain"
          />
        </div>

        {/* 가치관 */}
        <div className="w-full max-w-[500px]">
          <p className="text-on-primary text-body text-left">
            I design and build with
            <span className="bg-accent font-semibold">
              users at the center of every decision.
            </span>
            Not just implementing features, but
            <span className="bg-accent font-semibold">
              preparing for failure and refining moments that matter
            </span>
            , I aim to create products users can rely on. I believe trust is
            what ultimately defines great products.{" "}
            <span className="bg-accent font-semibold">
              With solid computer science fundamentals, persistence, and
              precision
            </span>
            , I pursue quality without compromise.
          </p>
        </div>
      </motion.div>
      <div></div>
      <img
        src={myCharImg}
        className="w-full max-w-sm h-[400px] object-contain mx-auto z-10 absolute bottom-0 left-0"
      />
    </section>
  );
};

export default HeroSection;
