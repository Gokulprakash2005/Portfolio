import React from "react";
import './Contact.css';
import { IoMdCall } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
function Contact() {
    return (
        <header className="headers">
            <div className="contact-container">
                <div className="contact-main">
                    <form className="Contact-head ">
                        <h1 className=" contact-title" >Contact Us</h1>
                        <label htmlFor="frame">Name:</label>
                        <input type="text" id="frame" name="frame" placeholder="Name" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Email" />
                        <label htmlFor="contactnumber">Contact Number:</label>
                        <input type="tel" id="contactnumber" name="contactnumber" placeholder="Contact Number" />
                        <label htmlFor="textarea">Message:</label>
                        <textarea id="textarea" name="textarea" placeholder="Message" cols="38" rows="5"></textarea>
                        <input type="submit" id="buttons" value="Submit" />
                    </form>
                </div>
                <div className="contact-side ">
                    <p><a href="mailto:gokulprakash1301@gmail.com" style={{color:"white"}}><IoMail style={{fontSize:"large"}}/> gokulprakash1301@gmail.com</a></p>
                    <p><a href="https://github.com/Gokulprakash2005"style={{color:"white"}} ><FaGithub style={{marginBottom:"4px"}}/> GokulPrakash | GitHub</a></p>
                    <p><a href="https://www.linkedin.com/in/gokulprakash08/" style={{color:"white"}} > <ImLinkedin style={{marginBottom:"4px"}}/> GokulPrakash | LinkedIn</a></p>
                    <p  style={{color:"white"}}> <IoMdCall style={{fontSize:"large", marginBottom:"3px"}} /> 7603986981</p>
                    </div>
            </div>
        </header>
    );
}

export default Contact;
