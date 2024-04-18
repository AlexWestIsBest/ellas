import React from 'react';
import './Drinks.css'
//
import glassWines from './Data/glassWines';
import glassWine from './Images/wineGlass.png'
//
import bottleWines from './Data/bottleWines';
import bottleWine from './Images/bottleWine.png';
//
import draftBeer from './Data/draftBeer';
import draftedBeer from './Images/draftBeer.png'
//
import bottleBeer from './Data/bottleBeer';
import bottledBeer from './Images/bottledBeer.png'


function WineAndBeer() {
    return (
        <div className="HStack drinks">
            <div class="HStack">
                <img src={glassWine} alt="Wine Glass" />
                <div class="verticalText">Wine by the Glass<hr /></div>
                <ul className="VStack drinkList">
                    {glassWines.map(wine => (
                        <li key={wine.name}>
                            <b>{wine.name}</b> <i>${wine.price}</i>
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
                            <b>{wine.name}</b> <i>${wine.price}</i>
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
                            <b>{beer.name}</b> <i>${beer.price}</i>
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
                            <b>{beer.name}</b> <i>${beer.price}</i>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WineAndBeer;
