import React from 'react';

import SendMessage from '../SendMessage'

import ContactImg from '../../images/img/contact-us.jpg';
import Cell from '../../images/icons/social-media/cell-blue.svg';
import Email from '../../images/icons/social-media/email-blue.svg';
import Location from '../../images/icons/social-media/location-blue.svg';
import watsapp from '../../images/icons/social-media/watsapp-blue.svg';

const ContactUs = () => {
    return (
        <>
            <section className="contact-us">
                <div className="hero-banner">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className="section-heading"><span className="blue">Contact</span> <span className="yellow">Us</span></h1>
                                <h4>
                                    We are here to help you every step of the way, please feel free to contact us through our online or offline touchpoints.</h4>

                            </div>
                            <div className="col-md-4">
                                <img src={ContactImg} alt="contact us" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container">

                    <div className="row">
                        <h2>What can we help you with today?</h2>
                        <div className="col-md-7">
                            <div className="call-wrap">
                                <img src={Cell} alt="" />
                                <div>
                                    <p>Call Us</p>
                                    <a href="tell:9888559955" >9888 559955</a>
                                </div>
                            </div>
                            <div className="call-wrap">
                                <img src={watsapp} alt="" />
                                <div>
                                    <p>WhatsApp Us At</p>
                                    <a href="tell:9888559955" >9888 559955</a>
                                </div>
                            </div>
                            <div className="call-wrap">
                                <img src={Email} alt="" />
                                <div>
                                    <p>Write to Us</p>
                                    <a href="mailto:jenceocustomercare@gmail.com" >jenceocustomercare@gmail.com</a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-5 sms">
                            <div className="call-wrap">
                                <img src={Location} alt="Location" />
                                <div>
                                    <h3><strong>Address</strong></h3>
                                    <p>#2-3-381, Road No. 4,<br />
                                        Sainagar Colony, Alkapuri X Road, <br />
                                        Nagole, Hyderabad,  Telangana  (India), <br />Pin - 500 068,
                                   </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <SendMessage/>

                {/* <div className="container map">

                    <h2>Location Map</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.580272636336!2d79.34547557661278!3d13.683267386701498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b19d3f65f0b%3A0x9ceb617526255701!2sTIRUPATI%20BALAJI%20TEMPLE!5e0!3m2!1sen!2sin!4v1690853144756!5m2!1sen!2sin" width="600" height="450" ></iframe>

                        </div>
                    </div>

                </div> */}

            </section>


        </>
    );
}

export default ContactUs;
