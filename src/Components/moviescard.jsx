import React from 'react'
import '../App.css';
export const Moviescard = ({ moviesdata }) => {
  const { name, image, rating } = moviesdata;
  
  return (
    <>
      
        <div className="card m-5" style={{ width: '20rem'}} >
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Movie Name: {name}</h4>
            <h5>Rating: {rating}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https:www.youtube.com/watch?v=nqye02H_H6I&ab_channel=RelaxingTree" className="btn btn-primary" target="_blank">watch </a>
            <button className='btn' style={{ padding: '5px'}}>add</button>
          </div>
        </div>
     
    </>
  )
}
