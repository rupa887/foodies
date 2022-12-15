import React, { useState } from "react";
import "./styles.css";

const foodDB = {
  SouthIndian: [
    {
      name: " Dosa",
      rating: "5/5"
    },
    {
      name: "Vada",
      rating: "4.3/5"
    },
    {
      name: "Pongal",
      rating: "4/5"
    },
    {
      name: "Idli sambhar",
      rating: "4.2/5"
    }
  ],
  Malyalam: [
    {
      name: "Idiyappam With Curry ",
      rating: "4.4/5"
    },
    {
      name: "Ela Sadhya",
      rating: "4/5"
    },
    {
      name: "Parippu Curry",
      rating: "3.7/5"
    },
    {
      name: "Nadan Kozhi Varuthathu",
      rating: "3.5/5"
    }
  ],
  NorthIndian: [
    {
      name: "Chole Bhatoorey",
      rating: "5/5"
    },
    {
      name: "Rajma-chawal",
      rating: "4.3/5"
    },
    {
      name: "Kadhi-chawal",
      rating: "4/5"
    },
    {
      name: "Aaloo samosa chat",
      rating: "4.9/5"
    },
    {
      name: "Rabdi Falooda",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedCuisine, setSelectedCuisine] = useState("SouthIndian");

  function onClickHandler(cuisine) {
    setSelectedCuisine(cuisine);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="food-items">
          🥘
        </span>{" "}
        FOODIES{" "}
      </h1>
      <small>Recomended Some Foods (YUMMY)</small>
      <div>
        {Object.keys(foodDB).map((cuisine) => {
          return (
            <button
              key={cuisine}
              onClick={() => onClickHandler(cuisine)}
              className="btn"
            >
              {cuisine}
            </button>
          );
        })}
      </div>
      <hr />

      <div className="container">
        <ul>
          {foodDB[selectedCuisine].map((cuisine) => {
            return (
              <li key={cuisine.name}>
                <div className="lrg">{cuisine.name}</div>
                <div className="sml">{cuisine.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
