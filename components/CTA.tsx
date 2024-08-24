"use client";

import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import Bubbles1 from "@/public/assets/bubbles1.png";
import Bubbles2 from "@/public/assets/bubbles2.png";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ConfettiButton } from "./animation/Confetti";

const CTA = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress, scrollXProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const translateX = useTransform(scrollXProgress, [0, 1], [50, 200]);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center pt-16 pb-24 px-14 bg-gradient-to-t from-[#484848] to-white  overflow-x-clip"
    >
      <div className="max-w-[570px] flex flex-col items-center relative">
        <motion.img
          src={Bubbles1.src}
          alt="Bubbles1"
          className="absolute -left-[345px] -top-28 pr-6 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
        <motion.img
          src={Bubbles2.src}
          alt="Bubbles2"
          className="absolute -right-80 -top-6 hidden md:block"
          style={{
            translateY: translateY,
            translateX: translateX,
          }}
        />
        <div className="text-4xl md:text-5xl lg:text-6xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#b5b5b5] text-transparent bg-clip-text">
          Sign up today
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
          Start your journey with us today and start to connect with others
        </div>

        <div className="relative">
          <ConfettiButton>Sign up</ConfettiButton>
        </div>
      </div>
    </div>
  );
};

export default CTA;
