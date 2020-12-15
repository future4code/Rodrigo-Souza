import React from "react";
import "./CardPequeno2.css";

function CardPequeno2(props) {
  return (
    <div className="smallcard-container2">
      <img src={props.imagem} alt="adressIcon"/>
      <div>
        <h4>{props.texto}</h4>
      </div>
    </div>
  );
}

export default CardPequeno2;
