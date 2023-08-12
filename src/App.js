import React, { useEffect, useState } from "react";
import { Element, Events, scrollSpy } from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SectionFour from "./pages/SectionFour";
import SectionInugis from "./pages/SectionInugis";
import SectionNarrative from "./pages/SectionTwo";
import Loading from "./components/Loading";
import Roadmap from "./components/Roadmap";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading (you can replace this with actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
      scrollSpy.update();
    }, 2000); // Change the delay time as needed
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <>
      <Navbar />

      <Element name="section1" className="section" spy={true} offset={-50}>
        <Home />
      </Element>
      <Element name="section2" className="section" spy={true} offset={-50}>
        <SectionNarrative />
      </Element>
      <Element name="section3" className="section" spy={true} offset={-50}>
        <SectionInugis />
      </Element>
      <Element name="section4" className="section" spy={true} offset={-50}>
        <SectionFour />
      </Element>
      <Element name="section5" className="section" spy={true} offset={-50}>
        <Roadmap />
      </Element>

      <Footer />
    </>
  );
};

export default App;
