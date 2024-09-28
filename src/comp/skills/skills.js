import React from "react";

function Skills_Section() {
  return (
    <>
      <div className="container mt-3">
        <div className="mt-4 p-5 bg-white text-dark rounded">
        <h1>Skills</h1>
          <div className="mb-4">
            <h5>HTML</h5>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <h5>Bootstrap</h5>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "50%" }}>
                50%
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5>JavaScript</h5>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "40%" }}>
                40%
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5>React.js</h5>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "40%" }}>
                40%
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5>Java</h5>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "85%" }}>
                85%
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5>Spring Boot</h5>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "70%" }}>
                70%
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <h5>MySQL</h5>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5>Git</h5>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Skills_Section;
