import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="VStack footer">
            <div className="buttons">
                <Link to="/menu" className="button menu">Menu</Link>
                <Link to="/drinks" className="button wineandbeer">Drinks</Link>
                <Link to="/foodtruck" className="button foodtruck">Food Truck</Link>
            </div>
        </footer>
    );
}

export default Footer;
