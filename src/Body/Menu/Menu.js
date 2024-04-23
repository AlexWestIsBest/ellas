import React, { useState, useEffect } from 'react';
import "./Menu.css"
//
import LunchTab from './LunchTab'
import DinnerTab from './DinnerTab';

function Menu() {
    const [isLunchTime, setIsLunchTime] = useState(false); // false means dinner menu is shown by default

    useEffect(() => {
        const now = new Date(); // get the current time
        const hours = now.getHours(); // extract the hour

        // Set state based on whether the current time is between 11am and 4pm
        if (hours >= 11 && hours < 16) {
            setIsLunchTime(true);
        } else {
            setIsLunchTime(false);
        }
    }, []); // Empty dependency array means this effect runs once on mount

    const makeLunch = () => {
        setIsLunchTime(true)
    }
    const makeDinner = () => {
        setIsLunchTime(false)
    }

    return (
        <div className="menu">
            <br />
            <div className = "HStack menuToggle">
                <button className={`${isLunchTime ? 'selected' : ''}`} onClick={makeLunch}>
                    <h3>Lunch Menu</h3>
                    <p>11am-4pm</p>
                </button>
                <button className={`${isLunchTime ? '' : 'selected'}`} onClick={makeDinner}>
                    <h3>Dinner Menu</h3>
                    <p>4pm-9pm</p>
                </button>
            </div>

            <div>
                {isLunchTime ? (
                    <LunchTab />
                ) : (
                    <DinnerTab />
                )}
            </div>
        </div>
    );
}

export default Menu;