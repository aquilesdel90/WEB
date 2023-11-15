import { Fade } from "react-reveal";
import { useState } from "react";
import Logo from "../assets/gunnylogo.png";
import BackgroundHome from "../assets/background_01.jpg";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // This function will be triggered when the component mounts
  const handleVisibility = () => {
    setIsVisible(true);
  };

  return (
    <div className="relative h-[100vh] flex justify-center items-center">
      <img
        src={BackgroundHome}
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <Fade when={isVisible} duration={1000}>
        <div
          className="text-center text-white z-10"
          onLoad={handleVisibility} // Trigger the visibility change when the component mounts
        >
          <img src={Logo} alt="logo" className="sm:w-72 w-48 mx-auto" />
          <p className="mt-4 text-lg md:text-md sm:text-sm leading-6 md:leading-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
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
      </Fade>
    </div>
  );
}
