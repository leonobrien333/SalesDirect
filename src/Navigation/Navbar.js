import React from "react";
import logo from './image.png';
import { BrowserRouter as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <a className="navbar-brand" href="/">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/"></Link>
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >    
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">

        <li className="nav-item">
          <a className="nav-link" href="/Leads">
            <Link to="/Leads">Leads</Link>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/Deals">
            <Link to="/Deals">Deals</Link>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/Meetings">
            <Link to="/Meetings">Meetings</Link>
          </a>  
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/Win_Lose">
            <Link to="/Win_Lose">Win-Lose Ratio</Link>
          </a>
        </li>

      </ul>
    </div>
    </nav>
  )
}

export default Navbar