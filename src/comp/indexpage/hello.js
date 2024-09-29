import React from "react";
import './hello.css';
function Indexes() {
  return (
    <body>        
      <div id="home" className="body-content container">
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
                <a href="GokulPrakash-Resume.pdf" target="_blank" class="btn btn-outline-warning">View Resume</a>
                <br></br>
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