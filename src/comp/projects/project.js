import React from "react";

function Projects_Section() {
  return (
    <>
      <div id="projects" className="container mt-5" >
        <div className="p-5 bg-light text-dark rounded " >
          <h1>Projects</h1>
          <div id="projectsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-block w-100">
                  <h4>Student Management System</h4>
                  <h5>
                    Developed a comprehensive Student Management System using Spring Boot, 
                    implementing CRUD operations (GET, PUT, POST, DELETE) with a MySQL database. 
                    The system includes a responsive frontend, ensuring seamless user experience 
                    across devices.
                  </h5>
                  <h5>
                    <a href="#" target="_blank" rel="noopener noreferrer">Link to Demo</a>
                  </h5>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-block w-100">
                  <h4>Volunteer Registration Page for Disaster Management</h4>
                  <h5>
                    Developed a volunteer registration page using Spring Boot with a MySQL database. 
                    Completed the backend implementation, including client-server communication and 
                    seamless data storage in the database.
                  </h5>
                  <h5>
                    <a href="#" target="_blank" rel="noopener noreferrer">Link to Demo</a>
                  </h5>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-block w-100">
                  <h4>To-Do List Application</h4>
                  <h5>
                    Developed a To-Do List application with a responsive design using HTML, Bootstrap, 
                    and JavaScript. The application features an intuitive user interface that adapts 
                    to different screen sizes, providing a consistent and user-friendly experience.
                  </h5>
                  <a href="#" target="_blank" rel="noopener noreferrer" >Link to Demo</a>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev " style={{ marginTop:"140px" }} type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: "invert(100%)" }}></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next " style={{ marginTop:"140px" }} type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: "invert(100%)" }}></span>
              <span className="visually-hidden">Next</span>
            </button>            
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects_Section;
