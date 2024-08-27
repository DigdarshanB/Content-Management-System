import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products';
import Login from './components/Login';
import Slider from './components/Slider'

function App() {
  return (
    <Router>
      
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route path="/" element={<><Navbar /><Slider /><Products /><Footer /></>} />
        <Route path="/products" element={<><Navbar /><Slider /><Products /><Footer /></>} />
        
        {/* Route without Navbar and Footer */}
        <Route path="/login" element={<><Navbar /><Login /><Footer/></>} />
        
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
