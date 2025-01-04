import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-10 md:flex-row md:gap-20"
    >
      {/* Company Experience Section */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2022 - present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 md:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React.js Developer"
            subTitle="Gojins (Dec 2024)"
            result="Remote"
            des="Built responsive web applications with React.js and Tailwind CSS, collaborating with teams to enhance user experience and deliver impactful solutions."
          />
          <ResumeCard
            title="Freelancer (Web Developer)"
            subTitle="Self-Employed (Ongoing)"
            result="Mardan"
            des="Developed visually appealing and dynamic web solutions tailored to client requirements, using modern tools like React.js and Tailwind CSS."
          />
          <ResumeCard
            title="Intern (Full-Stack Developer)"
            subTitle="TechStartup Inc. (2023)"
            result="Remote"
            des="Gained hands-on experience in MERN stack development, focusing on backend integration, REST APIs, and database optimization for scalable solutions."
          />
        </div>
      </div>

      {/* Freelance Experience Section */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Freelance Experience
          </h2>
        </div>
        <div className="mt-6 md:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Web Developer"
            subTitle="Upwork and Fiverr"
            result="Success"
            des="Delivered high-quality projects for international clients, earning 5-star ratings by focusing on user-centered designs and modern interfaces."
          />
          <ResumeCard
            title="React.js Tutor"
            subTitle="Online Platforms"
            result="Global"
            des="Taught React.js concepts like hooks, state management, and component architecture to students, helping them create real-world applications."
          />
          <ResumeCard
            title="Open Source Contributor"
            subTitle="GitHub Projects"
            result="Global"
            des="Improved functionality and fixed bugs in React.js repositories, collaborating with developers worldwide on open-source initiatives."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
