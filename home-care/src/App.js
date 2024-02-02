// import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopNav from './components/TopNav'


function App() {

  return (
    <>
        <TopNav />
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Footer />

      

    </>
  );
}

export default App;
