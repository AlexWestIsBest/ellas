import React, { useState } from 'react';
import "./Menu.css"
//
import LunchTab from './LunchTab'
import DinnerTab from './DinnerTab';

function Menu() {
    const [isLunchMenu, setIsLunchMenu] = useState(false); // false means dinner menu is shown by default

    const toggleMenu = () => {
        setIsLunchMenu(!isLunchMenu); // Toggle between true and false
    };

    return (
        <div>
        <button onClick={toggleMenu}>
            {isLunchMenu ? 'Show Dinner Menu' : 'Show Lunch Menu'}
        </button>

        <div>
            {isLunchMenu ? (
                // Render Lunch Menu
                <LunchTab />
            ) : (
                // Render Dinner Menu
                <DinnerTab />
            )}
        </div>
    </div>
    );
}

export default Menu;