import React from 'react';
import "./Menu.css"
//
import smallPlates from './Data/smallPlates';

function Menu() {
  return (
    <div>
      <h1>Small Plates</h1>
      <div className="VStack">
          {smallPlates.map(sub => (
              <div className={`subMenu ${sub.featured ? 'featured' : ''}`}>
                  <h3>{sub.name} ........ ${sub.price}</h3>
                  <p>{sub.description}</p>
              </div>
          ))}
      </div>



    </div>
  );
}

export default Menu;