import React from "react";
import Navbar from "../../Components/Navbar";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <Navbar />
      <h1>About SharpTrain</h1>
      <section className="about-section">
        <p>
          SharpTrain’s industry-leading team possesses an extensive background in cloud infrastructure, data
          engineering, and full-stack development. We excel at providing advisory services, auditing, optimization
          plans, creating SOPs, migration planning, knowledge transfer, curricula construction, and live training.
        </p>
        <p>
          What separates us from our competitors is the ability to apply automation concepts anywhere while instilling
          an open-source, vendor-agnostic approach within our client’s technical teams. We pride ourselves on leaving
          our clients with the skills and mentality to achieve self-sufficiency.
        </p>
      </section>
      <footer>
        <p>Contact us at info@sharptrain.com for more information.</p>
      </footer>
    </div>
  );
};

export default About;
