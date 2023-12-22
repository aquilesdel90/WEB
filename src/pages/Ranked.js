import React from 'react';
import Leaderboard from '../components/Leaderboard';
import GoraTournamentTitle from '../assets/gemas/webGoraTournament.png';

const Ranked = () => {
  return (
    <div className="relative h-[100vh] flex justify-center items-center">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_05.jpg"
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <div className="h-[80%] flex justify-center flex-col text-center text-white z-10">
        <h2 className="mb-4 text-5xl uppercase font-bold text-[#5930B7]">
          ·Rank PvP·
        </h2>
        <img
          src={GoraTournamentTitle}
          alt="Gora Tournament Title"
        />
        <Leaderboard />
      </div>
    </div>
  );
};

export default Ranked;
