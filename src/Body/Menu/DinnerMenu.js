import React from 'react';
import "./DinnerMenu.css"
//
import smallPlatesLogo from './Logos/smallPlatesLogo3.png'
import smallPlates from './Data/smallPlates';
//
import handheldsLogo from './Logos/handheldsLogo.png'
import handhelds from './Data/handhelds';
//
import pizzaLogo from './Logos/pizzaLogo.png'
import pizzas from './Data/pizzas';
//
import saladsLogo from './Logos/saladsLogo.png'
import salads from './Data/salads';


function DinnerMenu() {
    return (
        <div className="VStack dinnerTab">
            <br />

            <img className="smallPlatesLogo" src={smallPlatesLogo} alt="" />
            <div className="HStack">
                {smallPlates.map(smallPlate => (
                    <div className={`menuItem ${smallPlate.featured ? 'featured' : ''}`}>
                        <img
                            className="plate"
                            src={smallPlate.imageURL ? smallPlate.imageURL : "https://placehold.co/60x60/gray/lightgray?text=Image"} 
                            alt=""
                        />
                        <div className="VStack">
                            <h3>{smallPlate.name} <span className="price">| ${smallPlate.price}</span></h3>
                            <p>{smallPlate.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <br />

            <img className="saladsLogo" src={saladsLogo} alt="" />
            <p style={{ color: 'white' }}>Add Chicken to any salad - $4</p>
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

            <br />

            <img className="handheldsLogo" src={handheldsLogo} alt="" />
            <div className="HStack">
                {handhelds.map(handheld => (
                    <div className={`menuItem ${handheld.featured ? 'featured' : ''}`}>
                        <img
                            className="plate"
                            src={handheld.imageURL ? handheld.imageURL : "https://placehold.co/60x60/gray/lightgray?text=Image"} 
                            alt=""
                        />
                        <div className="VStack">
                            <h3>{handheld.name} <span className="price">| ${handheld.price}</span></h3>
                            <p>{handheld.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <br />

            <img className="pizzaLogo" src={pizzaLogo} alt="" />
            <div className="HStack">
                {pizzas.map(pizza => (
                    <div className={`menuItem ${pizza.featured ? 'featured' : ''}`}>
                        <img
                            className="plate"
                            src={pizza.imageURL ? pizza.imageURL : "https://placehold.co/60x60/gray/lightgray?text=Image"} 
                            alt=""
                        />
                        <div className="VStack">
                            <h3>{pizza.name} <span className="price">| ${pizza.price}</span></h3>
                            <p>{pizza.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DinnerMenu;