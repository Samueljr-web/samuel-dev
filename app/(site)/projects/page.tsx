"use client";

import React, { useEffect } from "react";
import { FaEye, FaCode } from "react-icons/fa";
import { projectsData } from "../../../data/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./projects.module.css";
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
    <div className={styles.projects}>
      <h2 className="section-title">Projects</h2>
      <div className={styles.project_card}>
        {projectsData.map((p) => {
          return (
            <div key={p.id} className={styles["project-card-main"]}>
              <div className={styles.project_card_content}>
                <h2>{p.name}</h2>
                <p>{p.description}</p>
                <div className={styles.bottom}>
                  <h4>{p.stack}</h4>
                  <div className={styles["btn-div"]}>
                    <span>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.live}
                      >
                        <FaEye /> <small>Live</small>
                      </a>
                    </span>

                    <span>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.code}
                      >
                        <FaCode /> <small>code</small>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
