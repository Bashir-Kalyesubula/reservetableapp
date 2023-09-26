
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Menu from "./components/Menu.js";
import OnlineOrder from "./components/OnlineOrder.js";
import Reservations from "./components/Reservations.js";
import Login from "./components/Login.js";



function App() {
  return (

    <Router>
      <div className="grid1">
        <Nav/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/online-order" element={<OnlineOrder />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
   </div>
   </Router>
  );
}

export default App;
