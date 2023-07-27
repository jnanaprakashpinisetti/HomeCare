// import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousal from './components/Carousal';
import Card from './components/Card'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Carousal />
      <Card/>
      <Footer />
    </>
  );
}

export default App;
