import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" >
        <Link className="navbar-brand nav-link disabled" to="/" aria-disabled="true">Movie web</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/Trending">Trending</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/Bollywood">Bollywood</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Hollywood">Hollywood</Link>
            </li>
            {/* <button onClick={ToggleTheme} >Toggle theme</button> */}
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Mode</label>
          </div>
        </div>
      </div>
      
    </nav>
    
  );
}
export default Navbar;