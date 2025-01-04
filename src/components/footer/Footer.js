import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../../assets/images/newlogo.png";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-19 rounded-full object-cover"
          />
          <h1 className="text-lg font-bold text-white">
            <span className="text-designColor ">Dev</span> Maaz
          </h1>
        </div>
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <a
              href="/about"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Services
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Blog
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <a
              href="/authentication"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/status"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              System Status
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/terms"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Terms of Service
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Pricing
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Over Right
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <a
              href="/documentation"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Documentation
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/authentication"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/api-reference"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              API Reference
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/support"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Support
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="/opensource"
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Open Source
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
