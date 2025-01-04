import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-10 md:flex-row md:gap-20"
    >
      {/* Job Experience Section */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2021 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 md:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Junior Software Developer"
            subTitle="Bircube - (2023 )"
            result="Mardan KPK"
            des="Bircube Software House provides quality software and web solutions focused on client satisfaction."
          />
          <ResumeCard
            title="Web Developer & Partner"
            subTitle="Gojins - (Dec 2023 - 2024)"
            result="STP Mardan"
            des="Gojins specializes in software development and digital solutions for modern businesses."
          />
          <ResumeCard
            title="Remote Front-end Developer"
            subTitle="Devsinc - (2024 - Present)"
            result="Lahore"
            des="Devsinc offers innovative software and web solutions to meet global business needs."
          />
        </div>
      </div>

      {/* Trainer Experience Section */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2022 - present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 md:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer and Partner"
            subTitle="Gojins (16 Dec 2023 - Sep 2024)"
            result="Full Time"
            des="Developed responsive web apps using React.js, ensuring optimal user experience."
          />
          <ResumeCard
            title="Freelancer (Web Developer)"
            subTitle="Self-Employed (Ongoing)"
            result="Mardan"
            des="Created scalable frontend solutions using React.js and Tailwind CSS."
          />
          <ResumeCard
            title="BS Computer Science Student"
            subTitle="UET Mardan (2019 - Present)"
            result="Mardan"
            des="Focused on web development, AI, and software engineering, with hands-on projects."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
