import React from 'react';

import services from '../../images/img/sample-2.jpg';

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
                    <div className="col-md-4">
                        <img src={services} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h2>Baby Care</h2>
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

            <div className="container service-wrap">
                <div className="row">
                <div className="col-md-8">
                        <h2>Old Age Care</h2>
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
                    <div className="col-md-4">
                        <img src={services} alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-banner service-banner">
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

                <div className="container service-wrap">
                <div className="row">
                    <div className="col-md-4">
                        <img src={services} alt="" />
                    </div>
                    <div className="col-md-8">
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
            <div className="container service-wrap">
                <div className="row">
                <div className="col-md-8">
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
                    <div className="col-md-4">
                        <img src={services} alt="" />
                    </div>
                </div>
            </div>



        </div>
    );
}

export default OurServices;
