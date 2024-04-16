import React from 'react';
import './Header.css';
// import { Link } from 'react-router-dom';

import logo from './ellasLogo2.jpg';


function Header() {
    return (
        <header className="VStack header">
            <img src={logo} alt="Restaurant Logo" />

            {/* More stuff? */}
        </header>
    );
}

export default Header;