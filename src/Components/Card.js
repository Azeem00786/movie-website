import React, { useState, useEffect } from 'react';
import { Moviescard } from './moviescard';
import { Spinner } from './Spinner';
function Card(index) {
  const [movies, setMovies] = useState([]);
  const [Loading, setLoading] = useState('false');

  const getMovieRequest = async () => {
    setLoading(true)
    const url = `https://theazeem.online/movies.php`;
    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.movies)
    setLoading(false)
  };
  useEffect(() => {
    getMovieRequest();
    

  }, []);
  if (Loading) {
    return (
      
       <div>
          <Spinner />
       </div>
    )
  }    
  return (
    
      <div className="row" key={index}>
        {movies.map((i) => {
          return (

            <>
              <Moviescard moviesdata={i} />
            </>
          )
        })}
      </div>
    
  )
}
export default Card;