import React from 'react';

import GameMode1 from '../assets/gamemode1.png';
import GameMode2 from '../assets/gamemode2.png';

const GameModes = () => {
  return (
    <div className="relative w-75 sm:w[100%] h-[100%] sm:h-[150vh] flex justify-center items-center">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_06.png"
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <div className="h-[80%] flex justify-between flex-col text-center text-white z-10">
        <h2 className="text-yellow-500 text-5xl uppercase font-bold text-center">
          ·Game Modes·
        </h2>
        <div className="p-4">
          <p className="text-white text-lg md:text-2xl text-center">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
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
            >
              <div className="p-4">
                <h3 className="text-yellow-500 text-lg sm:text-xl text-center md:text-start font-bold uppercase">
                  Game Mode 1
                </h3>
              </div>
            </div>
          </div>

          <div className="card">
            <div
              className="rounded-lg sm:h-[300px] md:h-[390px] w-full sm:w-[250px] md:w-[300px] p-3"
              style={{
                backgroundImage: `url(${GameMode2})`,
                backgroundSize: 'cover',
              }}
            >
              <div className="p-4">
                <h3 className="text-yellow-500 text-lg sm:text-xl text-center md:text-start font-bold uppercase">
                  Game Mode 2
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModes;
