// import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
