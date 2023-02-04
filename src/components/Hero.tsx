import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import PFP from "../assets/images/6.jpg";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, useText] = useTypewriter({
    words: [
      "Hi, My name is Legadax",
      "Developer",
      "Designer",
      "Creator",
      "Data-Analyst",
      "Team-Manager",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={PFP}
        alt="name"
      ></Image>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Full-Stack Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ADDA" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="herobutton">About</button>
          </Link>
          <Link href="#experience">
            <button className="herobutton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="herobutton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="herobutton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
