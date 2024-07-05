import React from "react";
import './Contact.css';

function Contact() {
    return (
        <header className="headers">
            <div className="contact-main">
                <form className="Contact-head">
                    <h1 className="contact-title">Contact Us</h1>
                    <label htmlFor="frame"></label>
                    <input type="text" id="frame" name="frame" placeholder="Name" />
                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" placeholder="Email" />
                    <label htmlFor="contactnumber"></label>
                    <input type="tel" id="contactnumber" name="contactnumber" placeholder="Contact Number" />
                    <label htmlFor="textarea"></label>
                    <textarea id="textarea" name="textarea" placeholder="Message" cols="38" rows="5"></textarea>
                    <input type="submit" id="buttons" />
                </form>
            </div>
        </header>
    );
}

export default Contact;
