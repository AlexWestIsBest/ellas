import React from 'react';
import './Drinks.css'
//
import glassWines from './DrinksData/glassWines';
import glassWine from './DrinksImages/wineGlass.png'
//
import bottleWines from './DrinksData/bottleWines';
import bottleWine from './DrinksImages/bottleWine.png';
//
import draftBeer from './DrinksData/draftBeer';
import draftedBeer from './DrinksImages/draftBeer.png'
//
import bottleBeer from './DrinksData/bottleBeer';
import bottledBeer from './DrinksImages/bottledBeer.png'


function WineAndBeer() {
    return (
        <div className="VStack drinks">
            <div class="HStack">
                <img src={glassWine} alt="Wine Glass" />
                <div class="verticalText">Wine by the Glass<hr /></div>
                <ul className="VStack drinkList">
                    {glassWines.map(wine => (
                        <li key={wine.name}>
                            <strong>{wine.name}</strong> ${wine.price}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="HStack">
                <img src={bottleWine} alt="Wine Bottle" />
                <div className="verticalText">Wine by the Bottle<hr /></div>
                <ul className="VStack drinkList">
                    {bottleWines.map(wine => (
                        <li key={wine.name}>
                            <strong>{wine.name}</strong> ${wine.price}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="HStack">
                <img src={draftedBeer} alt="Draft Beer" />
                <div className="verticalText">Draft Beer<hr /></div>
                <ul className="VStack drinkList">
                    {draftBeer.map(beer => (
                        <li key={beer.name}>
                            <strong>{beer.name}</strong> ${beer.price}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="HStack">
                <img src={bottledBeer} alt="Bottled Beer" />
                <div className="verticalText">Bottled Beer<hr /></div>
                <ul className="VStack drinkList">
                    {bottleBeer.map(beer => (
                        <li key={beer.name}>
                            <strong>{beer.name}</strong> ${beer.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WineAndBeer;
