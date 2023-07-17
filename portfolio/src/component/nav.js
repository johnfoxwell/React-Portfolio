import React from "react";

function Nav({ handlePageChange }) {
    return (
        <nav>
            <p>
                <a href="#about" onClick={() => handlePageChange("About")}>
                    About
                </a>
            </p>
            <p>
                <a href="#contact" onClick={() => handlePageChange("Contact")}>
                    Contact
                </a>
            </p>
            <p>
                <a href="#project" onClick={() => handlePageChange("Project")}>
                    Project
                </a>
            </p>
            <p>
                <a href="#resume" onClick={() => handlePageChange("Resume")}>
                    Resume
                </a>
            </p>
        </nav>
    )
}


export default Nav;