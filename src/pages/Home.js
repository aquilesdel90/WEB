import { useState } from 'react';

export default function Home() {
  return (
    <div className="relative w-[100%] h-[100%] sm:h-[100vh] flex justify-center items-center">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_01.jpg"
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <div className="flex justify-center items-center flex-col text-center text-white z-10">
        <img
          src="https://gunnyvideos.s3.amazonaws.com/logo.png"
          alt="logo"
          className="sm:w-72 w-48 mx-auto"
        />

        <div className="sm:mt-8 flex items-center justify-center gap-x-4">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Play Gunny
          </a>
        </div>
      </div>
    </div>
  );
}
