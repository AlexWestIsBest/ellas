import React from 'react';
import "./LunchMenu.css"
//
import lunchLogo from './Logos/lunchLogo.png'
import lunches from './Data/lunches';
//
import saladsLogo from './Logos/saladsLogo.png'
import salads from './Data/salads';


function LunchMenu() {
    return (
        <div className="VStack lunchTab">
            <br />

            <img className="lunchLogo" src={lunchLogo} alt="" />
            <p>All sandwiches served with side of House Fries or Pasta Salad</p>
            <div className="HStack">
                {lunches.map(lunch => (
                    <div className={`menuItem ${lunch.featured ? 'featured' : ''}`}>
                        <img
                            className="plate"
                            src={lunch.imageURL ? lunch.imageURL : "https://placehold.co/60x60/gray/lightgray?text=Image"} 
                            alt=""
                        />
                        <div className="VStack">
                            <h3>{lunch.name} <span className="price">| ${lunch.price}</span></h3>
                            <p>{lunch.description}</p>
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
                        <img
                            className="plate"
                            src={salad.imageURL ? salad.imageURL : "https://placehold.co/60x60/gray/lightgray?text=Image"} 
                            alt=""
                        />
                        <div className="VStack">
                            <h3>{salad.name} <span className="price">| ${salad.price}</span></h3>
                            <p>{salad.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LunchMenu;