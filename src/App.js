import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

//262db138 (API key)

const API_URL ='http://www.omdbapi.com?apiKey=262db138';
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
        </div>
  );

}

export default App;