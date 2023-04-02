import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    </>
  );
}

export default App;
