import React from "react";
import Card from "react-animated-3d-card";
import inugi_1 from "../assets/Cartas/Blaze.png";
import inugi_2 from "../assets/Cartas/Blaze.png";

const cardsData = [
  {
    id: 1,
    backgroundImage: inugi_1,
    width: "250px",
    height: "335px",
  },
  {
    id: 2,
    backgroundImage: inugi_2,
    width: "250px",
    height: "335px",
  },
  // Agrega más objetos de carta según tus necesidades
];

const CardAnimated = ({ card }) => {
  return (
    <Card
      style={{
        backgroundImage: `url(${card.backgroundImage})`,
        width: card.width,
        height: card.height,
        cursor: "pointer",
      }}
      onClick={() => console.log(`Card ${card.id} clicked`)}
    />
  );
};

export default CardAnimated;
