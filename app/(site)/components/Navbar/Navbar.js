import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function NavBar() {
  const [IsOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const handleIsOpen = () => {
    if (IsOpen) {
      gsap.to(menuRef.current, 0.5, {
        opacity: 0,
        visibility: "hidden",
        y: "-100%",
      });
    } else {
      gsap.to(menuRef.current, 0.5, {
        opacity: 1,
        visibility: "visible",
        y: "0",
      });
    }
    setIsOpen(!IsOpen);
  };

  return (
    <div>
      <div className="navigation_bar">
        <div className="nav_brand">
          <img src={logo} width={120} height={70} alt="logo" />
        </div>
        <div className="menubar" onClick={() => handleIsOpen()}>
          <span className="menu-open-icon first-bar" />
          <span className="menu-open-icon second-bar" />
          <span className="menu-open-icon third-bar" />
        </div>

        <div className="navigation" ref={menuRef}>
          {/* <div className="nav_brand_">
            <img src={logo} width={120} height={70} alt="logo" />
          </div> */}
          <div className="close" onClick={() => handleIsOpen()}>
            <span className="close-icon close-icon1" />
            <span className="close-icon close-icon2" />
          </div>
          <div className="navigation-links" onClick={() => handleIsOpen()}>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
            <Link to="/projects" className="link">
              Projects
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
