import React from "react";
import { FaLinkedinIn, FaReact, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiGmail } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://github.com/DevMaaz29456" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="mailto:maazkhan29456@gmail.com" className="bannerIcon">
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-maaz-17a431288/"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <IoLogoNodejs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <FaDatabase />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
