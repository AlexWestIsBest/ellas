import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="VStack footer">
            <div className="HStack">
                <NavLink to="/lunchmenu" className="VStack button" activeClassName="active">
                    <h3>Lunch Menu</h3>
                    <p>11am-4pm</p>
                </NavLink>

                <NavLink to="/dinnermenu" className="VStack button" activeClassName="active">
                    <h3>Dinner Menu</h3>
                    <p>4pm-9pm</p>
                </NavLink>

                {/* <NavLink to="/drinks" className="VStack button" activeClassName="active">
                    <h3>Wine List</h3>
                    <p>All day</p>
                </NavLink> */}

                {/* <NavLink to="/drinks" className="VStack button" activeClassName="active">
                    <h3>Beer List</h3>
                    <p>All day</p>
                </NavLink> */}

                {/* <NavLink to="/foodtruck" className="VStack button" activeClassName="active">Food Truck</NavLink> */}
            </div>
        </footer>
    );
}

export default Footer;
