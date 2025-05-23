"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
export const HeroSection = () => {
  const router = useRouter();
  return (
    <div>
      {/* <div className="absolute w-full h-screen inset-0 opacity-35 hero-bg Z-0 " />
      <div className="absolute inset-0 h-screen w-full hero-gradient opacity-75 Z-10 " /> */}

      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="max-w-7xl h-screen flex flex-col justify-evenly ">
          <motion.div
            initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1 }}
            className="  flex justify-center mt-4 "
          >
            <div className=" flex justify-evenly  py-4 w-[55%] rounded-2xl">
              <p>Home</p>
              <p>About</p>
              <p>Info</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ ease: "easeIn", duration: 0.25 }}
            className="container h-full flex flex-col items-center justify-center"
          >
            <h1 className="text-neutral-400 text-center ">#neveralone</h1>
            <h1 className="text-5xl text-center">
              Build together with CrackedDevs
            </h1>
            <p className="mt-8 text-lg text-neutral-300">
              Get team experience on your personal projects
            </p>
            <Button
              onClick={() => {
                router.push("/profile");
              }}
              variant={"outline"}
              className="mt-4 text-orange-400 text-lg animate-bounce repeat-2"
            >
              Let's Build
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
