import React from "react";
import Title from "../layouts/Title";

import Doc1 from "../../assets/images/projects/Doc1.jpg";
import Real1 from "../../assets/images/projects/Real 1.jpg";
import ProjectsCard from "./ProjectsCard";
import Ecom1 from "../../assets/images/projects/Ecom 1.jpg";
import Book from "../../assets/images/projects/Book.jpg";
import Music from "../../assets/images/projects/Music.jpg";
import cons from "../../assets/images/projects/cons.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check out my portfolio and share your feedback!"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="DOC APPOINTEMENT WEB APP"
          des="A fully functional doctor appointment booking app allowing users to schedule appointments, manage profiles, and get real-time notifications."
          src={Doc1}
          githubLink="https://github.com/DevMaaz29456/Doctor-complete-appointment-booking-app-react"
        />
        <ProjectsCard
          title="REAL ESTATE WEB APP"
          des="A responsive real estate web application that showcases properties for buying, renting, or selling, complete with filtering and detailed views."
          src={Real1}
          githubLink="https://github.com/DevMaaz29456/real-estate-full-app"
        />
        <ProjectsCard
          title="ECOMMERCE WEBSITE"
          des="A scalable e-commerce platform supporting product listing, cart functionality, and payment integration."
          src={Ecom1}
          githubLink="https://github.com/yourusername/ecommerce-website"
        />
        <ProjectsCard
          title="BOOK SPOT"
          des="An interactive book collection app where users can manage their reading lists and discover popular titles."
          src={Book}
          githubLink="https://github.com/DevMaaz29456/TheBookSpot-Web-App-"
        />
        <ProjectsCard
          title="MUSIC WEB APP"
          des="A music streaming platform allowing users to create playlists, listen to songs, and explore new genres."
          src={Music}
          githubLink="https://github.com/DevMaaz29456/Music-web-app"
        />
        <ProjectsCard
          title="CONS WEBSITE"
          des="A corporate consulting website designed to showcase services, client testimonials, and industry insights."
          src={cons}
          githubLink="https://github.com/DevMaaz29456/Civil-Construction_website"
        />
      </div>
    </section>
  );
};

export default Projects;
