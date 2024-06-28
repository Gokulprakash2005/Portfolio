import React from "react";
import './Contact.css';

function Contact()
{
    return(
        <header className="headers">
          <div className="contact-main">
           <form className="Contact-head">
             <h1 style={{fontFamily:'cursive',padding:"20px"}}>Contact Us</h1>
             <label for="frame"></label>
             <input type="text" id="frame" name="frame" placeholder="Name"></input>
             <label for="email"></label>
             <input type="email" id="email" name="email" placeholder="Email"></input>
             <label for="contactnumber"></label>
             <input type="tel" id="contactnumber" name="contactnumber" placeholder="Contact Number"></input>
             <label htmlFor="textarea"></label>
             <textarea id="textarea" name="textarea" placeholder=" Message" cols="38" rows="10"></textarea>
             <input type="submit" id="buttons"></input>
           </form>
           </div>  
        </header>
    )
}
export default Contact;