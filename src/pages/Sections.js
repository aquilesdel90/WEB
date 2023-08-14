import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Home from "./Home";
import SectionNarrative from "./SectionNarrative";
import SectionInugis from "./SectionInugis";
import SectionChampions from "./SectionChampions";
import Roadmap from "../components/Roadmap";

const Sections = () => {
  // Configura scrollSpy para rastrear el scroll y activar el resaltado del enlace activo
  React.useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <Element id="home">
        <Home />
      </Element>
      <Element id="narrative">
        <SectionNarrative />
      </Element>
      <Element id="inugis">
        <SectionInugis />
      </Element>
      <Element id="champions">
        <SectionChampions />
      </Element>
      <Element id="roadmap">
        <Roadmap />
      </Element>
    </>
  );
};

export default Sections;
