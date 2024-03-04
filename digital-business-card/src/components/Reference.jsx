import React from "react";
import EmailIcon from "../assets/icons8-email-50.png";
import GitHubIcon from "../assets/icons8-github-30.png";
import LinkedinIcon from "../assets/icons8-linkedin-48.png";


function Reference(){
    const inputTooltip = () => {
        const email = "ibrahim.ben.abdallah@outlook.com";
        navigator.clipboard.writeText(email);
        var tooltip = document.getElementById("emailTooltip");
        tooltip.innerHTML = "Copied: " + email;
    }

    const outputTooltip = () => {
        var tooltip = document.getElementById("emailTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    }

    return (
        <div className="reference">
            <div className="tooltip">
                <button className="reference-button" onClick={inputTooltip} onmouseout={outputTooltip}>
                    <span class="tooltiptext" id="emailTooltip">Copy to clipboard</span>
                    <img src={EmailIcon} alt="Image" width="20px" height="20px" ></img>
                    Email
                </button>
            </div>
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