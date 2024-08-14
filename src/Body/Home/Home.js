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

                <div className="HStack">
                    <a href="Menu.pdf" className="button"><h3>View Menu</h3></a>
                    <a href="https://order.toasttab.com/online/ellas-craft-kitchen-bar-6462-winchester-rd" className="button"><h3>Order Online</h3></a>
                </div>

                <div className="VStack">
                    <br />
                    <p>Chef-Driven Kitchen Serving Small Plates, Craft Sandwiches & NY Style Pizza. LOTS of Wine, Beer, and Full Bar. Tasting Events. Live Music.</p>
                    <br />
                    <p>Monday ................... 11am-9pm</p>
                    <p>Tuesday .................. 11am-9pm</p>
                    <p>Wednesday ............. 11am-9pm</p>
                    <p>Thursday ................. 11am-9pm</p>
                    <p>Friday ...................... 11am-9pm</p>
                    <p>Saturday .................. 11am-9pm</p>
                    <p>Sunday ......................... 12-7pm</p>
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