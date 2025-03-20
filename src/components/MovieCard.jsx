import React, { useRef } from 'react';

function MovieCard({ allMovieData, loading }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative px-6 py-10 bg-transparent">
      {loading ? (
        <div className='flex justify-center'>
          <img className='w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="Loading..." />
        </div>
      ) : (
        <>
          {/* Left Scroll Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 
              text-white p-3 rounded-full shadow-md hover:bg-black/70 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div ref={scrollRef} className="flex overflow-x-auto space-x-6 px-4 scroll-smooth scrollbar-hide">
            {allMovieData.map((item, index) => {
              const { Title, Year, Poster } = item;
              return (
                <div key={index} className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px]">
                  <div className="bg-[#1a1a2e] p-4 rounded-xl shadow-lg border border-gray-700 
                      hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                    <img 
                      className="rounded-lg w-full mb-3 shadow-md" 
                      src={Poster !== 'N/A' ? Poster : 'https://dummyimage.com/720x400'} 
                      alt={Title} 
                    />
                    <h2 className="text-lg font-bold text-white">{Title}</h2>
                    <p className="text-gray-400 mb-3">Year: {Year}</p>
                    <button className="w-full py-2 mt-2 text-lg font-semibold text-white bg-gradient-to-r 
                      from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all 
                      duration-300 rounded-md shadow-md active:scale-95">
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Scroll Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 
              text-white p-3 rounded-full shadow-md hover:bg-black/70 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export default MovieCard;