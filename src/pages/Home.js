import { useState } from "react";

export default function Home() {
  return (
    <div className="relative h-[100vh] flex justify-center items-center">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_01.jpg"
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <div className="text-center text-white z-10">
        <img
          src="https://gunnyvideos.s3.amazonaws.com/logo.png"
          alt="logo"
          className="sm:w-72 w-48 mx-auto"
        />
        <p className="mt-4 text-lg md:text-md sm:text-sm leading-6 md:leading-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
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
