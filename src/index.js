// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Products from './components/Products';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Slider />
      <Products/>
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
