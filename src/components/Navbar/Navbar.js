import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function NavBar({ loader }) {
  const [IsOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const handleIsOpen = () => {
    if (IsOpen) {
      gsap.to(menuRef.current, 0.5, { opacity: 1, visibility: "visible" });
    } else {
      gsap.to(menuRef.current, 0.5, { opacity: 0, visibility: "hidden" });
    }
    setIsOpen(!IsOpen);
  };

  return (
    <div>
      <div className="navigation_bar">
        <div className="nav_brand">
          <img src={logo} width={120} height={70} alt="logo" />
        </div>
        <div className="bars" onClick={() => handleIsOpen()}>
          <span className="bar"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
        </div>
        <div className="navigation" ref={menuRef}>
          <div className="nav_brand menu">
            <img src={logo} width={120} height={70} alt="logo" />
          </div>
          <div className="close-icon" onClick={() => handleIsOpen()}>
            <span className="close close1"></span>
            <span className="close close2"></span>
          </div>
          <div className="navigation-links">
            <Link to="/" className="link" onClick={() => handleIsOpen()}>
              Home
            </Link>
            <Link
              to="/about"
              className="link"
              // onClick={() => (handleIsOpen ? loader() : handleIsOpen())}
              onClick={() => handleIsOpen()}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="link"
              onClick={() => handleIsOpen()}
            >
              Projects
            </Link>
            <Link to="/contact" className="link" onClick={() => handleIsOpen()}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
