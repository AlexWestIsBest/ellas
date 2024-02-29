import React from 'react';
import './Drinks.css'
import softDrinks from './DrinksData/SoftDrinks';
import beers from './DrinksData/Beers';

function WineAndBeer() {
    return (
        <div className="drinks">
            {/* <h1>Wine & Beer Selection</h1> */}

            <div className="softDrinksContainer">
                <div className="sample">
                    <img src="https://cdn-icons-png.flaticon.com/128/489/489173.png" alt="soda" />
                    <p>Regular (12oz)</p>
                </div>

                {softDrinks.map(drink => (
                    <div className="softDrinks">
                        <p>{drink}</p>
                    </div>
                ))}
            </div>

            <div className="softDrinksContainer">
                <div className="sample">
                    <img src="https://cdn-icons-png.flaticon.com/128/3993/3993977.png" alt="soda" />
                    <p>16oz bottle</p>
                    <hr />
                    <p>20oz draft</p>
                </div>

                {beers.map(beer => (
                    <div className="softDrinks">
                        <div className="drinkIcon" style={{backgroundColor: beer.color}}>
                            <p>{beer.name}</p>
                        </div>
                        <p>${beer.price}</p>
                        <hr />
                        <p>${beer.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WineAndBeer;
