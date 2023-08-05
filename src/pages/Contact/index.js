import React, { useState } from "react";
import "./contact.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../../components/Button";

function Contact() {
  const apiUrl = process.env.REACT_APP_APIURL;
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const response = await fetch(`${apiUrl}/send`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      if (response.status === 200) {
        setContactForm({ name: "", email: "", message: "" });
        alert("Message sent successfully");
      }
    } catch (error) {
      alert("Error Sending Message");
      console.log(error);
    }
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
          <input
            type="text"
            value={contactForm.name}
            onChange={(e) =>
              setContactForm({
                ...contactForm,
                name: e.target.value,
              })
            }
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            value={contactForm.email}
            onChange={(e) =>
              setContactForm({
                ...contactForm,
                email: e.target.value,
              })
            }
            placeholder="Enter your email"
            required
          />
          <textarea
            value={contactForm.message}
            onChange={(e) =>
              setContactForm({
                ...contactForm,
                message: e.target.value,
              })
            }
            placeholder="Write your message here..."
            required
          />
          <div className="submitbtn-wrapper">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
