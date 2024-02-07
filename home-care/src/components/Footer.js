import React from 'react';

import facebook from '../images/icons/social-media/facebook.svg';
import twitter from '../images/icons/social-media/twitter.svg';
import instagram from '../images/icons/social-media/instagram.svg';
import cell from '../images/icons/social-media/cell.svg';
import email from '../images/icons/social-media/email.svg';
import location from '../images/icons/social-media/location.svg';
import youtube from '../images/icons/social-media/youtube.svg';


export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <h4> Menus</h4>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Our Services</li>
                  <li>FAQ</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Services</h4>
                <div className="services">

                  <ul>
                    <li>House Keeping</li>
                    <li>Baby Care</li>
                    <li>In-house cooks / Maids</li>
                    <li>Golden age support</li>
                    <li>Beside Aaya / Attender</li>
                  </ul>
                </div>

              </div>
              <div className="col-md-3">
                <h4>Follow US</h4>
                <div className="followus">
                  <ul>
                    <li><a href="#" target="_blank" ><img src={facebook} alt="facebook" />Facebook</a></li>
                    <li><a href="#" target="_blank" ><img src={instagram} alt="instagram" />Instagram</a></li>
                    <li><a href="#" target="_blank" ><img src={twitter} alt="twitter" />Twitter</a></li>
                    <li><a href="#" target="_blank" ><img src={youtube} alt="youtube" />YouTube</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <h4>Contect Us</h4>
                <div className="contact-us">
                  <ul>
                    <li> <a href='tell:9888559955' className="call"><img src={cell} alt="location" />9888 559955</a></li>
                    <li><a href='mailto:jenceocustomercare@gmail.com'><img src={email} alt="location" />jenceocustomercare@gmail.com</a></li>
                    <li className="address">
                      <img src={location} alt="location" /> <span>Shilpa Avenue,  Shilpa Avenue Colony, Miyapur, Hyderabad, Telangana 500085</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="copy-wright">
          <div className="container">
            <p> &copy; 2023 JecCeo, All rights received</p>
          </div>
        </div>
      </footer>

    </>
  )
}
