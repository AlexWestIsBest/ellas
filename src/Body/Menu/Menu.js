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
        <div className="VStack">
            <h1>Small Plates</h1>
            <div className="VStack">
                {smallPlates.map(sub => (
                    <div className={`${sub.featured ? 'featured' : ''}`}>
                        <h3>{sub.name} ........ ${sub.price}</h3>
                        <p>{sub.description}</p>
                    </div>
                ))}
            </div>

            <br />

            <h1>Salads</h1>
            <div className="VStack">
                {salads.map(salad => (
                    <div className={`${salad.featured ? 'featured' : ''}`}>
                        <h3>{salad.name} ........ ${salad.price}</h3>
                        <p>{salad.description}</p>
                    </div>
                ))}
            </div>

            <br />

            <h1>Handhelds</h1>
            <div className="VStack">
                {handhelds.map(handheld => (
                    <div className={`${handheld.featured ? 'featured' : ''}`}>
                        <h3>{handheld.name} ........ ${handheld.price}</h3>
                        <p>{handheld.description}</p>
                    </div>
                ))}
            </div>

            <br />

            <h1>Pizza</h1>
            <div className="VStack">
                {pizzas.map(pizza => (
                    <div className={`${pizza.featured ? 'featured' : ''}`}>
                        <h3>{pizza.name} ........ ${pizza.price}</h3>
                        <p>{pizza.description}</p>
                    </div>
                ))}
            </div>

            <br />

            <h1>Lunch</h1>
            <div className="VStack">
                {lunches.map(lunch => (
                    <div className={`${lunch.featured ? 'featured' : ''}`}>
                        <h3>{lunch.name} ........ ${lunch.price}</h3>
                        <p>{lunch.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Menu;