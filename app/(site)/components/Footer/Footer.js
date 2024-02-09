import React from "react";
import Github from "../../assets/social-icons/github.svg";
import Linkedin from "../../assets/social-icons/linkedin.svg";
import Twitter from "../../assets/social-icons/twitter.svg";
import "./footer.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div className="footer_social_icons">
          <i className="icon">
            <a
              href="https://linkedin.com/Samueljrweb"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Linkedin} alt="linkedin-icon" />
            </a>
          </i>
          <i className="icon">
            <a
              href="https://github.com/Samueljr-web"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Github} alt="github-icon" />
            </a>
          </i>
          <i className="icon">
            <a
              href="https://twitter.com/Samueljrweb"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Twitter} alt="twitter-icon" />
            </a>
          </i>
        </div>
        <div className="copyright">
          <h4>&copy; Samuel AD, {date}.</h4>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
