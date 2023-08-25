import React, { useEffect, useState } from "react";
import { scrollSpy } from "react-scroll";
import Navbar from "./components/Navbar";

import Loading from "./components/Loading";

import Sections from "./pages/Sections";
import Footer from "./components/Footer";

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
      <Sections />
      <Footer />
    </>
  );
};

export default App;
