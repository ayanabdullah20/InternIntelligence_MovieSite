import React from 'react';
import yourimage from '../assets/black-white-clapper-board-icon.jpg';

function Navbar() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-lg sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left Section: Logo & Title */}
        <div className="flex items-center space-x-4">
          <img className="w-12 h-12 rounded-lg border-2 border-white shadow-md" src={yourimage} alt="Clapper Board Icon" />
          <h2 className="text-3xl font-bold tracking-wide text-white font-montserrat">
            Ayan's CD Center
          </h2>
        </div>

        {/* Right Section: Navigation Buttons (With Scroll Functionality) */}
        <div className="hidden md:flex space-x-4">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ].map((item, index) => (
            <button 
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="px-6 py-2 text-lg font-semibold text-white bg-gray-900 border-2 border-transparent 
              hover:border-white hover:bg-gray-800 transition-all duration-300 shadow-md"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
