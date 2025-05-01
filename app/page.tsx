"use client";

import { HeroSection } from "@/components/herosection";
import { auth } from "@/utils/auth";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="">
      <div className="absolute w-full h-screen inset-0 opacity-35 hero-bg Z-0 " />
      <motion.div
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ ease: "easeIn" }}
        className="absolute inset-0 h-screen w-full hero-gradient opacity-75 Z-10 "
      />
      <div>
        {/* Navbar */}
        <HeroSection />
      </div>
    </div>
  );
}
