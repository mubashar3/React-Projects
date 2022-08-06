import React from "react";

export default function Cards(props) {
  let badgeText = props.openSpots === 0 ? "SOLD OUT" : "ONLINE";
  return (
    <div className="card">
      {badgeText && <div className="card-badge" >{badgeText}</div>}
      <img
        src={require(`./images/${props.coverImg}`)}
        alt="img"
        className="card-img"
      />

      <div className="card-stats">
        <img
          className="card-star"
          src={require("./images/star.png")}
          alt="img"
        />

        <span>{props.rating}</span>
        <span className="gray">({props.reviewCounter}) .</span>
        <span className="gray">{props.location}</span>
      </div>
      <div>
        <p>{props.title}</p>
          <span className="bold">From ${props.price}</span>
        
      </div>
    </div>
  );
}
