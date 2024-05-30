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
                    <p>Monday .................... Closed</p>
                    <p>Tuesday .................. 12-8pm</p>
                    <p>Wednesday ............ 12-8pm</p>
                    <p>Thursday ................ 12-8pm</p>
                    <p>Friday ................... 12-11pm</p>
                    <p>Saturday ............... 12-11pm</p>
                    <p>Sunday ................. 12-11pm</p>
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