import React from 'react';

import Skin from '../assets/skin.png';

const Skins = () => {
  return (
    <div className="relative h-[100vh] flex justify-center items-center">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_05.jpg"
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-center z-10">
        <div className="sm:flex-1 sm:flex-col flex justify-end items-center max-w-6xl mx-auto space-y-4 z-10">
          <div className="flex flex-col items-center sm:items-end">
            <h2 className="text-indigo-600 text-3xl font-bold uppercase">
              Skins
            </h2>
            <div className="flex items-center sm:items-end w-[100%] sm:w-[70%]">
              <p className="container text-black text-xl text-center sm:text-end">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                See More
              </a>
            </div>
          </div>
        </div>
        <div className="sm:flex-1 sm:flex-col flex justify-start items-start flex-col max-w-6xl mx-auto space-y-4 ml-20 z-10">
          <img src={Skin} className="w-96" alt="img skin" />
        </div>
      </div>
    </div>
  );
};

export default Skins;
