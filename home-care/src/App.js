// import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousal from './components/Carousal';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Carousal />
      <Footer />
    </>
  );
}

export default App;
