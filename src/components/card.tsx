import React from "react";
import { NavLink } from "react-router-dom";
interface cardProps {
  link: string,
  imgUrl: string,
  title: string,
  description: string
}
export default function Card({link, imgUrl, title, description}: cardProps) {
  return (
    <NavLink to={`${link}`}>
    <div
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
      className="card gradient-border container-fluid"
    >
      <div className="card-info">
        <h4 className="card-title">{title}</h4>
        <p className="card-description">{description}</p>
        <div className="card-waves" />
      </div>
    </div>
    </NavLink>
  );
}