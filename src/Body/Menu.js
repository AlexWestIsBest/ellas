// Menu.js

import React from 'react';
import "./Menu.css"
import subMenu from './MenuData/Subs';
import sidesMenu from './MenuData/Sides';

function Menu() {
  return (
    <div>
      <h1> Menu</h1>
      {/* <p>Select items available for delivery during lunch hours. Click here to order.</p> */}
      <p>No modifications allowed</p>

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

      <h1>Side with that?</h1>
      <p>Lots to choose from</p>

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