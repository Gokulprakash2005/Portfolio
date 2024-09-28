import React from "react";
import './hello.css';
function Indexes() {
  return (
    <body>
	<div className="offcanvas offcanvas-start text-bg-dark" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Gokul Prakash K</h1>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
         <p>Home</p><hr></hr>
         <p>About</p><hr></hr>
         <p>Certificates & Awards</p><hr></hr>
         <p>Projects</p><hr></hr>
         <p>Contact</p><hr></hr>
         <a href="https://github.com/Gokulprakash2005"><i className="fa-brands fa-github git text-white" ></i></a>
         <a href="https://www.linkedin.com/in/gokulprakash08/"><i className="fa-brands fa-linkedin linkedin text-white "></i></a>
         <a href="mailto:gokulprakash1301@gmail.com"><i className="fa-solid fa-envelope mail text-white"></i></a>
        </div>
      </div>
      
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top ">
        <div className="container-fluid">
          <h4 className="navbar-brand">Gokul Prakash</h4>
          <ul className="navbar-nav d-none d-sm-flex ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white me-2" href="C:\Users\gokul\OneDrive\Desktop\papom\Portfolio\src\comp\indexpage\hello.js">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-2" href="C:\Users\gokul\OneDrive\Desktop\papom\Portfolio\src\comp\about\about.js">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-2" href="#Certificates">Certificates </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-2" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="#contact">Contact</a>
            </li>
          </ul>
          <i className="fa-solid fa-bars d-sm-none bg-white"  data-bs-toggle="offcanvas" data-bs-target="#demo"></i>
        </div>
      </nav>
         
      
      <div className="body-content container">
        <div className="row">
     
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start">
                <div className="card profile" style={{ width: "300px" }}>
                <img className="card-img-top" src="/logo412.png" alt="A descriptive text here" style={{ width: "100%" }} />
                </div>
            </div>
        
     
            <div className=" col-12 col-lg-6 mt-5 mt-lg-20 ">
                <center>
                <h1>Gokul Prakash K</h1>
                <h4>Spring Boot Developer</h4>
                <h5>I am a passionate web developer with hands-on experience in frontend technologies like HTML, CSS, JavaScript, and React.js, and backend expertise in Java, Spring Boot. Skilled in problem-solving and version control with Git. For more details, <a href="https://github.com/Gokulprakash2005?tab=repositories">click here</a>.</h5>
                <h5>gokulprakash1301@gmail.com</h5>
                <h5>+91 7603986981</h5>
                <a href="file:///C:/Users/gokul/Downloads/GokulPrakash-Resume.pdf">
                <button type="button" className="btn btn-warning">Open Resume</button>
                </a><br></br>
                <a href="https://github.com/Gokulprakash2005"><i className="fa-brands fa-github fs-4 text-black me-2 mt-3" ></i></a>
                <a href="https://www.linkedin.com/in/gokulprakash08/"><i className="fa-brands fa-linkedin fs-4  text-black me-2"></i></a>
                <a href="mailto:gokulprakash1301@gmail.com"><i className="fa-solid fa-envelope  fs-4 text-black"></i></a>
                </center>
            </div>
        </div>
    </div> 
</body>
    
  );
}

export default Indexes;