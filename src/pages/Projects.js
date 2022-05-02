import React, { useEffect } from "react";
import { FaEye, FaCode } from "react-icons/fa";
import { Footer } from "../components/index";
import { projectsData } from "../data/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/projects.css";
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
      <div className="project_card">
        {projectsData.map((p) => {
          return (
            <div key={p.id} className="project-card-main">
              <div className="project_card_content">
                <h2>{p.name}</h2>
                <p>{p.description}</p>
                <h4>{p.stack}</h4>
                <div className="btn-div">
                  <span>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="live"
                    >
                      <FaEye /> <small>Live</small>
                    </a>
                  </span>

                  <span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="code"
                    >
                      <FaCode /> <small>code</small>
                    </a>
                  </span>
                </div>
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
