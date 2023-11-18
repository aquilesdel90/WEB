import React, { useState } from 'react';

import { Fade } from 'react-awesome-reveal';

const imageOptions = [
  {
    id: 'fuzzy',
    image: 'https://gunnyvideos.s3.amazonaws.com/fuzzy.png',
    icon: 'https://gunnyvideos.s3.amazonaws.com/icon-air.png',
    name: 'Fuzzy',
    lore: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  },
  {
    id: 'rookie',
    image: 'https://gunnyvideos.s3.amazonaws.com/rookie.png',
    icon: 'https://gunnyvideos.s3.amazonaws.com/icon-othila.png',
    name: 'Rookie',
    lore: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  },
  {
    id: 'taily',
    image: 'https://gunnyvideos.s3.amazonaws.com/taily.png',
    icon: 'https://gunnyvideos.s3.amazonaws.com/icon-peth.png',
    name: 'Taily',
    lore: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  },
  {
    id: 'volty',
    image: 'https://gunnyvideos.s3.amazonaws.com/volty.png',
    icon: 'https://gunnyvideos.s3.amazonaws.com/icon-thurizas.png',
    name: 'Volty',
    lore: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  },
  {
    id: 'blaze',
    image: 'https://gunnyvideos.s3.amazonaws.com/blaze.png',
    icon: 'https://gunnyvideos.s3.amazonaws.com/icon-ratio.png',
    name: 'Blaze',
    lore: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  },
];

const Inugis = () => {
  const [selectedImage, setSelectedImage] = useState('fuzzy'); // Establece "fuzzy" como la imagen por defecto

  const handleImageClick = imageId => {
    setSelectedImage(imageId);
  };

  return (
    <div className="relative h-[100vh] flex justify-center items-center">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_04.jpg"
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <div className="h-[80%] flex justify-between flex-col text-center text-white z-10">
        <h1 className="text-5xl uppercase font-bold mb-4 md:mb-8 text-yellow-500">
          ·Inugis·
        </h1>
        <p className="text-lg md:text-md sm:text-sm leading-6 md:leading-8 mb-4 md:mb-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>

        <div className="flex items-center justify-center gap-4">
          {imageOptions.map(option => (
            <div className="flex justify-center items-center flex-col">
              <img
                key={option.id}
                src={option.icon}
                alt={`${option.id}Icon`}
                className={`w-14 sm:w-28 cursor-pointer transition-opacity duration-500 ease-in-out ${
                  selectedImage === option.id
                    ? 'border-4 border-yellow-500 opacity-100 z-10 rounded-full'
                    : 'opacity-75'
                }`}
                onClick={() => handleImageClick(option.id)}
              />
              <p className="text-white uppercase text-sm sm:text-xl ">
                {option.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          {imageOptions.map(
            option =>
              selectedImage === option.id && (
                <Fade key={option.id} trigger={true}>
                  <div className="flex">
                    <div className="flex flex-col justify-end w-96">
                      <p className="text-white text-sm p-2">{option.lore}</p>
                    </div>
                    <div className="flex justify-start items-center">
                      <img
                        key={option.id}
                        src={option.image}
                        alt={option.id}
                        className="sm:w-[50%] w-[100%]"
                      />
                    </div>
                  </div>
                </Fade>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Inugis;
