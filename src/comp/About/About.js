import React from "react";
import './About.css';

function About() {
    return (
        <body className="about-body">
         <div className="About-head">
         <h3 style={{color:"sandybrown",marginBottom:"30px"}}>About</h3>
         <h1>Hello You</h1>
         <h5 style={{marginTop:"10px"}}>My Name is Gokul Prakash "As an emerging web developer, I'm learning full-stack technologies
         to gain expertise."I'm currently in my final year pursuing B.Tech IT at Mahalingam College of Engineering, Pollachi, with a keen interest in advancing my skills in web development. My journey began with mastering the fundamentals of HTML, CSS, and JavaScript, which laid the groundwork for exploring front-end frameworks like React.js. Additionally, my proficiency extends to backend development using core Java and managing databases with SQL.
         To deepen my understanding of enterprise-level applications, I am actively learning JDBC for database connectivity, Hibernate for ORM mapping, and Spring for building robust Java applications. I'm also delving into microservices architecture to understand scalable and resilient application design, alongside containerization using Docker.
         Recently, I've been fascinated by the efficiency and utility of Tailwind CSS in speeding up UI development and enhancing user experience. Concurrently, I'm honing my version control skills using Git and collaborating on projects through GitHub.
         Looking forward, I aim to apply for these skills to create innovative solutions and contribute to the evolving landscape of web development. 
         <span style={{color:"red"}}>For More Updates</span> </h5>
         <button className="About-but" >Contact Me</button>   
         </div>        
        </body>
    );
}

export default About;
