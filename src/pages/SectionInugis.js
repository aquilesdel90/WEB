import React from "react";
import GunnyCard from "../components/GunnyCard";

import "../assets/styles/SectionInugis.css";

const SectionInugis = () => {
  return (
    <div className="gradient">
      <h1 className="text-white font-bold text-4xl mt-16">Inugis</h1>
      <GunnyCard />
      <a
        href="https://drops.randgallery.com/drops/j21LzoD4j1kwMnWCceaH"
        target="_blank"
        rel="noreferrer"
      >
        <button className="button-cta">
          <span className="text">CLAIM YOUR NFT !</span>
        </button>
      </a>
    </div>
  );
};

export default SectionInugis;
