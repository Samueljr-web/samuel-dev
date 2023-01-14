import React from "react";
import "./contact.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <h2 className="section-title">Contact</h2>
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
    </div>
  );
}

export default Contact;
