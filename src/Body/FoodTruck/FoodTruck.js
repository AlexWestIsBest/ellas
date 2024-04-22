import React from 'react';
import './FoodTruck.css';
//
import comingSoon from './Images/comingSoon.png';

function FoodTruck() {
    return (
        <div className="foodTruck">
            <img src={comingSoon} alt="" />
        </div>
    );
}

export default FoodTruck;
