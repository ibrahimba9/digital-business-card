import React from "react";
import EmailIcon from "../assets/icons8-email-50.png";
import GitHubIcon from "../assets/icons8-github-30.png";
import LinkedinIcon from "../assets/icons8-linkedin-48.png";

function Reference(){
    return (
        <div className="reference">
            <a>
                <button className="reference-button">
                    <img src={EmailIcon} alt="Image" width="20px" height="20px" ></img>
                    Email
                </button>
            </a>
            <a  href="https://www.linkedin.com/in/ibrahimba/" target="_blank" rel="noopener noreferrer">
                <button className="reference-button">
                    <img src={LinkedinIcon} alt="Image" width="20px" height="20px" ></img>
                    LinkedIn
                </button>
            </a>
            <a  href="https://github.com/ibrahimba9/" target="_blank" rel="noopener noreferrer">
                <button className="reference-button">
                    <img src={GitHubIcon} alt="Image" width="20px" height="20px" ></img>
                    Github
                </button>
            </a>
        </div>
    )
}

export default Reference;