import React from 'react'
import { useState, useEffect } from 'react';
import { Moviescard } from '../Components/moviescard';
import { Spinner } from '../Components/Spinner';
export const Bollywood = () => {  
  const [Bollywoodmovie, setBollywoodmovie] = useState([]);
  const [Loading, setLoading] = useState('false');
  const getMovieRequest = async () => {
    setLoading(true)
    const url = `https://theazeem.online/movies.php`;
    const response = await fetch(url);
    const responseJson = await response.json();
    // console.log(responseJson.movies[0])
    var bollywood = responseJson.movies.filter(function (movie) {      
        return movie.category === 'Bollywood';      
    });
    setBollywoodmovie(bollywood)
    setLoading(false)
        console.log(bollywood)
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
    <>
  
      <div className="row">
        {Bollywoodmovie.map((i,index) => {
          return (
            <div className="col" key={index}>
              <Moviescard moviesdata={i} />
            </div>
          )
        })}
      </div>
    </>
  )
}
