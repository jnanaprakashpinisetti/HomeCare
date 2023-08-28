import React from 'react';
import hero1 from '../images/carousal/heor-1.jpg';
import hero2 from '../images/carousal/heor-2.jpg';
// import hero3 from '../images/carousal/heor-3.jpg'
// import Navbar from './components/myCarousel';

export default function MyCarousal() {
    return (

        <div id="myCarousel" className="carousel slide mt-60" data-ride="carousel">

            <ul className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
                <  div className="carousel-item carousel-1 active">
                    <div className="innet-text">
                        <h2>test1</h2>
                        <p>Services requirements and providing cost effective and sustainable solutions. To standardize these Services, we have paved our way into forming a group...</p>
                    </div>

                </div>
                <div className="carousel-item carousel-2">

                    <div className="innet-text">
                        <h2>test1</h2>
                        <p>
                            Services which started about 3 years ago under their flag ship company Jawan Guarding Services for providing the Housekeeping / Cleaning and Disinfection Services to our esteemed
                        </p>
                    </div>
                </div>
                <div className="carousel-item carousel-3">
                    <div className="innet-text">
                        <h2>test3</h2>
                        <p>
                            clientele who were using our Security and other Allied Services. As we move forward into providing the clients varied Solutions and meeting their standards in
                        </p>
                    </div>
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
