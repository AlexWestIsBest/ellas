import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="VStack footer">
            <div className="HStack buttons">
                <NavLink to="/menu" className="button menu" activeClassName="active">Menu</NavLink>
                <NavLink to="/drinks" className="button wineandbeer" activeClassName="active">Drinks</NavLink>
                <NavLink to="/foodtruck" className="button foodtruck" activeClassName="active">Food Truck</NavLink>
            </div>

            {/* TODO: Add social buttons */}
        </footer>
    );
}

export default Footer;
