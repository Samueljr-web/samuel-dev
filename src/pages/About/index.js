import React, { useEffect } from "react";
import "./about.css";
import { Button } from "../../components/Button";
import { skillsData } from "../../data/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    gsap.from(".skills_card", {
      opacity: 0,
      duration: 0.8,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: ".skills_card",
        start: "top 90%",
      },
    });
  }, []);
  return (
    <div className="about">
      <h2 className="section-title">
        About <b>Me</b>
      </h2>
      <div className="about_section">
        <p>
          I'm a frontend developer with 2years experience in building &
          maintaining web apps i have great passion in solving problems with
          code, i take special intrest in optimizing the performance & usability
          of web applications, I also enjoy programming & tackling intresting
          software challenges.
        </p>
        <div className="btn-div">
          <Button>Resume</Button>
        </div>
      </div>
      <div className="skills_section">
        <h2>My Skills</h2>
        <p>Tools and technologies i work with &raquo;</p>
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
    </div>
  );
}

export default About;
