import React from 'react';
import nursing from "../images/carousal/nursing-mobile.jpg";
import patientCare from "../images/carousal/patient-care-mobile.jpg";
import oldagecar from "../images/carousal//old-age-care-mobile.jpg";
import babycare from "../images/carousal/baby-care-mobile.jpg";
import cook from "../images/carousal/cook-mobile.jpg";

export default function MyCarousal() {
    return (

        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ul className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
            </ul>

            <div className="carousel-inner">
            <div className="carousel-item carousel-1 active">
                    <div className="innet-text">
                    <h2 className='section-heading'><span className='blue'>BEST NURSING</span> <br></br> <span className='yellow'>SERVICES </span> IN HYDERABAD</h2>
                        <h5>Providing compassionate, professional nursing care at home. Trusted by families across Hyderabad for personalized and reliable support</h5>
                    </div>
                    <img className="d-mobile" src={nursing} alt="nursing" />

                </div>

                <div className="carousel-item carousel-2">
                    <div className="innet-text">
                    <h2 className='section-heading'><span className='blue'>PATIENT CARE</span> <br></br> <span className='yellow'>SERVICES </span> IN HYDERABAD</h2>
                        <h5>Expert patient care at your doorstep. Delivering comfort, recovery, and support with trusted caregivers in Hyderabad.</h5>
                    </div>
                    <img className="d-mobile" src={patientCare} alt="patientCare" />

                </div>

                <div className="carousel-item carousel-3">
                    <div className="innet-text">
                        <h2 className='section-heading'><span className='blue'>OLD AGE CARE</span> <span className='yellow'> SERVICE</span></h2>
                       <h5>Compassionate care for your loved ones. Trusted support, comfort, and dignity for seniors in their golden years.</h5>
                    </div>
                    <img className="d-mobile" src={oldagecar} alt="Old age care" />
                </div>

                <div className="carousel-item carousel-4">
                    <div className="innet-text">
                    <h2 className='section-heading'><span className='blue'>BABY CARE </span> <br></br> <span className='yellow'>SERVICES </span> IN HYDERABAD</h2>
                        <h5>Gentle, reliable, and expert baby care at home. Ensuring your little ones are safe, happy, and well-cared for in Hyderabad.</h5>
                    </div>
                    <img className="d-mobile" src={babycare} alt="baby care" />

                </div>
                <div className="carousel-item carousel-5">

                    <div className="innet-text">
                        <h2 className='section-heading'><span className='blue'>COOK / MAID</span> <span className='yellow'> SERVICE</span></h2>
                        <h5>Skilled and trustworthy cooks and maids for your home. Delivering cleanliness, delicious meals, and hassle-free living in Hyderabad.</h5>
                    </div>
                    <img className="d-mobile" src={cook} alt="cook" />

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
