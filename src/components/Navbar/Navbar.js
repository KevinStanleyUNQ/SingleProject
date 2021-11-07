import React from 'react'
import "../Navbar/Navbar.css";
import SpotifySvg from "../../img/spotify-1.svg";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-black">
        <div className="container header-home">
          <img className="header-logo" src={SpotifySvg} alt="spotify-Logo" />
        </div>
      </nav>
    )
}

export default Navbar
