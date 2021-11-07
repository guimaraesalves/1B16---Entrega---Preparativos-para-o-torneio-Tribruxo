import React from "react";
import "./Card.css";

function Card({ student }) {
  return (
    <div>
      <div className="card">
        <div className="card-title">{student.name}</div>
        <img className="card-body" src={student.image} alt={student.name}></img>
        <label className="status">{student.actor}</label>
      </div>
    </div>
  );
}

export default Card;
