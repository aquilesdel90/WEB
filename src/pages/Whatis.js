import BackgroundHome from "../assets/background_02.jpg";
import React, { useEffect } from "react";

import Card1 from "../assets/card1.png";
import Card2 from "../assets/card2.png";
import Card3 from "../assets/card3.png";
import Card4 from "../assets/card4.png";
import Inugi1 from "../assets/inugibox-1.png";
import Inugi2 from "../assets/inugibox-2.png";
import Inugi3 from "../assets/inugibox-3.png";
import Inugi4 from "../assets/inugibox-4.png";

import { Fade } from "react-awesome-reveal";

const WhatIs = () => {
  const cardData = [
    {
      id: 1,
      image: Card1,
      title: "Card 1",
      inugi: Inugi1,
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    },
    {
      id: 2,
      image: Card2,
      title: "Card 2",
      inugi: Inugi2,
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    },
    {
      id: 3,
      image: Card3,
      title: "Card 3",
      inugi: Inugi3,
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    },
    {
      id: 4,
      image: Card4,
      title: "Card 4",
      inugi: Inugi4,
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    },
  ];

  const handleScroll = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        card.classList.add("fade-in"); // Esto podría no ser necesario
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[100vh] flex justify-center items-center flex-col">
      <img
        src={BackgroundHome}
        alt="bg home"
        className="absolute inset-0 w-full h-full"
      />

      <div className="h-[20%] flex justify-between flex-col text-center text-white z-10">
        <h1 className="text-5xl uppercase font-bold mb-4 md:mb-8 text-yellow-500">
          ¿Qué es gunny?
        </h1>
        <p className="text-lg md:text-md sm:text-sm leading-6 md:leading-8 mb-4 md:mb-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua...
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 z-10 p-2">
        <Fade cascade damping={0.2}>
          {cardData.map((card) => (
            <div key={card.id}>
              <div key={card.id} className="card relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-lg w-full h-[300px] object-cover"
                />
                <div className="flex justify-start items-center h-full flex-col absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-yellow-500 uppercase text-lg font-bold">
                    {card.title}
                  </h3>
                  <p className="text-white text-sm">{card.description}</p>
                </div>

                <img
                  src={card.inugi}
                  alt={`Inugi ${card.title}`}
                  className="absolute bottom-[-70px] left-0 w-[90%] h-[150px]"
                />
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default WhatIs;
