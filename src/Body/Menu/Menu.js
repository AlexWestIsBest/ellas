import React from 'react';
import "./Menu.css"
//
import smallPlates from './Data/smallPlates';
import salads from './Data/salads';
import handhelds from './Data/handhelds';
import pizzas from './Data/pizzas';
import lunches from './Data/lunches';

function Menu() {
    return (
        <div className="VStack menu">
            <br />

            <h1>Small Plates</h1>
            <div className="HStack">
                {smallPlates.map(sub => (
                    <div className={`menuItem ${sub.featured ? 'featured' : ''}`}>
                        {/* <img src="https://placehold.co/80" alt="" /> */}
                        <div className="VStack">
                            <h3>{sub.name}</h3>
                            <p>{sub.description} ${sub.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <br />

            <h1>Salads</h1>
            <div className="HStack">
                {salads.map(salad => (
                    <div className={`menuItem ${salad.featured ? 'featured' : ''}`}>
                        {/* <img src="https://placehold.co/80" alt="" /> */}
                        <div className="VStack">
                            <h3>{salad.name}</h3>
                            <p>{salad.description} ${salad.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <br />

            <h1>Handhelds</h1>
            <div className="HStack">
                {handhelds.map(handheld => (
                    <div className={`menuItem ${handheld.featured ? 'featured' : ''}`}>
                        {/* <img src="https://placehold.co/80" alt="" /> */}
                        <div className="VStack">
                            <h3>{handheld.name}</h3>
                            <p>{handheld.description} ${handheld.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <br />

            <h1>Pizza</h1>
            <div className="HStack">
                {pizzas.map(pizza => (
                    <div className={`menuItem ${pizza.featured ? 'featured' : ''}`}>
                        {/* <img src="https://placehold.co/80" alt="" /> */}
                        <div className="VStack">
                            <h3>{pizza.name}</h3>
                            <p>{pizza.description} ${pizza.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <br />

            <h1>Lunch</h1>
            <div className="HStack">
                {lunches.map(lunch => (
                    <div className={`menuItem ${lunch.featured ? 'featured' : ''}`}>
                        {/* <img src="https://placehold.co/80" alt="" /> */}
                        <div className="VStack">
                            <h3>{lunch.name}</h3>
                            <p>{lunch.description} ${lunch.price}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Menu;