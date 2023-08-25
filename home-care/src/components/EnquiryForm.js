import React from 'react';

import contactUs from '../images/img/contact-us.jpg'

const EnquiryForm = () => {
    return (
        <>
            <section className="enquiryForm">
                <div className="container ">

                    <div className="row">
                        <div className="col-md-4">
                            <img src={contactUs} alt="contact Us" />
                        </div>
                        <div className="col-md-8">
                            <h1 class="section-heading"> <span class="blue">send your </span><span class="yellow">message to us</span></h1>


                            <div className="form-wrapper">
                                <form action="" id='enquiryForm'>
                                    {/* Blick-1 */}
                                    <div className="container">
                                        <div className="row">
                                            {/* First Name */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="firstName"><span>* </span>First Name :</label>
                                                <input type="text" className='form-control' id='firstName' name='firstName' placeholder="Enter First Name" required='true' pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" />
                                                <span className='error' id='firstNameError'></span>
                                            </div>
                                            {/* Last Name */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="lastName">Last Name :</label>
                                                <input type="text" className='form-control' id='lastName' name='lastName' placeholder="Enter Last Name" />
                                                <span className='error' id='lastNameError'></span>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Blick-2 */}
                                    <div className="container">
                                        <div className="row">
                                            {/* Email */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="email"><span>* </span>Email Id :</label>
                                                <input type="email" className='form-control' id='email' name='email' placeholder="sample@mail.com" required='true' />
                                                <span className='error' id='emailError'></span>
                                            </div>
                                            {/* Mobile No */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="mobile"><span>* </span>Mobile No :</label>
                                                <input type="number" className='form-control' id='mobile' name='mobile' placeholder="Enter Mobile No" required='true' pattern="^[6-9]\\d{9}$" max="10" />
                                                <span className='error' id='mobileError'></span>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Blick-3 */}
                                    <div className="container">
                                        <div className="row">
                                            {/* Comments */}
                                            <div className="col-md-12 form-group">
                                                <label htmlFor="message">Message :</label>
                                                <textarea className='form-control' name="message" id="message" cols="10" rows="5" placeholder="Enter your message..."></textarea>
                                                <span className='error' id="messageError"></span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="btn-wrap">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>


                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EnquiryForm;
