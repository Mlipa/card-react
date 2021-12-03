import React from "react";
import header from "../assets/Rectangle.png";
import profile from "../assets/Ellipse.png";
import Descriptions from "./Descriptions";
import Fooder from "./Fooder";
import "./styles/Card.css";

function Card() {
  return (
    <div className="container">
      <div className="card">
        <img className="header" src={header} alt="header page" />
        <img className="profile" src={profile} alt="profile" />
        <Descriptions />
        <Fooder />
      </div>
    </div>
  );
}

export default Card;
