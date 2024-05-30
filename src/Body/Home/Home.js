import React from 'react';
import './Home.css'

import Logo from './Images/ellasPNG.png'
import IG from './Images/instagram.png'


function Home() {
    return (
        <div className="Home">
            <div className="VStack">
                <img src={Logo} alt="Restaurant logo" />    

                <a href="Menu.pdf" className="menuPDF"><h3>See Menu</h3></a>

                <div className="VStack">
                    <br />
                    <p>Chef-Driven Kitchen Serving Small Plates, Craft Sandwiches & NY Style Pizza. LOTS of Wine, Beer, and Full Bar. Tasting Events. Live Music.</p>
                    <br />
                    <p>Monday ................... 11am-9pm</p>
                    <p>Tuesday .................. 11am-9pm</p>
                    <p>Wednesday ............ 11am-9pm</p>
                    <p>Thursday ................ 11am-9pm</p>
                    <p>Friday ................... 11am-12am</p>
                    <p>Saturday ............... 11am-12am</p>
                    <p>Sunday ........................ 11-8pm</p>
                    <p>*Kitchen closes 1 hour earlier</p>
                    <br />
                    <h1>Coming June 2024!</h1>
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