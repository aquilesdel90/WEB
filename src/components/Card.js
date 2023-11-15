import React, { useState, useEffect } from 'react';
import blaze from '../assets/cartas/Blaze.png';
import bolty from '../assets/cartas/Bolty.png';
import fuzzy from '../assets/cartas/Fuzzy.png';
import rockie from '../assets/cartas/Rockie.png';
import taily from '../assets/cartas/Rockie.png';
import { Box, Flex, SimpleGrid, useMediaQuery } from '@chakra-ui/react';

import '../assets/styles/Inugis.scss';

const cardsData = [
  { id: 1, image: blaze, title: 'Carta 1' },
  { id: 2, image: bolty, title: 'Carta 2' },
  { id: 3, image: fuzzy, title: 'Carta 3' },
  { id: 4, image: rockie, title: 'Carta 4' },
  { id: 5, image: taily, title: 'Carta 5' },
  // Agrega más cartas aquí
];

const Inugis = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const handleScroll = () => {
      const cardsSection = document.getElementById('cards-section');
      if (cardsSection) {
        const sectionTop = cardsSection.getBoundingClientRect().top;
        const sectionBottom = cardsSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight && sectionBottom >= 0) {
          // Filtra las cartas visibles en función de su posición
          const newVisibleCards = cardsData.filter((_, index) => {
            const cardTop = windowHeight * 0.3 * index; // Ajusta esto para cambiar la posición de activación
            const cardBottom = windowHeight * 0.3 * (index + 1);
            return sectionTop <= cardBottom && sectionBottom >= cardTop;
          });

          setVisibleCards(newVisibleCards);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Flex h="100vh" justify="space-around" align="center" id="cards-section">
        <>
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              className={` ${visibleCards.includes(card) ? 'enter' : 'exit'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <img
                src={card.image}
                alt={card.title}
                className={`card ${card.image}`}
              />
            </div>
          ))}
        </>
      </Flex>
    </>
  );
};

export default Inugis;
