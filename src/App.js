import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './HeaderStuff/Header';
// import Home from './Body/Home';
import Menu from './Body/Menu';
import WineAndBeer from './Body/Drinks';
import FoodTruck from './Body/FoodTruck';


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="bodyContent">
                    <Routes>
                        <Route path="/" element={<Menu />} />  {/* LOOK HERE ALEX- ALTERNATIVE HOME PAGE */}
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/drinks" element={<WineAndBeer />} />
                        <Route path="/foodtruck" element={<FoodTruck />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
