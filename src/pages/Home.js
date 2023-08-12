import React from "react";
import "../assets/styles/Home.css";

import gunny_logo from "../assets/imgs/gunny-logo.png";

const Home = () => {
  return (
    <div className="section-home">
      {/* Imagen de escritorio */}
      <div className="desktop-image">
        {/* Logo en el centro */}
        <img src={gunny_logo} alt="Gunny Logo" className="center-logo" />
      </div>

      {/* Imagen en móviles */}
      <div className="mobile-image ">
        {/* Logo en el centro */}
        <img src={gunny_logo} alt="Gunny Logo" className="center-logo" />
      </div>
    </div>
  );
};

export default Home;
