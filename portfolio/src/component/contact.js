import React from "react";

function ContactRender() {
    return <main>
        <h2>Contact Me</h2>
        <form>
            <h3>Name</h3>
            <input
            type="text"
            placeholder="Please enter your name"
            className="name-input"
            ></input>
            <h3>Email</h3>
            <input
            type="email"
            placeholder="Please enter your email"
            className="email-input"
            ></input>
            <h3>Message</h3>
            <input
            type="text"
            placeholder="Please enter your message"
            className="message-input"
            ></input>
            <br/>
            <button>SUBMIT</button>
        </form>
    </main>
}


export default ContactRender;