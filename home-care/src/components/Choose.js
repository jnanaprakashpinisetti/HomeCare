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
                                <h4>Get Expert Professional at Your Door-Step</h4>

                                <p>We understand the challenges and demands of finding trusted professionals for your service requirements.</p>

                                <p>We are specializing in recruiting and placing top home care professionals for all kinds of works for day-to-day life at your door step </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={customerIcon} alt="" />
                            </div>
                            <div className="info-wrap">
                                <h4>Customer satisfaction & Quality Output</h4>
                                <p>We specialized in all kinds of works Quality for day-to-day life. We have taken multiple steps to make sure a hygienic service experience within the safety of your home.</p>
                            </div>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={standerdIcon} alt="" />
                            </div>
                            <div className="info-wrap">
                                <h4>Highest Standards & Quality Assurance</h4>

                                <p>We understand the challenges and demands of finding trusted professionals for your service requirements.</p>
                                <p>We are specializing in recruiting and placing top home care professionals for all kinds of works for day-to-day life at your door step. </p>
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
