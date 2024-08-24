"use client";

import ProductImage from "@/public/assets/Product Image.png";
import Bubble from "@/public/assets/bubbles.png";
import Keys from "@/public/assets/keys.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoBell, GoGoal } from "react-icons/go";
import { LuLeaf } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress, scrollXProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [90, -200]);
  const translateXKeys = useTransform(scrollXProgress, [0, 1], [90, -150]);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-t from-[#7d8289] to-white flex flex-col items-center overflow-x-hidden pb-24"
    >
      <div className="flex flex-col items-center font-medium mt-24 px-8 mx-auto md:w-[550px] lg:w-[630px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          brotherhood
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#a6a6a6] text-transparent bg-clip-text">
          A more effective way to host brothers
        </div>

        <div className="text-center text-slate-600 text-lg mb-8 md:text-xl">
          If you need a place for a conference, a meeting, or a place to stay
          where you can also edify yourself, check out our platform.
        </div>
      </div>
      <div className="relative ">
        <motion.img
          src={Bubble.src}
          alt="Bubble Image"
          className="absolute -right-24 -top-20 w-92 h-72 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
        <Image src={ProductImage} alt="Product Image" className="px-1" />
        <motion.img
          src={Keys.src}
          alt="Keys Image"
          className="absolute w-92 h-80 top-64 -left-28 hidden md:block"
          style={{
            translateY: translateY,
            translateX: translateXKeys,
          }}
        />
      </div>

      {/* <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 max-w-[1400px] lg:px-28">
        <div className="mt-16">
          <LuLeaf className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Integration ecosystem</div>
          <div className="text-lg my-2">
            Track your progress and motivate your efforts everyday.
          </div>
        </div>

        <div className="mt-16">
          <GoGoal className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Goal setting and tracking</div>
          <div className="text-lg my-2">
            Set and track goals with manageable task breakdowns.
          </div>
          <div className="text-lg font-medium">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </div>
        </div>

        <div className="mt-16">
          <MdLockOutline className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Secure data encryption</div>
          <div className="text-lg my-2">
            Ensure data safety with top-tier encryption.
          </div>
          <div className="text-lg font-medium">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </div>
        </div>

        <div className="mt-16">
          <GoBell className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Customizable notifications</div>
          <div className="text-lg my-2">
            Get alerts on tasks and deadlines that matter most.
          </div>
          <div className="text-lg font-medium">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductShowcase;
