"use client";
import { motion } from "motion/react";

export const MotionImages = () => {
  return (
    <>
      <motion.img
        src="/branch.png"
        alt="Decor 1"
        className="
    absolute 
    top-[5%] left-[8%] 
    sm:top-[10%] sm:left-[12%] 
    md:top-[15%] md:left-[18%] 
    w-20 h-20 sm:w-26 sm:h-26 md:w-36 md:h-36 
    invert z-[2]
  "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <motion.img
        src="/pull-request.png"
        alt="Decor 2"
        className="
    absolute 
    bottom-[10%] right-[8%] 
    sm:bottom-[12%] sm:right-[10%] 
    md:bottom-[16%] md:right-[15%] 
    w-20 h-20 sm:w-26 sm:h-26 md:w-36 md:h-36 
    invert z-[4]
  "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
    </>
  );
};
