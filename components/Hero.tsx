"use client";

import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import HeroImage from "@/public/assets/Visual.png";
import Bubbles from "@/public/assets/bubbles.png";
import Bubbles2 from "@/public/assets/bubbles2.png";
import HalfTorus from "@/public/assets/half-torus.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ConfettiButton } from "./animation/Confetti";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress, scrollXProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateYBubble2 = useTransform(scrollYProgress, [0, 1], [10, -350]);
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const translateX = useTransform(scrollXProgress, [0, 1], [200, -200]);

  return (
    <section
      ref={heroRef}
      className="p-8 pb-16 md:p-10 lg:p-20 font-medium bg-gradient-to-tr from-[#fdfeff] via-[#bcbcbc]  overflow-x-clip md:items-center gap-3"
    >
      <div className="md:flex items-center justify-center gap-16">
        <div className="md:w-[478px]">
          {/* <div className="border-2 w-fit p-0.5 px-1 lg:text-lg rounded-lg border-slate-400/80">
            Version 2.0 is here
          </div> */}
          <div className="text-5xl md:text-7xl font-black my-7 bg-gradient-to-b from-black to-[#535353] text-transparent bg-clip-text tracking-tighter">
            <div className="flex ">
              <p>house</p>
              <p className="text-slate-200 animate-pulse">av.</p>
            </div>
            host your brother
          </div>
          <div className="text-xl lg:text-2xl tracking-tighter opacity-85 text-gray-700">
            Collect memories, stories while helping brothers.. but above all
            spread the gospel together, you are the difference.
            <br />
            <p className="text-slate-800 text-bold text-sm mt-3">
              (romans 12: 9-13)
            </p>
          </div>

          <div className="flex items-center gap-3 mt-6 text-lg">
            <ConfettiButton styleType="gray">Sign up</ConfettiButton>
          </div>
        </div>

        <div className="pt-12 md:pt-0 md:h-[648px] md:w-[648px] relative">
          <motion.img
            src={Bubbles.src}
            alt="bubbles"
            className=" hidden md:block md:absolute -left-8 -top-8"
            style={{
              translateY: translateY,
              translateX: translateX,
            }}
          />
          <motion.img
            src={HeroImage.src}
            alt="Hero Image"
            className="md:absolute md:h-full md:w-auto md:max-w-none"
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={Bubbles2.src}
            alt="Bubbles2"
            className=" hidden lg:block md:absolute left-[400px] top-[500px]"
            style={{
              translateY: translateYBubble2,
              translateX: translateX,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
