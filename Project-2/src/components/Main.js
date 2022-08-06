import React from "react";

export default function Main() {
  return (
    <section className="mainSection" >
      <img className="mainPhoto" src={require("./images/main.jpeg")} alt="loading" />
      <h1 className="mainHeading">Online Experience</h1>
      <p className="mainText">
        Join unique interactive activities led by one-of-a-kind host-all without
        having home
      </p>
    </section>
  );
}
