import React from "react";

function Certifications_Section() {
  return (
    <>
      <div id="certficates" className="container mt-5">
        <div className="p-5 bg-light text-dark rounded">
          <h1>Certifications & Achievements</h1>
          <ul>
            <li>
              <h4>Java Basics Certification</h4>
              <h5>Provider: Coursera</h5>
              <h5>Description: Demonstrated foundational knowledge in Java programming.</h5>
            </li>
            <li>
              <h4>Introduction to Web Development Certification</h4>
              <h5>Provider: Coursera</h5>
              <h5>Description: Covered HTML, CSS, and JavaScript fundamentals.</h5>
            </li>
            <li>
              <h4>Hackathon 3rd Prize Certification</h4>
              <h5>Provider: Dr. Mahalingam College of Engineering and Technology</h5>
              <h5>Description: Awarded 3rd prize in Hackathon for problem-solving and innovation.</h5>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Certifications_Section;
