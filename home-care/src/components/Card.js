import React, { useState, useEffect } from 'react';

import nursing from '../images/img/nursing-icon.jpg'; 
import patentcare from '../images/img/patent-care-icon.jpg'; 
import babyCareIcon from '../images/img/baby-care-icon.jpg';
import oldAgeCareIcon from '../images/img/old-age-care-icon.jpg';
import cookIcon from '../images/img/made-cook-icon.jpg'; 

export default function Card() {

  return (
  <section className="home-cards">
  <div className="section-heading">
    <h1 >
    <span className="blue">our</span> <span className="yellow">services</span>
    </h1>
  </div>
    <div className="container ">
      <div className="row">
      
      {/* First Card */}
      <div className="col-md-3" >
          <div className="card " >
            <div className="img-wrapper">
              <img src={nursing} alt="Nursing"/>
            </div>
            <div className="card-body">
              <h4>NURSING</h4>
              <p>Providing compassionate, professional nursing care at home. Trusted by families across Hyderabad for personalized and reliable support</p>
            </div>
            <div className="btn-wrapper">
              <a href="#/Our-services/#old-age-care" className="btn btn-primary">See More</a>
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
              <h4>OLD AGE CARE</h4>
              <p>Trust our compassionate caregivers to provide personalized well-being of our elders.</p>
            </div>
            <div className="btn-wrapper">
              <a href="#/Our-services/#old-age-care" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>

      {/* Third Card */}

      <div className="col-md-3" >
          <div className="card " >
            <div className="img-wrapper">
              <img src={babyCareIcon} alt="baby care"/>
            </div>
            <div className="card-body">
              <h4>BABY CARE</h4>
              <p>Give your little ones the love and attention they deserve with our reliable babysitters.</p>
            </div>
            <div className="btn-wrapper">
              <a href="#/Our-services/#baby-care" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
        

      {/* Fourth Card */}
      <div className="col-md-3" >
          <div className="card " >
            <div className="img-wrapper">
              <img src={cookIcon} alt="cook / maid"/>
            </div>
            <div className="card-body">
              <h4>C0OK / MAID</h4>
              <p>Say goodbye to chores and hello to gourmet! Our expert chefs and home care professionals bring the joy of delicious meals and a spotless home to you.</p>
            </div>
            <div className="btn-wrapper">
              <a href="#/Our-services/#maid-cook" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
 



      </div>
    </div>
    </section>

  )
}
