import React from 'react';
import expertIcon from '../images/icons/expert-profissional.svg';
import customerIcon from '../images/icons/customer-satisfaction.svg';
import standerdIcon from '../images/icons/highe-standards.svg';
import customerCareIcon from '../images/icons/customer-support.svg';

export default function Choose() {
    return (
        <>
            <section className="choose-wrap">

                <h1 className="section-heading">
                    why Choose  <span className="blue">jen</span><span className="yellow">ceo</span>
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={expertIcon} alt="" />
                            </div>
                            <div className="info-wrap">
                                <h4>Get Professionals at Your Door-Step</h4>

                                <p>Stop searching, start achieving! Leave the vetting to us and unlock peace of mind with our curated network of dependable service professionals.</p>

                                <p>We proudly place top-tier home care professionals to assist with daily tasks and personal care, bringing support directly to your doorstep.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={customerIcon} alt="" />
                            </div>
                            <div className="info-wrap">
                                <h4>Customer satisfaction</h4>
                                <p>We specialize in providing high-quality services for all your daily needs, ensuring a safe and hygienic experience within the comfort of your home.</p>
                            </div>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={standerdIcon} alt="" />
                            </div>
                            <div className="info-wrap">
                                <h4>Highest Standards in Quality Assurance</h4>
                                <p>We understand the challenges and demands of finding trusted professionals for your service requirements.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={customerCareIcon} alt="" />
                            </div>
                            <div className="info-wrap">
                                <h4>24 / 7 Customer support</h4>
                                <p>We are available to offer you services with 24/7 support</p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
