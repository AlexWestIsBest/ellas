import React from 'react';
import './Home.css'

import Logo from './Images/ellasPNG.png'
import IG from './Images/instagram.png'
import shot1 from './Images/A7R01340.jpg'


function Home() {
    return (
        <div className="Home">
            <div className="VStack">
                <img src={Logo} className="ellasLogo" alt="Restaurant logo" />  
                <img src={shot1} className="shot1" alt="Table with food" />  

                <a href="Menu.pdf" className="menuPDF"><h3>View Menu</h3></a>

                <div className="VStack">
                    <br />
                    <p>Chef-Driven Kitchen Serving Small Plates, Craft Sandwiches & NY Style Pizza. LOTS of Wine, Beer, and Full Bar. Tasting Events. Live Music.</p>
                    <br />
                    <p>Monday ................... 11am-9pm</p>
                    <p>Tuesday .................. 11am-9pm</p>
                    <p>Wednesday ............ 11am-9pm</p>
                    <p>Thursday ................ 11am-9pm</p>
                    <p>Friday .................... 11am-11pm</p>
                    <p>Saturday ................ 11am-11pm</p>
                    <p>Sunday ......................... 10-4pm</p>
                    <p>*Kitchen closes 1 hour earlier</p>
                    <br />
                </div>

                <a href="https://www.instagram.com/ellaskitchenandwinebar?igsh=bDJ6eTRzbWl5eWR6" className="HStack instagramLink">
                    <img src={IG} alt="Link to Instagram Account" className="IGlogo" />
                    <h3>@EllasKitchenAndWineBar</h3>
                </a>
            </div>

        </div>
    );
}

export default Home;