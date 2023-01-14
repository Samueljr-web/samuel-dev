import React from "react";
import "./contact.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../../components/Button";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <h2 className="section-title">
        Contact <b>Me</b>
      </h2>
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

      <div className="contact-form">
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your name"></input>
          <input type="email" placeholder="Enter your email"></input>
          <textarea placeholder="Write your message here..." />
          <div className="submitbtn-wrapper">
            <Button type="submit">Shoot</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
