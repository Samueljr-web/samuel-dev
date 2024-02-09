"use client";

import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import Image from "next/image";
import styles from "./page.module.css";

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
    <div className="styles.home">
      <div className="styles.hero_section">
        <div className="styles.hero_content">
          <h2>
            Hello, i&apos;m <b>Samuel Adeyemi</b>
          </h2>
          <h2>
            <strong>Frontend Developer</strong>
            {/* <br /> */}
            <p>
              i&apos;m a <span>Frontend Developer</span> currently based in
              Abuja, Nigeria, i have 3+years <br />
              experience of building aesthetic user interfaces.
            </p>
          </h2>
        </div>
        <div className="styles.hero_image" ref={heroImageRef}>
          <Image
            src={"/assets/hero-image-mobile.png"}
            alt="Samuel"
            className="styles.img styles.hero-desktop"
            width={200}
            height={100}
          />
          <Image
            src={"/assets/Hero-image.png"}
            alt="Samuel"
            className="styles.img styles.hero-mobile"
            width={200}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
