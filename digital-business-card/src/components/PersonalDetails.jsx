import React from "react";
import Reference from "./Reference.jsx";
import ProfilePicture from "../assets/photo_ibrahim_benabdallah.jpg";
import MarkerIcon from "../assets/icons8-marker-50.png";

function PersonalDetails(){
    return (
        <div className="personal-details-container">
            <div className="profile-picture-container">
                <img src={ProfilePicture} />
            </div>
            <h3>Ibrahim Ben Abdallah</h3>
            <h4>Software Engineer</h4>
            <div className="location-container">
                <div className="location">
                    <img src={MarkerIcon} alt="Image" width="20px" height="20px" />
                    <h5>Toulouse, France</h5>
                </div>
            </div>
            
            
            <Reference />
        </div>
    )
}

export default PersonalDetails;