import React from "react";
import "../css/card.css";
import { Link } from "react-router-dom";

function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <Link to={"/info"}>
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
