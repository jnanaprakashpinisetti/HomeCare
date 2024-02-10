import React from 'react';
import cook from "../images/carousal/cook-mobile.jpg";
import babycar from "../images/carousal/baby-care-mobile.jpg";
import oldagecar from "../images/carousal//old-age-care-mobile.jpg";

export default function MyCarousal() {
    return (

        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ul className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
                <div className="carousel-item carousel-1 active">
                    <div className="innet-text">
                    <h2 >Best Home Care Services <br></br> In Hyderabad</h2>
                        <h5>Discover unparalleled comfort and care with our JenCeo Home care services in Hyderabad.</h5>
                    </div>
                    <img className="d-mobile" src={cook} alt="cook" />

                </div>
                <div className="carousel-item carousel-2">

                    <div className="innet-text">
                        <h2>Baby Care Service</h2>
                        <h5>Nurturing Tomorrow, Today: Exceptional Baby Care Services Tailored with Love and Expertise.</h5>
                    </div>
                    <img className="d-mobile" src={babycar} alt="cook" />

                </div>
                <div className="carousel-item carousel-3">
                    <div className="innet-text">
                        <h2>Old age care Service</h2>
                       <h5>Enriching Lives, Embracing Wisdom: Compassionate Old Age Care Tailored for Dignity and Comfort.</h5>
                    </div>
                    <img className="d-mobile" src={oldagecar} alt="cook" />
                </div>
            </div>

            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>

    )
}
