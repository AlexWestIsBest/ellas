import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

import restaurantLogo from './Images/ellasPNG.png';
import truckLogo from './Images/ellasTruck.jpg'


function Header() {
    const location = useLocation();  // This hook gives us access to the current URL endpoint
    const currentLogo = location.pathname === '/foodtruck' ? truckLogo : restaurantLogo;

    return (
        <header className="HStack header">
            <img src={currentLogo} alt="Restaurant Logo" />

            <div className="VStack">
                {/* Social media logos - pure white on black background. Minimalist. */}

                {/* Dynamic: "Opens in 1 hour" "Open until 9pm today" */}
                {/* <h3>Opens mid-May!</h3> */}
            </div>
        </header>
    );
}

export default Header;