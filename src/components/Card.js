import React from "react";

function Card(props) {
  return (
    <React.Fragment>
      <h3>{props.characterInfo.name}</h3>
      <img src={props.characterInfo.image} alt={props.characterInfo.name} />
      <p>
        {props.characterInfo.status} - {props.characterInfo.species}
      </p>
      <p>Origin: {props.characterInfo.origin.name}</p>
    </React.Fragment>
  );
}

export default Card;
