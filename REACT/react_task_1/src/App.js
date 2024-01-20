import React from "react";
import "./App.css";
import Card from "./components/Card/Card.jsx";
import { data } from "./components/Data/Data.jsx";

function App() {
  return (
    <>
      <div className="main">
        <h2>Suggested for you</h2>
        <div className="main_cards">
          {data.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              teacherName={item.teacherName}
              view={item.view}
              popularity={item.popularity}
              popularityRank={item.popularityRank}
              price={item.price} 
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
