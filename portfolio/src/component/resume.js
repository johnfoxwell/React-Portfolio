import React from "react";

function ResumeRender() {
    return <main>
        <h2>Download resume <a download="logo.svg" href="./logo">Here</a></h2>
        <h2>DOES NOT DOWNLOAD RESUME JUST A LOGO FILE</h2>
        
        <h3>Frontend</h3>
        <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>Git</li>
            <li>Web APIs</li>
        </ul>
        <h3>Backend</h3>
        <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>SQL</li>
        </ul>
    </main>
}


export default ResumeRender;