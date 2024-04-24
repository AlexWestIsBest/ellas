import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//
import Header from './Header/Header';
//
// import Home from './Body/Home';
import LunchMenu from './Body/Menu/LunchMenu';
import DinnerMenu from './Body/Menu/DinnerMenu';
import Drinks from './Body/Drinks/Drinks';
// import FoodTruck from './Body/FoodTruck/FoodTruck';
//
import Footer from './Footer/Footer';


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="bodyContent">
                    <Routes>
                        <Route path="/" element={<DinnerMenu />} />  {/* currently shows menu, but I can create an actual home page too. */}
                        <Route path="/lunchmenu" element={<LunchMenu />} />
                        <Route path="/dinnermenu" element={<DinnerMenu />} />
                        <Route path="/drinks" element={<Drinks />} />
                        {/* <Route path="/foodtruck" element={<FoodTruck />} /> */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
