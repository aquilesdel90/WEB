import React, { useState, useEffect } from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import gunnyLogo from "../assets/imgs/gunny-logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { text: "HOME", to: "home" },
    { text: "NARRATIVE", to: "narrative" },
    { text: "INUGIS", to: "inugis" },
    { text: "CHAMPIONS", to: "champions" },
    { text: "ROADMAP", to: "roadmap" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 py-2 transition-all duration-300 ${
        isScrolled
          ? "bg-opacity-90 backdrop-filter backdrop-blur-lg "
          : "bg-opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between">
          <div className="flex">
            <img src={gunnyLogo} alt="Gunny Logo" className="h-12" />
          </div>

          <ul className="hidden sm:flex space-x-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  activeClass="active"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer text-white hover:text-amber ${
                    isScrolled ? "text-black" : "text-white"
                  } transition-colors duration-300`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex ml-4">
            <a href="#" target="_blank">
              <FaTelegram
                className={`text-white hover:text-amber transition-colors duration-300 text-3xl mx-2 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              />
            </a>
            <a href="#" target="_blank">
              <FaTwitter
                className={`text-white hover:text-amber transition-colors duration-300 text-3xl mx-2 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
