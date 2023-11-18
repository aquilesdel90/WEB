import React, { useState, useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import AirIcon from '../assets/air.png';
import OthilaIcon from '../assets/othila.png';
import PethIcon from '../assets/peth.png';
import RatioIcon from '../assets/ratio.png';
import ThurizasIcon from '../assets/thurizas.png';

const imageOptions = [
  {
    id: 'air',
    image: 'https://gunnyvideos.s3.amazonaws.com/char-icon-air.png',
    icon: AirIcon,
    name: 'Air',
    lore: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  },
  {
    id: 'othila',
    image: 'https://gunnyvideos.s3.amazonaws.com/char-icon-othila.png',
    icon: OthilaIcon,
    name: 'Othila',
    lore: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  },
  {
    id: 'peth',
    image: 'https://gunnyvideos.s3.amazonaws.com/char-icon-peth.png',
    icon: PethIcon,
    name: 'Peth',
    lore: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  },
  {
    id: 'thurizas',
    image: 'https://gunnyvideos.s3.amazonaws.com/char-icon-thurizas.png',
    icon: ThurizasIcon,
    name: 'Thurizas',
    lore: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  },
  {
    id: 'ratio',
    image: 'https://gunnyvideos.s3.amazonaws.com/char-icon-ratio.png',
    icon: RatioIcon,
    name: 'Ratio',
    lore: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  },
];

const Factions = () => {
  const [selectedImage, setSelectedImage] = useState('air');
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);
  const loadedImages = useRef({}); // Almacena las imágenes ya cargadas

  useEffect(() => {
    setImageLoaded(false); // Resetear el estado de carga al cambiar la imagen

    const imageUrl = getImageUrl(selectedImage);

    // Verificar si la imagen ya está cargada
    if (loadedImages.current[imageUrl]) {
      setImageLoaded(true);
    } else {
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        setImageLoaded(true);
        // Almacenar la imagen cargada para evitar descargas adicionales
        loadedImages.current[imageUrl] = true;
      };
    }
  }, [selectedImage]);

  const handleImageClick = imageId => {
    setSelectedImage(imageId);
  };

  const getImageUrl = imageId => {
    const selectedOption = imageOptions.find(option => option.id === imageId);
    return selectedOption ? selectedOption.image : '';
  };

  return (
    <div className="relative h-[100%] sm:h-[100vh] flex justify-center items-center">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_03.jpg"
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <div className="p-4 flex justify-between flex-col text-center text-white z-10">
        <div className="sm:relative md:top-[105px] xl:top-[145px] lg:top-[135px] sm:top-[100px] w-[100%] h-[50%] sm:h-[80vh] flex justify-center items-center flex-col">
          <div className="sm:mb-4">
            <h1 className="text-5xl uppercase font-bold  text-yellow-500">
              ·Factions·
            </h1>
          </div>
          <div className="w-[70%] sm:mb-4">
            <p className="text-lg md:text-md sm:text-sm ">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
              Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
              veniam occaecat fugiat aliqua.
            </p>
          </div>
          {imageOptions.map(
            option =>
              selectedImage === option.id && (
                <div className="flex flex-row justify-between" key={option.id}>
                  <Fade key={option.id} trigger={true}>
                    <div key={option.id} className="flex">
                      <div className="flex justify-center items-center">
                        <img
                          ref={imgRef}
                          src={getImageUrl(selectedImage)}
                          alt={selectedImage}
                          className={`sm:w-[85%] w-[100%] ${
                            imageLoaded ? '' : 'hidden'
                          } transition-opacity duration-500 ease-in-out`}
                        />
                      </div>
                    </div>
                  </Fade>
                </div>
              )
          )}
        </div>

        <div className="relative top-[30px] z-[10] w-[100%] h-[50%] flex items-center justify-center gap-4">
          {imageOptions.map(option => (
            <div
              className="w-100 flex justify-center items-center flex-col"
              key={option.id}
            >
              <div key={option.id}>
                <img
                  src={option.icon}
                  alt={`${option.id}Icon`}
                  className={`w-14 sm:w-20 h-14 sm:h-20 cursor-pointer transition-opacity duration-500 ease-in-out ${
                    selectedImage === option.id
                      ? 'border-4 border-yellow-500 opacity-100 z-10 rounded-full'
                      : 'opacity-75'
                  }`}
                  onClick={() => handleImageClick(option.id)}
                />
              </div>
              <p className="text-white uppercase text-3sm sm:text-lg">
                {option.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Factions;
