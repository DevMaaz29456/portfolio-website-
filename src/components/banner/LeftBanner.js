import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Computer Science Enthusiast.",
      "Professional Coder.",
      "Mern Stack Developer.",
      "Technical Problem Solver.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">SHOWCASING MY JOURNEY IN CODE</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Maaz</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a passionate developer, I craft engaging digital experiences with
          clean, efficient code. My focus is on delivering innovative solutions
          that bring ideas to life, ensuring every interaction feels seamless
          and impactful.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
