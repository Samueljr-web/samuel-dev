import React from "react";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div className="footer_social_icons">
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
        <div className="copyright">
          <h4>&copy; Dev samuel, {date}.</h4>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
