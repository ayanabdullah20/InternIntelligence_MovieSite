import React from 'react';

function SearchBar({ searchMovie, setSearchMovie, fetchMovieData }) {
    return (
        <div className="flex flex-col items-center py-6">
            {/* Search Bar */}
            <div className="flex w-full max-w-lg shadow-lg">
                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Search here..."
                    value={searchMovie}
                    onChange={(e) => setSearchMovie(e.target.value)}  // ✅ Fixed syntax
                    className="flex-1 px-4 py-3 text-lg text-white placeholder-gray-300 border-2 border-gray-400 bg-gray-800 rounded-l-lg 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />

                {/* Search Button */}
                <button
                    onClick={fetchMovieData}
                    className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600
                    hover:from-purple-700 hover:to-blue-700 transition-all duration-300 rounded-r-lg shadow-md
                    active:scale-95"
                >
                    Search
                </button>
            </div>

            {/* Helper Text Below Search Bar */}
            <p className="mt-2 text-sm text-white opacity-80">
                Type a movie name and hit search!
            </p>
        </div>
    );
}

export default SearchBar;
