import React from 'react';

import services from '../../images/img/sample-2.jpg';

const AboutUs = () => {
    return (
        <div className="about-us mt-60">
            <div className="hero-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>About-us</h1>
                        </div>

                    </div>

                </div>
            </div>
  <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>Our Story</h2>
                        <p>Our story began with a simple idea - helping others. As humans, we are bound to help others and are always seeking 'JenCeo's High'. The warm glow of pro sociality certainly drives us in helping a fellow human being. So in 2022, when the world was at the highest gear and people were time constrained, we launched JenCeo as a platform to seek and provide help.</p>
                        <p>We saw people, especially in urban India struggling to complete tasks, look after their loved ones. JenCeo was designed in such a way that anyone could request help on our platform to be taken up by our verified community members</p>
                        <p>Our team understood this problem quite well as we had senior parents who lived alone far away from us. We knew the issues seniors faced everyday and it motivated us immensely to use Helpee as a platform to provide on-demand help for our loved ones.</p>
                    </div>
                    <div className="col-sm-4">
                    <img src={services} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutUs;
