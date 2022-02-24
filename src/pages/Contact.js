import React from "react";
import "../styles/contact.css";
import { Footer } from "../components/index";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <h2 id="heading-title">Contact</h2>
      <div>
        <p>You can reach me via email, linkedin and twitter.</p>
        <div className="contact_card_div">
          <div className="contact_card">
            <span>
              <FaPhoneAlt />
            </span>

            <h2>+2348145218649</h2>
          </div>
          <div className="contact_card">
            <span>
              <FaEnvelope />
            </span>

            <h2>s3adeyemi@gmail.com</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
