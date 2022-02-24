import React, { useEffect } from "react";
import "../styles/about.css";
import "../styles/button.css";
import { skillsData } from "../data/data";
import { Footer } from "../components/index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    gsap.from(".skills_card", {
      x: 100,
      duration: 0.3,
      stagger: {
        each: 0.3,
      },
      scrollTrigger: {
        trigger: ".skills_card",
        start: "top 90%",
      },
    });
    gsap.from(".skills_icon", {
      opacity: 0,
      duration: 0.3,
      delay: 1,
      stagger: {
        each: 0.3,
      },
      scrollTrigger: {
        trigger: ".skills_icon",
        start: "top 90%",
      },
    });
  }, []);
  return (
    <div className="about">
      <h2 id="heading-title">About Me</h2>
      <div className="about_section">
        <p>
          Hello, i'm Samuel Adeyemi am a frontend developer with strong passion
          in programming i have 2years+ of experience, i started coding in 2019
          when my bro introduced me to it, i started by learning python by
          building small project so as to understand it. In 2021 i joined a
          group of people where we challenged our self to learn and build new
          things. i am open for projects and collaboration hit my dm.
        </p>
        <div className="btn-div">
          <a href="/" className="button">
            Resume
          </a>
        </div>
      </div>
      <div className="skills_section">
        <h2>My Skills</h2>
        <p>Tools and technology i work with &raquo;</p>
        <section>
          <div className="skills">
            {skillsData.map((s) => {
              return (
                <div className="skills_card" key={s.id}>
                  <div className="icon_wrapper">
                    <img src={s.icon} className="skills_icon" alt="icon" />
                  </div>

                  <h3>{s.name}</h3>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
