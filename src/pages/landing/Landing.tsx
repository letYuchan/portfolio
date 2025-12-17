import Cubes from "@/pages/landing/components/Cubes";
import DecryptedText from "@/pages/landing/components/DescryptedText";
import usbCursor from "@/assets/imgs/landing/usb.png";
import UsbPort from "@/pages/landing/components/UsbPort";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgressWithLabel from "@/pages/landing/components/CircularProgressWithLabel";
import { motion } from "motion/react";

const Landing = () => {
  const [isClickedPort, setIsClickedPort] = useState<boolean>(false);
  const [isCompleteDownload, setIsCompleteDownload] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isClickedPort) return;

    const completeTimer = setTimeout(() => {
      setIsCompleteDownload(true);
    }, 5000);

    const navigationTimer = setTimeout(() => {
      navigate("/home");
    }, 6000);

    return () => {
      clearTimeout(completeTimer);
      clearTimeout(navigationTimer);
    };
  }, [isClickedPort, navigate]);

  if (isClickedPort) {
    const textBeforeComplete = "Downloading";
    const letters = textBeforeComplete.split("");

    return (
      <div className="w-full h-full flex items-center justify-center p-4 bg-primary">
        <div className="relative w-full max-w-2xl aspect-[4/3] bg-gradient-to-b from-gray-900 to-black rounded-3xl p-8 shadow-2xl border-8 border-black">
          <div className="relative w-full h-full bg-secondary rounded-2xl border-4 border-black overflow-hidden">
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 p-8">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-on-secondary/5 to-transparent bg-[length:100%_4px] animate-pulse opacity-30" />

              <div className="absolute inset-0 pointer-events-none bg-accent/5 blur-2xl" />

              <div className="relative z-10 flex flex-col items-center gap-8">
                {isCompleteDownload ? (
                  <div className="text-accent text-body bg-secondary px-4 py-2">
                    Complete!
                  </div>
                ) : (
                  <div className="flex text-on-secondary text-body">
                    {letters.map((letter, index) => (
                      <motion.span
                        key={index}
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 0.1,
                          ease: "easeInOut",
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                )}
                <CircularProgressWithLabel />
              </div>

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-on-primary/5 via-transparent to-transparent" />
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-on-secondary/20 rounded-full blur-xl" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-primary flex items-center justify-center p-4"
      style={{ cursor: `url(${usbCursor}), auto` }}
    >
      <main className="z-20 flex flex-col justify-center items-center gap-12 ">
        <DecryptedText
          text="Welcome to my world"
          speed={100}
          maxIterations={15}
          parentClassName="z-20 bg-secondary px-4 py-2"
          className="text-accent text-heading-xl font-landing"
          encryptedClassName="text-accent text-heading-xl font-landing opacity-60"
          animateOn="view"
        />

        <UsbPort setIsClickedPort={setIsClickedPort} />
      </main>
      <Cubes
        gridSize={10}
        maxAngle={60}
        radius={4}
        borderStyle="2px dashed #0B0B0F"
        faceColor="#ffffff"
        rippleColor="#C6FF00"
        rippleSpeed={1.5}
        autoAnimate={true}
        rippleOnClick={true}
      />
    </div>
  );
};

export default Landing;
