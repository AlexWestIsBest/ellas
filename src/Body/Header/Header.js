import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import logo from './ellasLogo2.jpg';


function Header() {
    return (
        <header className="VStack header">
            <Link to="/"><img src={logo} alt="Restaurant Logo" /></Link>
        </header>
    );
}

export default Header;