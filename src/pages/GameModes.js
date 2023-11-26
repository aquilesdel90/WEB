import React from 'react';

import GameMode1 from '../assets/gamemode1.jpg';
import GameMode2 from '../assets/gamemode2.jpg';

const GameModes = () => {
  return (
    <div className="relative h-full xl:h-[100%] w-[100%] flex justify-center items-center">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_06.png"
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <div className="h-[80%] flex justify-between flex-col text-center text-white z-10">
        <h2 className="mb-4 text-5xl uppercase font-bold text-yellow-500">
          ·Game Modes·
        </h2>
        <div className="flex items-center justify-center mb-4 text-lg md:text-md sm:text-sm ">
          <p className="mb-4 text-lg md:text-md sm:text-sm w-[75%]">
            Embark on thrilling adventures in Gunny! Team up with friends for
            PVE battles or dive straight into intense PVP matchups, competing
            against other users online in epic clashes. Choose your path and
            conquer the battlefield with strategic prowess and camaraderie!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="card">
            <div
              className="rounded-lg sm:h-[300px] md:h-[390px] w-full sm:w-[250px] md:w-[300px] p-3"
              style={{
                backgroundImage: `url(${GameMode1})`,
                backgroundSize: 'cover',
              }}
            ></div>
          </div>

          <div className="card">
            <div
              className="rounded-lg sm:h-[300px] md:h-[390px] w-full sm:w-[250px] md:w-[300px] p-3"
              style={{
                backgroundImage: `url(${GameMode2})`,
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModes;
