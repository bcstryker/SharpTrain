import React from "react";
import Navbar from "../../Components/Navbar";
import "./Services.css";

const Services: React.FC = () => {
  return (
    <div className="services-container">
      <Navbar />
      <h1>Services</h1>
      <section className="service-section">
        <h2>Onboarding & Mobility</h2>
        <p>
          SharpTrain provides specialized workforce assessments and services designed to reduce onboarding time and
          increase internal career mobility. Our approach pinpoints shortfalls and gaps in recruiting, assessment, and
          training.
        </p>
      </section>
      <section className="service-section">
        <h2>Cloud & Data Solutions</h2>
        <ul>
          <li>Cloud Assessment and Optimization</li>
          <li>Cloud Refresh and Management Transition</li>
          <li>End-to-End Cloud Automation</li>
          <li>Process Automation (Google Sheets, Excel)</li>
          <li>Robotic Process Automation (UiPath)</li>
          <li>Data Visualization (Tableau, Power BI)</li>
          <li>Data Governance Advisory</li>
          <li>Full-Stack Development</li>
          <li>Software Auditing</li>
          <li>Fractional CIO Consulting</li>
        </ul>
        <p>Contact us at info@sharptrain.com to set up a free consultation.</p>
      </section>
      <section className="service-section">
        <h2>Technical Training</h2>
        <p>
          SharpTrain has a proven track record of creating custom curricula, enhancing centers of excellence, and
          supporting diversity hiring initiatives. We condense complex material into digestible formats to optimize
          learning.
        </p>
      </section>
      <footer>
        <p>Contact us at info@sharptrain.com for more details on our services.</p>
      </footer>
    </div>
  );
};

export default Services;
