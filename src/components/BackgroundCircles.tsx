import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.2, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 3.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#465dc3] rounded-full h-[200px] w-[200px]  mt-52 animate-ping" />
      <div className="absolute border border-[#6c6969] rounded-full h-[300px] w-[300px]  mt-52 animate-ping" />
      {/* <div className="absolute border border-[#6c9556] rounded-full h-[500px] w-[500px]  mt-52 animate-ping" /> */}
      <div className="rounded-full border border-[#1e57dc] opacity-10 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="absolute border border-[#374e5d] rounded-full h-[800px] w-[800px]  mt-52 animate-ping" />
    </motion.div>
  );
};

export default BackgroundCircles;
