import React from "react";
import Navbar from "../../Components/Navbar";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h1>SharpTrain</h1>
      <section className="intro">
        <h2>Technical Services and Remote Upskilling</h2>
        <p>SharpTrain offers technical consulting, course development, training, and talent advisory.</p>
      </section>
      <section className="details">
        <h3>Onboarding & Mobility</h3>
        <p>SharpTrain specializes in workforce assessments and services designed to reduce onboarding time...</p>
        <h3>Cloud & Data Solutions</h3>
        <p>SharpTrain offers services in cloud automation, process automation, data visualization...</p>
        <h3>Technical Training</h3>
        <p>We create custom curricula that enhances centers of excellence and promotes self-sufficiency.</p>
      </section>
      <footer>
        <p>Contact us at info@sharptrain.com for more details.</p>
      </footer>
    </div>
  );
};

export default Home;
