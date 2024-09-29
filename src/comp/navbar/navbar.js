import React from "react";
import './navbar.css';
function Navbar() {
    return (
    <body>
	<div className="offcanvas offcanvas-start text-bg-dark" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Gokul Prakash K</h1>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
         <p data-bs-dismiss="offcanvas" ><a href="#home" >Home</a></p><hr></hr>
         <p data-bs-dismiss="offcanvas" ><a href="#about">About</a></p><hr></hr>
         <p data-bs-dismiss="offcanvas" ><a href="#certficates">Certificates & Awards</a></p><hr></hr>
         <p data-bs-dismiss="offcanvas" ><a href="#projects">Projects</a></p><hr></hr>
         <p data-bs-dismiss="offcanvas" ><a href="#contact">Contact</a></p><hr></hr>
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
              <a className="nav-link text-white me-2" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-2" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-2" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-2" href="#certficates">Certificates </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="#contact">Contact</a>
            </li>
                    
          </ul>
          <i className="fa-solid fa-bars d-sm-none bg-white"  data-bs-toggle="offcanvas" data-bs-target="#demo"></i>
        </div>
      </nav>
</body>
    
  );
}

export default Navbar;