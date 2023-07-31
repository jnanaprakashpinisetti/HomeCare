import React from 'react';
import getInTouchIcon from '../images/icons/GetInTouchIcon.svg';
import freeAssessment from '../images/icons/freeAssessmentIcon.svg';
import careerAssigned from '../images/icons/CareerAssignedIcon.svg';
import getYorMaid from '../images/icons/getYorMaid.svg';

export default function HowToProcess() {
    return (
        <section className="process">
            <div className="section-heaidng">
                <h1 className="section-heading">
                    <span className="blue">how to</span><span className="yellow"> process</span>
                </h1>
            </div>

            <div className="container">
                <div className="row">

                    {/* card-1 */}
                    <div className="col-md-3" >
                        <div className="card " >
                            <div className="img-wrapper">
                                <img src={getInTouchIcon} alt="baby care" />
                            </div>
                            <div className="card-body">
                                <h4>Get In Touch</h4>
                                <p>Talk to us and tell us your individual needs so we can start to tailor an individual plan of care.</p>
                            </div>

                        </div>
                    </div>

                    {/* card-2 */}
                    <div className="col-md-3" >
                        <div className="card " >
                            <div className="img-wrapper">
                                <img src={freeAssessment} alt="baby care" />
                            </div>
                            <div className="card-body">
                                <h4>Free Assessment</h4>
                                <p>Our support team will make arrangements to meet you personally for a full assesment.</p>
                            </div>

                        </div>
                    </div>

                    {/* card-3 */}
                    <div className="col-md-3" >
                        <div className="card " >
                            <div className="img-wrapper">
                                <img src={careerAssigned} alt="baby care" />
                            </div>
                            <div className="card-body">
                                <h4>Career Assigned</h4>
                                <p>We carefully match our clients to their Care & Support worker based on a wide range of criteria.</p>
                            </div>

                        </div>
                    </div>

                    {/* card-4 */}
                    <div className="col-md-3" >
                        <div className="card " >
                            <div className="img-wrapper">
                                <img src={getYorMaid} alt="baby care" />
                            </div>
                            <div className="card-body">
                                <h4>Start of Care</h4>
                                <p>Your care with Caremark will begin that has been tailored specifically to meet your individual needs.</p>
                            </div>

                        </div>
                    </div>



                </div>
            </div>

        </section>
    )
}
