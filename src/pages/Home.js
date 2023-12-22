import { useState } from 'react';

import { FaWindows, FaApple } from 'react-icons/fa';
import Leaderboard from '../components/Leaderboard';

export default function Home() {
  return (
    <div className="relative w-[100%] h-[100%] sm:h-[100vh] flex justify-center items-center flex-col">
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

        <div className="sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://link.gunnygames.com/Windows"
            target="_blank"
            rel="noreferrer"
          >
            <button
              id="downloadBtn"
              value="download"
              className="border border-black flex justify-center items-center rounded-md bg-[#5E31B8] px-3 py-2 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#6b3fc5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <FaWindows className="text-xl" />
              <span className="ml-2">Download for Windows</span>
            </button>
          </a>
          <a
            href="https://mygunnypublictestbucket.s3.amazonaws.com/Gunny_v0.2.0+MAC.zip"
            target="_blank"
            rel="noreferrer"
          >
            <button
              id="downloadBtn"
              value="download"
              className="border border-black mt-4 sm:mt-0 flex justify-center items-center rounded-md bg-[#5E31B8] px-3 py-2 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#6b3fc5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <FaApple className="text-xl" />
              <span className="ml-2">Download for Mac</span>
            </button>
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://summit.gunnygames.com/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Join Us (Opt-In)!
          </a>
          <button><img src="https://perawallet.s3-eu-west-3.amazonaws.com/media-kit/pera-logomark-black.svg" height="20"/>Opt-in</button>
        </div>
      </div>
    </div>
  );
}
