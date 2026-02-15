import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

//262db138 (API key)

const API_URL ='http://www.omdbapi.com?apiKey=262db138';

const movie1 = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_SX300.jpg",
    "Title": "Batman Begins",
    "Type": "movie",
    "Year": "2005",
    "imdbID": "tt0372784"
}
const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`); 
        const data = await response.json(); 
        console.log(data.Search);
    }   
    useEffect(() => {
        searchMovies('Batman');
    }, []);
  return (
      <div className="app">
          <h1>MovieLand</h1>
          <div className="search">
              <input 
                placeholder="Search for movies" 
                value="Batman"
                onChange={(e) => searchMovies(e.target.value)   }
              />
              <img 
                src={SearchIcon} 
                alt="search" 
                onClick={()=>{}}/>
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>    
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} alt={movie1.Title}/>
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
  );

}

export default App;