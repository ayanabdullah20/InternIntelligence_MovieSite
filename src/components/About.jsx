import React from 'react';
import yourImage from '../assets/456.jpg'

function About() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-wide">About Us</h2>
        <p className="text-lg text-gray-200 mb-6">
          Welcome to <span className="font-bold">Ayan's CD Center</span>, your go-to destination for movies, music, and entertainment. 
          We provide a vast collection of CDs, DVDs, and digital content to keep you entertained.
        </p>
        <div className="flex justify-center mb-6">
          <img 
            src={yourImage} 
            alt="About Us"
            className="rounded-lg shadow-md w-full max-w-lg border-2 border-white"
          />
        </div>
        <p className="text-lg text-gray-200 mb-8">
          Established with a passion for entertainment, we strive to bring you the best quality CDs, movies, and digital media. 
          Our mission is to keep the magic of physical media alive while embracing the digital future.
        </p>
        <button 
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600
          hover:from-purple-700 hover:to-blue-700 transition-all duration-300 rounded-lg shadow-md active:scale-95"
        >
          Learn More
        </button>
        
      </div>
    </section>
  );
}

export default About;
