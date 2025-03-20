import React from 'react';

function Contact() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-6 tracking-wide">Contact Us</h2>
        <p className="text-lg text-gray-200 mb-8">
          Have questions or want to get in touch? Fill out the form below and we'll respond as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 border-2 border-gray-500 
              bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 border-2 border-gray-500 
              bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="mb-4">
            <textarea 
              rows="4" 
              placeholder="Your Message" 
              className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 border-2 border-gray-500 
              bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600
            hover:from-purple-700 hover:to-blue-700 transition-all duration-300 rounded-lg shadow-md active:scale-95"
          >
            Send Message
          </button>
        </form>
        
      </div>
    </section>
  );
}

export default Contact;
