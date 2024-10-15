import React from "react";
import Navbar from "../../Components/Navbar";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <h1>Contact Us</h1>
      <section className="contact-info">
        <p>Send us a message today!</p>
        <p>Email: info@sharptrain.com</p>
      </section>
      <footer>
        <p>Navigation: Services | About | Courses | Contact</p>
        <p>Use of Site | Privacy Policy</p>
      </footer>
    </div>
  );
};

export default Contact;
