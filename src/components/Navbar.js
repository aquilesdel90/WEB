import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { RiTelegramLine, RiTwitterXFill } from 'react-icons/ri';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Dialog } from '@headlessui/react';

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'What is Gunny?', href: 'whatis' },
  { name: 'Factions', href: 'factions' },
  { name: 'Inugis', href: 'inugis' },
  { name: 'Customization', href: 'skins' },
  { name: 'Roadmap', href: 'roadmap' },
  { name: 'Leaderboard', href: 'ranked' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`w-full fixed z-20 flex items-center justify-center p-6 lg:px-8 transition-all duration-500 ${
        scrolling
          ? 'bg-[#5E31B8] bg-opacity-90'
          : 'bg-transparent bg-opacity-100'
      }`}
      aria-label="Global"
    >
      <div className="flex lg:flex-1"></div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map(item => (
          <ScrollLink
            key={item.name}
            to={item.href}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-yellow-500 border-b-2 border-yellow-500" // Aplica la clase text-yellow-500 cuando está activa
            className="text-sm font-semibold leading-6 text-white cursor-pointer"
          >
            {item.name}
          </ScrollLink>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-center gap-4">
        <a href="https://x.com/Gunny_es" className="text-sm font-semibold leading-6 text-gray-900">
          <span className="text-xl text-white">
            <RiTwitterXFill />
          </span>
        </a>
        <a href="https://t.me/gunnygames" className="text-sm font-semibold leading-6 text-gray-900">
          <span className="text-xl text-white">
            <RiTelegramLine />
          </span>
        </a>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#5E31B8] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5" onClick={scrollToTop}>
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://gunnyvideos.s3.amazonaws.com/logo.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70} // Puedes ajustar este valor según el diseño de tu Navbar
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-yellow-500 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
};

export default Navbar;
