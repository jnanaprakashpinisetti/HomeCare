// import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousal from './components/Carousal';
import Card from './components/Card';
import Choose from './components/Choose';
import HowToProcess from './components/HowToProcess';
// import SendMessage from './components/SendMessage';
import EnquiryForm from './components/EnquiryForm';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Carousal />
      <Card />
      <Choose />
      <HowToProcess />
      {/* <SendMessage /> */}
      <EnquiryForm />
      <Footer />
    </>
  );
}

export default App;
