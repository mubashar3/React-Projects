import React from "react";

export default function Info() {
  return (
    <div className="navbar">
      <nav>
        <img src={require("./images/myImage.jpeg")} alt="img" />
      </nav>
      <h1 className="navName">Muhammad Mubashar</h1>
      <p className="navAbout">Frontend Developer</p>
      <p className="navAddress">Lahore-Pakistan</p>
      <div className="navButton">
        <a  className="navEmail" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" rel='noreferrer' target={"_blank"}>Email</a>
        <a className="navLinkedin" href="https://www.linkedin.com/in/muhammad-mubashar-6932a0247" rel='noreferrer' target={"_blank"} >Linkedin</a>
      </div>
    </div>
  );
}
