import React from "react";
import "./navbar.css";
function Headerpoint()
{
    return(<div class="navbar">
        <nav class="navbar-left">
          <h1 style={{color:"blue"}}>praka<span style={{color:"red",fontFamily:"cursive"}}>sh</span></h1>
        </nav>
        <nav class="navbar-right">
        <div className="menu"> 
       <h3>about</h3>
        <h3>skills</h3>
        <h3>projects</h3>
        <h3>experience</h3>
        <h3>contacts</h3>
        <button style={{ width: "60px", backgroundColor: "green", color: "white" }}>join </button>
        </div>
        </nav>
    </div>
     
    )
}
export default Headerpoint;
