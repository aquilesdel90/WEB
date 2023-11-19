import React, { useEffect } from 'react';

import { Fade } from 'react-awesome-reveal';

const WhatIs = () => {
  const cardData = [
    {
      id: 1,
      image: 'https://gunnyvideos.s3.amazonaws.com/card1.png',
      title: 'Card 1',
      inugi: 'https://gunnyvideos.s3.amazonaws.com/inugibox-1.png',
      description:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    },
    {
      id: 2,
      image: 'https://gunnyvideos.s3.amazonaws.com/card2.png',
      title: 'Card 2',
      inugi: 'https://gunnyvideos.s3.amazonaws.com/inugibox-2.png',
      description:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    },
    {
      id: 3,
      image: 'https://gunnyvideos.s3.amazonaws.com/card3.png',
      title: 'Card 3',
      inugi: 'https://gunnyvideos.s3.amazonaws.com/inugibox-3.png',
      description:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    },
    {
      id: 4,
      image: 'https://gunnyvideos.s3.amazonaws.com/card4.png',
      title: 'Card 4',
      inugi: 'https://gunnyvideos.s3.amazonaws.com/inugibox-4.png',
      description:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    },
  ];

  const handleScroll = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        card.classList.add('fade-in'); // Esto podría no ser necesario
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-75 sm:w[100%] h-[100%] sm:h-[150vh] flex justify-center items-center flex-col p-2">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_02.jpg"
        alt="bg home"
        className="absolute inset-0 w-full h-full"
      />

      <div className="h-full xl:h-[150vh] flex justify-center items-center flex-col text-center text-white z-10">
        <h1 className="text-xl sm:text-5xl uppercase font-bold mb-4 md:mb-8 text-yellow-500">
          ·¿Qué es gunny?·
        </h1>
        <p className="text-sm sm:text-xl leading-6 md:leading-8 mb-4 md:mb-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua...
        </p>

        <div className="w-100 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 z-10 p-2">
          <Fade cascade damping={0.2}>
            {cardData.map(card => (
              <div key={card.id}>
                <div key={card.id} className="h-[100%] card relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="rounded-lg w-full h-[100%] sm:h-[300px] object-cover"
                  />
                  <div className="flex justify-start items-center h-full flex-col absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-yellow-500 uppercase text-sm sm:text-lg font-bold">
                      {card.title}
                    </h3>
                    <p className="text-white text-sm">{card.description}</p>
                  </div>

                  <img
                    src={card.inugi}
                    alt={`Inugi ${card.title}`}
                    className="absolute bottom-[-70px] hidden sm:inline-block	 left-0 w-[90%] h-[150px]"
                  />
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
