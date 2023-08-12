import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import gunnyLogo from "../assets/imgs/gunny-logo.png";

function Footer() {
  const links = [
    { text: "HOME", url: "/" },
    { text: "WEAPONS", url: "/" },
    { text: "CHAMPIONS", url: "/" },
    { text: "TEAM", url: "/" },
    { text: "PETS", url: "/" },
  ];
  return (
    <footer className="bg-black text-white py-12 bottom-0 left-0 w-full">
      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <img src={gunnyLogo} alt="Gunny Logo" className="h-20" />
            <div className="flex justify-center mt-8">
              <a href="#" target="_blank">
                <FaTelegram className="text-white hover:text-amber transition-colors duration-300 text-4xl mx-2" />
              </a>
              <a href="#" target="_blank">
                <FaTwitter className="text-white hover:text-amber transition-colors duration-300 text-4xl mx-2" />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:items-start">
            <h4 className="font-semibold text-lg mb-2 text-amber">
              Quick Links
            </h4>
            <ul className="list-none">
              {links.map((link, index) => (
                <li key={index} className="mb-1">
                  <a
                    href={link.url}
                    className="text-white hover:text-amber transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-amber">
                Join the Waiting List
              </h4>
              <div className="max-w-md">
                <p className="text-white mb-4">
                  Subscribe to gain access to the Gunny Secret Society and
                  receive a unique reward!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 sm:ml-2">
                <input
                  type="email"
                  className="bg-gray-amber text-black py-2 px-3 rounded-md w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-grape"
                  placeholder="Enter your email"
                />
                <button className="bg-grape hover:bg-amber hover:text-grape text-amber py-2 px-4 rounded-md transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex flex-wrap space-x-4">
            <a
              href="/"
              className="text-white hover:text-grape transition-colors duration-300"
            >
              Terms of Use
            </a>
            <a
              href="/"
              className="text-white hover:text-grape transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="text-white hover:text-grape transition-colors duration-300"
            >
              Whitepaper
            </a>
          </div>
        </div>

        <p className="text-white mt-4 text-center">© 2023 Gunny Games.</p>
      </div>
    </footer>
  );
}

export default Footer;
