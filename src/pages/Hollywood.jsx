import React from 'react'
import { useState, useEffect } from 'react';
import { Moviescard } from '../Components/moviescard';
import { Spinner } from '../Components/Spinner';
export const Hollywood = () => {
  const [Hollywoodmovies, setHollywoodmovies] = useState([])
  const [Loading, setLoading] = useState('false');
  const getMovieRequest = async () => {
    setLoading(true)
    const url = `https://theazeem.online/movies.php`;
    const response = await fetch(url);
    const responseJson = await response.json();
    //console.log(responseJson.movies)
    var hollywoodmviesdata = responseJson.movies.filter((movie) => {
      return movie.category === "hollywood";
    });
    console.log(hollywoodmviesdata)
    setHollywoodmovies(hollywoodmviesdata)
    setLoading(false)
  }
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
        {Hollywoodmovies.map((i, index) => {
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
