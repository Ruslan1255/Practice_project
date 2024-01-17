import React from "react";
import { Cars } from "../../data/data";
import Card from "../../components/card/card.jsx";
import "./main.css";

const main = () => {
  return (
    <div className="main_box">
      {Cars.map((props) => (
        <Card key={props.id} title={props.title} price={props.price} />
      ))}
    </div>
  );
};

export default main;
