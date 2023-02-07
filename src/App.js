
import './App.css';
import { useState } from 'react';
import Search from './components/search';
import DisplayMovie from './components/display_movie'
import FavouriteMovies from './components/favourite_movies';
import Ratings from './components/ratings';
function App() {

  const [searchedMovie, setSearchedMovie] = useState(null);
  const [movieArray, setmovieArray] = useState([])
  console.log({searchedMovie});
  



  return (
    <div className="App">
      <Search setSearchedMovie={setSearchedMovie}  />
      <DisplayMovie searchedMovie={searchedMovie} setmovieArray={setmovieArray} />
      <Ratings searchedMovie={searchedMovie}/>
      <FavouriteMovies setmovieArray={setmovieArray} movieArray={movieArray}/>
    </div>
  );
}

export default App;
