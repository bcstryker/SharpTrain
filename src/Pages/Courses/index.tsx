import React from "react";
import Navbar from "../../Components/Navbar";
import "./Courses.css";

const Courses: React.FC = () => {
  return (
    <div className="courses-container">
      <Navbar />
      <h1>Courses</h1>
      <section className="course-list">
        <h3>Infrastructure As Code</h3>
        <p>Beginner Python: Introduction to python programming, data types, and understanding of APIs.</p>
        <p>Python for SDN: Python programming for on-premise cloud.</p>
        <p>Python for Public Cloud: Data Automation in public cloud environments.</p>
        <p>Intro to PA / RPA: Implementing Process Automation with and without Robots.</p>
        <p>Practical BI with Tableau: Increase efficacy and quality of reports and dashboards.</p>
        <p>Data Analytics and Deep Learning: Concepts of Data Science and Machine Learning.</p>
        <p>Management Mastery: Methodology Transition and Maturing Agile Practices.</p>
        <p>DevSecOps Concentration: Security within DevOps.</p>
      </section>
      <footer>
        <p>Questions? Interested in taking a course? Let us know!</p>
        <p>Email: info@sharptrain.com</p>
      </footer>
    </div>
  );
};

export default Courses;
