import React from "react";
import "./CardPequeno1.css";

function CardPequeno1(props) {
  return (
    <div className="smallcard-container">
      <img src={props.imagem} alt="emailIcon" />
      <div>
        <h4>{props.texto}</h4>
      </div>
    </div>
  );
}

export default CardPequeno1;
