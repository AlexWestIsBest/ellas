// Menu.js

import React from 'react';
import "./Menu.css"
import subMenu from './MenuData/Subs';
import sidesMenu from './MenuData/Sides';

function Menu() {
  return (
    <div>
      <h1>Ella's Menu</h1>
      {/* <p>Select items available for delivery during lunch hours. Click here to order.</p> */}
      <p>No modifications. Pick off your own damn pickles.</p>

      <div className="subContainer">
          {subMenu.map(sub => (
              <div className={`subMenu ${sub.featured ? 'featured' : ''}`}>
                  <div className="nameAndPrice">
                      <h2>{sub.name}</h2>
                      <h2>${sub.price}</h2>
                  </div>
                  <p>{sub.description}</p>
              </div>
          ))}
      </div>

      <h1>Sides with that?</h1>
      <p>Our truck fries are the shit.</p>

      <div className="sidesContainer">
          {sidesMenu.map(side => (
              <div className="sidesMenu">
                  <p>{side.name}</p>
                  <p>${side.price}</p>
              </div>
          ))}
            
      </div>

    </div>
  );
}

export default Menu;