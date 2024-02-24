"use client";

import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import Image from "next/image";
import styles from "./page.module.css";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/Button";

export default function Home() {
  const heroImageRef = useRef(null);
  useEffect(() => {
    gsap.from(".hero_content", 0.5, {
      opacity: 0,
      y: "-100%",
      delay: 0.5,
    });
    gsap.from(".img", 0.5, {
      opacity: 0,
      x: 100,
      ease: Power3.easeOut,
      delay: 1.5,
    });
  });
  return (
    <div className={styles.home}>
      <div className={styles.hero_section}>
        <div className={styles.hero_content}>
          <h2>
            <b>Samuel Adeyemi</b> | <strong>Frontend Engineer</strong>
          </h2>
          <div className={styles.social_icons}>
            <i className={styles.icon}>
              <a
                href="https://linkedin.com/in/Samueljrweb"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src={"/assets/social-icons/linkedin.svg"}
                  alt="linkedin-icon"
                  width={35}
                  height={35}
                />
              </a>
            </i>
            <i className={styles.icon}>
              <a
                href="https://github.com/Samueljr-web"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src={"/assets/social-icons/github.svg"}
                  alt="github-icon"
                  width={35}
                  height={35}
                />
              </a>
            </i>
            <i className={styles.icon}>
              <a
                href="https://twitter.com/Samueljrweb"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src={"/assets/social-icons/twitter.svg"}
                  alt="twitter-icon"
                  width={35}
                  height={35}
                />
              </a>
            </i>
          </div>
          <h2 className={styles.type}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi 👋")
                  .pauseFor(2500)
                  .deleteAll()
                  .pauseFor(1500)
                  .typeString(
                    "I'm a <span class='custom_text'>frontend engineer</span> with 3+ years experience in building & maintaining web apps"
                  )
                  .pauseFor(2500) // Pause after typing
                  .deleteAll() // Delete all text
                  .pauseFor(1500) // Pause before restarting
                  .start(); // Start typing animation
              }}
              options={{
                loop: true, // Set loop option to true for continuous typing animation
              }}
            />
          </h2>
        </div>
      </div>
      <div className={styles.hero_action}>
        <Button href="https://drive.google.com/file/d/1A2uMcr6APTTziVbVqchguwgNHhPMhf72/view?usp=drive_link">
          Resume
        </Button>
      </div>
    </div>
  );
}
