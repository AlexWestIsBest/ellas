import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

import restaurantLogo from './Images/ellasWhiteOnBlack.jpg';
import truckLogo from './Images/ellasTruck.jpg'


function Header() {
    const location = useLocation();  // This hook gives us access to the current URL endpoint
    const currentLogo = location.pathname === '/foodtruck' ? truckLogo : restaurantLogo;

    return (
        <header className="VStack header">
            <img src={currentLogo} alt="Restaurant Logo" />

            {/* More stuff? */}
        </header>
    );
}

export default Header;