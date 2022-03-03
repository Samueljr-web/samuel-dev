import React, { useEffect, useRef } from "react";
import "../styles/home.css";
import { gsap, Power3 } from "gsap";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import Me from "../assets/cartoon.png";

function Home() {
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
    <div className="home">
      <div className="hero_section">
        <div className="hero_content">
          <h2>
            Hello, i'm <b>Samuel Adeyemi</b>
          </h2>
          <h2>
            <strong>Frontend Developer</strong>
            <br />
            <p>
              i'm a Frontend Developer currently based in Abuja, Nigeria, i have
              2years+ <br />
              experience of building aesthetic user interfaces.
            </p>
          </h2>
        </div>
        <div className="hero_image" ref={heroImageRef}>
          <img src={Me} alt="Samuel" className="img" />
        </div>
      </div>
      <div className="hero_social_icons">
        <i className="icon">
          <a
            href="https://twitter.com/Samueljrweb"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitterSquare />
          </a>
        </i>
        <i className="icon">
          <a
            href="https://instagram.com/Samueljrweb"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagramSquare />
          </a>
        </i>
        <i className="icon">
          <a
            href="https://github.com/Samueljr-web"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </i>
        <i className="icon">
          <a
            href="https://linkedin.com/Samueljrweb"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </i>
      </div>
    </div>
  );
}

export default Home;
