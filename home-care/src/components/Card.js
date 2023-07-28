import React, { useState, useEffect } from 'react';

import babyCareIcon from '../images/icons/baby-care.svg';
import oldAgeCareIcon from '../images/icons/old-age-care.svg';
import cookIcon from '../images/icons/cook.svg';
import physiotherapyIcon from '../images/icons/physiotherapy.svg';

export default function Card() {

  return (
  <>
  <div className="section-heading">
    <h1 >
    <span className="blue">our</span> <span className="yellow">services</span>
    </h1>
  </div>
    <div className="container card-wrapper">
      <div className="row">
      
      {/* First Card */}
        <div className="col-md-3" >
          <div className="card " >
            <div className="img-wrapper">
              <img src={babyCareIcon} alt="baby care"/>
            </div>
            <div className="card-body">
              <h4>Baby Care</h4>
              <p>Give your little ones the love and attention they deserve with our reliable babysitters</p>
            </div>
            <div className="btn-wrapper">
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>

      {/* Second Card */}
        <div className="col-md-3" >
          <div className="card " >
            <div className="img-wrapper">
              <img src={oldAgeCareIcon} alt="Old Age Care"/>
            </div>
            <div className="card-body">
              <h4>Old Age Care</h4>
              <p>Trust our compassionate caregivers to provide personalized on physical well-being</p>
            </div>
            <div className="btn-wrapper">
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>

      {/* Third Card */}
        <div className="col-md-3" >
          <div className="card " >
            <div className="img-wrapper">
              <img src={cookIcon} alt="cook / maid"/>
            </div>
            <div className="card-body">
              <h4>Cook / Maid</h4>
              <p>Effcient maids and expert cooks at your service. Enjoy a clean home and delectable meals</p>
            </div>
            <div className="btn-wrapper">
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>

      {/* Fourth Card */}
        <div className="col-md-3" >
          <div className="card " >
            <div className="img-wrapper">
              <img src={physiotherapyIcon} alt="Physiotherapy"/>
            </div>
            <div className="card-body">
              <h4>Physiotherapy</h4>
              <p>Restore your body with our professional physiotherapy services</p>
            </div>
            <div className="btn-wrapper">
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>




      </div>
    </div>
    </>

  )
}
