import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import PFP from "../assets/images/7.png";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
      >
        <Image
          src={PFP}
          alt="about"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        ></Image>
      </motion.div>

      <div className="space-y-10 px-3 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#44c0dc]">little</span>{" "}
          background
        </h4>
        <p className="text-base ">
          Hello. My name is Legadax and I am a{" "}
          <span className="text-gray-300 uppercase cursor-pointer decoration-violet-500 border border-emerald-100 px-2 py-1 rounded-lg bg-purple-800">
            Full-Stack
          </span>{" "}
          Engineer. I am from Anambra state, Nigeria. I am 18 years old. I
          graduated from college by 2018 and Now, currently studying in
          University. I am studying{" "}
          <span className="text-gray-300 uppercase cursor-pointer decoration-violet-500 border border-emerald-100 px-2 py-1 rounded-lg bg-purple-800">
            Software Engineering
          </span>{" "}
          in school and hope to add it to my skillset in the future
        </p>
      </div>
    </motion.div>
  );
};

export default About;
