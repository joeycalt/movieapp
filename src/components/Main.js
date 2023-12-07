import { useState, useEffect } from 'react';

const Main = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const url = `https://www.omdbapi.com/?i=tt3896198&apikey=3f5f8dc1`
    const getMovies = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setMovies([data])
    }
    
    getMovies()}, []);
    
    const loaded = () => {
        return movies.map((e) => (
            <>
            <div key={e}>
            <div>
            <hr />
            <img src={e.Poster} alt=''></img>
            <div>
            <div>Year: {e.Year}</div>
            <div>Released: {e.Released}</div>
            <div>Actors: {e.Actors}</div>
            <div>Genre: {e.Genre}</div>
            <div>Plot: {e.Plot}</div>
            </div>
            <div>
            <div>
            </div>
            </div>
            </div>
            
            </div>
            </>
        ));
      };
    
      return movies ? loaded() : <svg class="animate-bounce w-6 h-6 ..."></svg>;
}

export default Main