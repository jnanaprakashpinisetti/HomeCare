import React from 'react';

import cook from '../../images/img/cook-maid.jpg';
import babyCare from '../../images/img/baby-care.jpg';
import oldAgeCare from '../../images/img/old-age-care.jpg';
import physotherophy from '../../images/img/physotherophy.jpg';

const OurServices = () => {
    return (
        <div className="services">
            <div className="hero-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>tell about your services</h1>
                            <h4>write small discreption</h4>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Home Care Services in Hyderabad</h2>
                        <p>The need for home care services in Hyderabad is growing rapidly as people’s work and personal lives are becoming increasingly intertwined, making it difficult for them to care for the elderly and those in need. JenCeo has partnered with the most reputable home care services to provide affordable, high-quality care. Our caretakers are highly qualified and trained in maintaining hygiene and promoting overall health</p>
                    </div>
                </div>
            </div>

            <div className="container service-wrap">
                <div className="row">
                    <div className="col-md-5">
                        <img src={babyCare} alt="baby care" />
                    </div>
                    <div className="col-md-7">
                        <h2>Baby Care</h2>
                        <p>Give your little ones the love and attention they deserve with our reliable babysitters.Experienced and compassionate. </p>
                        <p>Our caregivers provide a safe and nurturing environment for your children. Rest easy knowing they're in capable hands.</p>
                        
                        <div className="btn-wrapper">
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>

                </div>

            </div>

            <hr></hr>

            <div className="container service-wrap">
                <div className="row">
                    <div className="col-md-7">
                        <h2>Old Age Care</h2>
                        <p>Give your little ones the love and attention they deserve with our reliable babysitters.Experienced and compassionate, </p>
                        <p>our caregivers provide a safe and nurturing environment for your children. Rest easy knowing they're in capable hands.</p>
                        <h4>Included:</h4>
                        <ul>
                            <li>Include-1</li>
                            <li>Include-2</li>
                            <li>Include-3</li>
                            <li>Include-4</li>
                        </ul>
                        <h4>Not Included:</h4>
                        <ul>
                            <li>Not-Include</li>
                            <li>Not-Include</li>
                        </ul>
                        <div className="btn-wrapper">
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={oldAgeCare} alt="old age care" />
                    </div>
                </div>
            </div>
            <div className="hero-banner service-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h2>We will make life better for you</h2>
                            <p>We respect the fact that every individual is different and unique in terms of their likes, dislikes, interests and habits. Hence, we carry out a comprehensive assessment of your needs and then make significant efforts to match our care assistants to completely suit your needs to ensure compatibility, empathy and mutual respect.</p>
                            <p>We want to make a remarkable difference to your life with excellent care in your own home.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container service-wrap">
                <div className="row">
                    <div className="col-md-5">
                        <img src={cook} alt="cook - maid" />
                    </div>
                    <div className="col-md-7">
                        <h2>Made / Cook</h2>
                        <p>Give your little ones the love and attention they deserve with our reliable babysitters.Experienced and compassionate, our caregivers provide a safe and nurturing environment for your children. Rest easy knowing they're in capable hands.</p>
                        <h4>Included:</h4>
                        <ul>
                            <li>Include-1</li>
                            <li>Include-2</li>
                            <li>Include-3</li>
                            <li>Include-4</li>
                        </ul>
                        <h4>Not Included:</h4>
                        <ul>
                            <li>Not-Include</li>
                            <li>Not-Include</li>
                        </ul>
                        <div className="btn-wrapper">
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>

                </div>

            </div>
            <hr></hr>
            <div className="container service-wrap">
                <div className="row">
                    <div className="col-md-7">
                        <h2>Physotherophy</h2>
                        <p>Give your little ones the love and attention they deserve with our reliable babysitters.Experienced and compassionate, our caregivers provide a safe and nurturing environment for your children. Rest easy knowing they're in capable hands.</p>
                        <h4>Included:</h4>
                        <ul>
                            <li>Include-1</li>
                            <li>Include-2</li>
                            <li>Include-3</li>
                            <li>Include-4</li>
                        </ul>
                        <h4>Not Included:</h4>
                        <ul>
                            <li>Not-Include</li>
                            <li>Not-Include</li>
                        </ul>
                        <div className="btn-wrapper">
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={physotherophy} alt="physotherophy" />
                    </div>
                </div>
            </div>



        </div>
    );
}

export default OurServices;
