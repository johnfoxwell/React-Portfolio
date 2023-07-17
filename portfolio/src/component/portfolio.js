import React, { useState } from "react";

// Components that will stay the same when the state changes
import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"

// Components that will change when a new page is selected from the nav bar
import About from "./about"
import Contact from "./contact"
import Project from "./project"
import Resume from "./resume"


function PortfolioRender() {
    const [currentPage, setPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return (
                <About/>
            )
        } else if (currentPage === "Contact") {
            return (
                <Contact/>
            )
        } else if (currentPage === "Project") {
            return (
                <Project/>
            )
        } else {
            return (
                <Resume/>
            )
        }
    };

    const PageChange = (page) => setPage(page)

    return (
        <div>
            <Header/>
            <Nav handlePageChange={PageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    )
};


export default PortfolioRender;