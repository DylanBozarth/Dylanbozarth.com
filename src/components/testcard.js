import React from "react";

export default function TestCard(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.imgUrl})`
      }}
      className="card2"
    >
      <div className="card-info">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-description">{props.description}</p>
        <div className="card-waves" />
      </div>
    </div>
  );
}