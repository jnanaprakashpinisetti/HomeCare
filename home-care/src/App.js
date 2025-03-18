// import './App.scss';
import React, { useState } from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-ZP3HPDDE26";
ReactGA.initialize(TRACKING_ID)


function App() {

  return (
    <>
      <TopNav />
      <HashRouter>
        <Navbar />
        <Footer />
      </HashRouter>



    </>
  );
}

export default App;
