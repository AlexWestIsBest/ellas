// Header.js

import React from 'react';
import './Header.css';
import logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header className="headerBar">
          {/* <div className="headerContent"> */}
              {/* <Link to="/"><img src={logo} alt="Restaurant Logo" className="logo"></img></Link> */}
              <div className="buttons">
                  <Link to="/menu" className="button menu">Food</Link>
                  <Link to="/wineandbeer" className="button wineandbeer">Drinks</Link>
                  <Link to="/foodtruck" className="button foodtruck">Food Truck</Link>
              </div>
          {/* </div> */}
      </header>
  );
}

export default Header;
