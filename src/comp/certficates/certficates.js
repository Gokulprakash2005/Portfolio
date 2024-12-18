import React from "react";

function Certifications_Section() {
  return (
    <>       
    <div id="certficates" className="container mt-5" >
    <div className="p-5 bg-light text-dark rounded " >
      <center><h1>Certifications & Achievements</h1></center>

      <div id="certficatesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <center>
          <div className="carousel-item active">
            <div className="d-block w-100">
              <h4>Java Basics Certification</h4>
              <h5>Provider: Coursera</h5>
              <h5>Description: Demonstrated foundational knowledge in Java programming.</h5>
              <h5>
                <a href="https://www.linkedin.com/in/gokulprakash08/recent-activity/all/" target="_blank" rel="noopener noreferrer">Link to Demo</a>
              </h5>
            </div>
          </div>
          </center>

       <center>
          <div className="carousel-item">
            <div className="d-block w-100">
              <h4>Introduction to Web Development Certification</h4>
              <h5>Provider: Coursera</h5>
              <h5>Description: Covered HTML, CSS, and JavaScript fundamentals.</h5>
              <h5>
                <a href="https://www.linkedin.com/in/gokulprakash08/recent-activity/all/" target="_blank" rel="noopener noreferrer">Link to Demo</a>
              </h5>
            </div>
          </div>
      </center>

         <center>
          <div className="carousel-item">
            <div className="d-block w-100">
              <h4>Hackathon 3rd Prize Certification</h4>
              <h5>Provider: Dr. Mahalingam College of Engineering and Technology</h5>
              <h5>Description: Awarded 3rd prize in Hackathon for problem-solving and innovation.</h5>
              <h5><a href="https://www.linkedin.com/in/gokulprakash08/recent-activity/all/" target="_blank" rel="noopener noreferrer" >Link to Demo</a></h5>
            </div>
          </div>
         </center>

         <center>
          <div className="carousel-item">
            <div className="d-block w-100">
              <h4>Object-Oriented Programming (OOPs) in Java Certification</h4>
              <h5>Issued by  Simplilearn</h5>
              <h5>
              Completed the OOPs in Java course by  Simplilearn, mastering core concepts like inheritance, polymorphism, abstraction, and encapsulation. Gained practical skills for building scalable and maintainable Java applications. This certification enhances my expertise in Java programming and software development.
              </h5>
              <h5><a href="https://www.linkedin.com/in/gokulprakash08/recent-activity/all/" target="_blank" rel="noopener noreferrer" >Link to Demo</a></h5>
            </div>
          </div>
         </center>

         <center> 
          <div className="carousel-item">
            <div className="d-block w-100">
              <h4>Introduction to Sorting Algorithms Certification</h4>
              <h5>Issued by  Simplilearn</h5>
              <h5>
              Completed the "Introduction to Sorting Algorithms" course by Simplilearn, gaining a clear understanding of key sorting techniques like Bubble Sort, Merge Sort, Quick Sort, and their applications. Acquired industry-relevant skills to optimize data processing and improve algorithm efficiency, enhancing my software development expertise.
              </h5>
              <h5><a href="https://www.linkedin.com/in/gokulprakash08/recent-activity/all/" target="_blank" rel="noopener noreferrer" >Link to Demo</a></h5>
            </div>
          </div>
        </center>
          

        <button className="carousel-control-prev " style={{marginTop:"100px"}} type="button" data-bs-target="#certficatesCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: "invert(100%)" }}></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next " style={{marginTop:"100px"}} type="button" data-bs-target="#certficatesCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: "invert(100%)" }}></span>
          <span className="visually-hidden">Next</span>
        </button>  

      </div>
    </div>
  </div>
  </div>
</>
  );
}

export default Certifications_Section;
