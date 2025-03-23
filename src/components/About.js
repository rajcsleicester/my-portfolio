import React from "react";                         // Import React for component creation
import "../styles/About.css"; // For About.js

function About() {
    return (
        <div className="about">                    {/* The main container div */}
            <h2>About Me</h2>                     {/* Section title */}
            <p>I'm a full-stack developer passionate about building great software.</p>  {/* Short bio */}
        </div>
    );
}

export default About;                             {/* Export component to use in App.js */}
