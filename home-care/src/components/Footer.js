import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h5> Menus</h5>
              <BrowserRouter>
                <Navbar />
              </BrowserRouter></div>
            <div className="col-md-3">
              <h5> Services</h5>

              <ul>
                <li>House Keeping</li>
                <li>Baby Care</li>
                <li>Cooks / Maid Servant</li>
                <li>Old Age People Care</li>
                <li>Beside Aaya / Attender</li>
              </ul>

            </div>
            <div className="col-md-3">one</div>
            <div className="col-md-4">one</div>
          </div>
        </div>
      </footer>

    </>
  )
}
