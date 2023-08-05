import React, { useEffect, useRef } from "react";
import "./home.css";
import { gsap, Power3 } from "gsap";
import HeroImage from "../../assets/Hero-image.png";
import HeroImageMobile from "../../assets/hero-image-mobile.png";

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
              i'm a <span>Frontend Developer</span> currently based in Abuja,
              Nigeria, i have 3+years <br />
              experience of building aesthetic user interfaces.
            </p>
          </h2>
        </div>
        <div className="hero_image" ref={heroImageRef}>
          <img src={HeroImage} alt="Samuel" className="img hero-desktop" />
          <img src={HeroImageMobile} alt="Samuel" className="img hero-mobile" />
        </div>
      </div>
    </div>
  );
}

export default Home;
