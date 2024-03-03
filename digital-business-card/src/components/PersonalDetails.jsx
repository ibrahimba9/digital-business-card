import React from "react";
import Reference from "./Reference.jsx";
import ProfilePicture from "../assets/photo_ibrahim_benabdallah.jpg";

function PersonalDetails(){
    return (
        <div>
            <img src={ProfilePicture} width="20%" />
            <h3>Ibrahim Ben Abdallah</h3>
            <h4>Software Engineer</h4>
            <h5>Toulouse France</h5>
            <Reference />
        </div>
    )
}

export default PersonalDetails;