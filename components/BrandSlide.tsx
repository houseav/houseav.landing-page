"use client";

import verse1 from "@/public/assets/verses-host/verse1.png";
import logoapex from "@/public/assets/logo-apex.png";
import logo_celestial from "@/public/assets/logo-celestial.png";
import logo_echo from "@/public/assets/logo-echo.png";
import logo_pulse from "@/public/assets/logo-pulse.png";
import logo_quantum from "@/public/assets/logo-quantum.png";
import Image from "next/image";
import "./styles/componentsStyle.css";
import { motion } from "framer-motion";

const BrandSlide = () => {
  return (
    <div className="pt-8 bg-white px-4 md:p-12 flex justify-center">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] w-[1200px]">
        <motion.div
          className="flex gap-14 flex-none items-center whitespace-nowrap pr-14"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <Image
            src={verse1}
            height={50}
            width={32}
            alt="verse1"
            className=""
          />
          <Image src={verse1} alt="verse1" className="h-8 w-auto" />
          <p className="text-xl font-bubble">1 Peter 4:9</p>
          <p className="text-xl font-patinio ">Hebrews 13:2</p>
          <p className="text-xl font-rollcage ">Matthew 25:35</p>
          <p className="text-xl font-bubble">Romans 12:13</p>
          <p className="text-xl font-patinio ">Titus 1:8</p>
          <p className="text-xl font-rollcage ">1 Timothy 3:2</p>
          <p className="text-xl font-bubble">Leviticus 19:34</p>
          <p className="text-xl font-patinio ">Luke 14:12-14</p>
          <p className="text-xl font-rollcage ">Acts 28:2</p>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandSlide;
