"use client";

import React, { useEffect } from "react";
import styles from "./about.module.css";
import { Button } from "../components/Button";
import { skillsData } from "../../../data/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
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
    <div className={styles.about}>
      <h2 className="section-title">
        About <b>Me</b>
      </h2>
      <div className={styles.about_section}>
        <p>
          I&#39; m a frontend developer with 3+years experience in building &
          maintaining web apps i have great passion in solving problems with
          code, i take special intrest in optimizing the performance & usability
          of web applications, I also enjoy programming & tackling intresting
          software challenges.
        </p>
        <div className={styles["btn-div"]}>
          <Button>Resume</Button>
        </div>
      </div>
      <div className={styles.skills_section}>
        <h2>My Skills</h2>
        <p>Tools and technologies i work with &raquo;</p>
        <section>
          <div className={styles.skills}>
            {skillsData.map((s) => {
              return (
                <div className={styles.skills_card} key={s.id}>
                  <div className="styles.icon_wrapper">
                    <Image
                      src={s.icon}
                      className={styles.skills_icon}
                      alt="icon"
                      width={1.5}
                      height={1.5}
                    />
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
