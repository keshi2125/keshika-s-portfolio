import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Skills', link: '#skills' },
    { id: 3, name: 'Project', link: '#project' },
    { id: 4, name: 'Intern', link: '#intern' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 text-white bg-transparent scroll-smooth" data-aos="fade-down">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">

        {/* LOGO */}
        <a href="#home" className="text-4xl font-bold italic text-white">Portfolio</a>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX className="w-8 h-8 text-white" /> : <FiMenu className="w-8 h-8 text-white" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              onClick={handleNavClick}
              className="relative group text-white text-lg inline-block"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16 z-20">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-lg text-white hover:text-purple-300 transition duration-200"
              onClick={handleNavClick}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
