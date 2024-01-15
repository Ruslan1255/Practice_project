import React from "react";
import Card from "../../components/card/card.jsx";
import "./main.css";

const main = () => {
  const Cars = [
    {
      title: "BMW",
      price: 25000,
      id: 1,
    },
    {
      title: "Mercedes-Benz",
      price: 40000,
      id: 2,
    },
    {
      title: "Hundai",
      price: 20000,
      id: 3,
    },
    {
      title: "Audi",
      price: 30000,
      id: 4,
    },
    {
      title: "Kia",
      price: 50000,
      id: 5,
    },
  ];

  return (
    <div className="main_box">
      {Cars.map((props) => (
        <Card key={props.id} title={props.title} price={props.price} />
      ))}
    </div>
  );
};

export default main;
