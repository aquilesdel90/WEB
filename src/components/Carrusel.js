import React from "react";
import Flicking from "@egjs/react-flicking";
import { AutoPlay, Perspective } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import pagina1 from "../assets/carrusel/pagina_1.jpg";
import pagina2 from "../assets/carrusel/pagina_2.jpg";
import pagina3 from "../assets/carrusel/pagina_3.jpg";
import narrative from "../assets/imgs/narrative.png";

const Carrusel = () => {
  const plugins = [
    new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: false }),
    new Perspective({ rotate: 0.5 }),
  ];
  const flickingOptions = {
    circular: true,
  };

  return (
    <>
      <Flicking
        className="flicking"
        viewportTag="div"
        cameraTag="div"
        plugins={plugins}
        {...flickingOptions}
      >
        {/* Agrega tus slides dentro del componente Flicking */}
        <div className="flicking-panel flex items-center justify-center w-full">
          <img src={pagina1} alt="pagina1" className="h-full max-w-full" />
        </div>
        <div className="flicking-panel flex items-center justify-center w-full">
          <img src={pagina2} alt="pagina2" className="h-full max-w-full" />
        </div>
        <div className="flicking-panel flex items-center justify-center w-full">
          <img src={pagina3} alt="pagina3" className="h-full max-w-full" />
        </div>
      </Flicking>
    </>
  );
};

export default Carrusel;
