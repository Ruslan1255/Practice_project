import React from "react";
import "./card.css";

export interface Product {
  id?: number;
  brand: string;
}
const Card = ({ brand }: Product) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <h3>{brand}</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
