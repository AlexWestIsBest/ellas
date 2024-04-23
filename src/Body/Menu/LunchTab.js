import React from 'react';
import "./LunchTab.css"
//
import lunchLogo from './Images/lunchLogo.png'
import lunches from './Data/lunches';
//
import saladsLogo from './Images/saladsLogo.png'
import salads from './Data/salads';


function LunchTab() {
    return (
        <div className="VStack lunchTab">
            <br />

            <img className="lunchLogo" src={lunchLogo} alt="" />
            <div className="HStack">
                {lunches.map(lunch => (
                    <div className={`menuItem ${lunch.featured ? 'featured' : ''}`}>
                        <img className="plate" src="https://placehold.co/60x60/gray/lightgray?text=Image" alt="" />
                        <div className="VStack">
                            <h3>{lunch.name}</h3>
                            <p>{lunch.description} ${lunch.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <br />

            <img className="saladsLogo" src={saladsLogo} alt="" />
            <p>Add Chicken to any salad - $4</p>
            <div className="HStack">
                {salads.map(salad => (
                    <div className={`menuItem ${salad.featured ? 'featured' : ''}`}>
                        <img className="plate" src="https://placehold.co/60x60/gray/lightgray?text=Image" alt="" />
                        <div className="VStack">
                            <h3>{salad.name}</h3>
                            <p>{salad.description} ${salad.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LunchTab;