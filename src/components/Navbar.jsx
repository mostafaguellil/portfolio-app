import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="py-2">
        <div className="bg-white mx-auto max-w-screen-sm flex items-center justify-between px-3 rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-md">
          {/* Logo/Title */}
          <a href="#" className="text-base font-medium cursor-pointer">
            Mostafa GUELLIL
          </a>

          {/* Desktop Navigation List */}
          <ul className="hidden md:flex font-medium space-x-4 items-center">
            <li>
              <a href="#about" className="cursor-pointer text-sm">About Me</a>
            </li>
            <li>
              <a href="#qualifications" className="cursor-pointer text-sm">Qualifications</a>
            </li>
            <li>
              <a href="#experience" className="cursor-pointer text-sm">Experience</a>
            </li>
            <a
              href="#contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-slate-700 bg-[#0f172a]">
                Contact
              </button>
            </a>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none text-black"
          >
            {/* Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="bg-white mx-auto max-w-screen-sm mt-2 rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-md">
            <ul className="flex flex-col font-medium space-y-2 py-4 px-6">
              <li>
                <a href="#about" className="cursor-pointer text-sm block">About Me</a>
              </li>
              <li>
                <a href="#qualifications" className="cursor-pointer text-sm block">Qualifications</a>
              </li>
              <li>
                <a href="#experience" className="cursor-pointer text-sm block">Experience</a>
              </li>
              <a
                href="https://www.linkedin.com/in/mostafaguellil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-slate-700 bg-[#0f172a]">
                  LinkedIn
                </button>
              </a>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
