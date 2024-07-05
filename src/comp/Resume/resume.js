
import React from "react";
import './Resume.css';

function Resume() {
    return (
        <div className="resume-head">
            <div className="container">
                <div className="content">
                    <img className="profile-img" 
                         src="https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                         alt="Profile" />
                    <div className="resume-body">
                        <h2>Explore My Career Journey</h2>
                        <p>Curious about my professional background? Hit the resume button to find out.</p>
                        <button type="button" className="btn">View</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
