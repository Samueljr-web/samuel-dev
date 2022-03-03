import React, { useEffect } from "react";
import "../styles/projects.css";
import "../styles/button.css";
import { Footer } from "../components/index";
import { projectsData } from "../data/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useEffect(() => {
    gsap.from(".project_card", {
      y: -30,
      duration: 0.3,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: ".project_card",
        start: "top 90%",
      },
    });
  });
  return (
    <div className="projects">
      <h2 id="heading-title">Projects</h2>
      <p id="project-title">Here are few projects i have worked on</p>
      <div className="project_card_div">
        {projectsData.map((p) => {
          return (
            <div key={p.id} className="project_card">
              <img src={p.image} alt="" className="image" />
              <h2>{p.name}</h2>
              <p>{p.description}</p>
              <div className="btn-div">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Preview
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
