import React from "react";
import "./card.css";
import Button from "../../components/button/button.jsx";

const card = (props) => {
  return (
    <div>
      <div className="card">
        <h3>{props.title}</h3>
        <p>{props.price}$</p>

        <Button />
      </div>
    </div>
  );
};

export default card;
