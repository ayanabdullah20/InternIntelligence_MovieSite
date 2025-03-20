import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import MovieCard from './components/MovieCard.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    if (!searchMovie) return;

    try {
      setLoading(true);
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
      const data = await res.json();
      setAllMovieData(data.Search || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='home'>
      <Navbar />
      <div className="bg">
        <SearchBar setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
        <div>
          <MovieCard allMovieData={allMovieData} loading={loading} />
        </div>
        
        <div id='about'>
        <About/>
        </div>
        <div id="contact">
        <Contact/>
        </div>
        
      </div>
    </div>
  );
}
