import React from 'react';

const Faq = () => {
    return (
        <div className="faq">
            <div className="hero-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>FAQ</h1>
                        </div>

                    </div>

                </div>
            </div>

            <div className="container">
                <div className="panel-group" id="accordion">
                    <h2>Frequently asked questions</h2>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">What kind of service do you provide?</a>
                            </h4>
                        </div>
                        <div id="collapse1" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>We provide all the household services, be it hiring a housemaid or a house servant staff, babysitter or a nanny, cook or chef, elderly care or patient care, or a nurse- we provide solutions for all your domestic HELP requirement.</p>
                                <ul>
                                    <li>House Keeping</li>
                                    <li>Baby Care</li>
                                    <li>Cooks / Maid Servant</li>
                                    <li>Old Age People Care</li>
                                    <li>Beside Aaya / Attender</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">How will our relationship work?</a>
                            </h4>
                        </div>
                        <div id="collapse2" className="panel-collapse collapse ">
                            <div className="panel-body">At Maid, we recognize the importance of communication, especially when it comes to important valuables in your home and any specific cleaning requests you may have. Our housecleaning franchise owners value your trust and do everything possible to earn it by performing reliable, affordable, top-notch cleaning services designed to meet your needs and exceed your expectations</div>
                        </div>
                    </div>


                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">How can I place a service request or a requirement?</a>
                            </h4>
                        </div>
                        <div id="collapse3" className="panel-collapse collapse ">
                            <div className="panel-body">You can simply <strong> Call</strong> or <strong>Watsapp</strong>  to our customer care no. <a href="tell:9888559955"> <strong> 9888 559955</strong> </a> or visit our website <a href="www.jenceo.com//Contact">jenceo.com/Contact</a> for placing your service request or your requirement. We’re working 27/7  </div>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Do you have a Guarantee?</a>
                            </h4>
                        </div>
                        <div id="collapse4" className="panel-collapse collapse ">
                            <div className="panel-body">OUR SERVICES ARE ALWAYS GUARANTEED: Just call or email if you have a question or concern about your cleaning, and we will return to your home the next day! Please call within 24 hours of your cleaning so we can promptly respond.</div>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">Why should I trust JenCeo Home Caere Services?</a>
                            </h4>
                        </div>
                        <div id="collapse5" className="panel-collapse collapse ">
                            <div className="panel-body"><p>
                                We’re proud to offer professional house cleaning services and employ residential housekeepers who pride themselves on top-quality services. After undergoing an extensive background check, each member of our team is thoroughly trained on every step of our detailed cleaning plans. We also back all of our work with a 24-hour warranty. These are just a few of the many reasons why customers trust JenCeo Services.</p></div>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">Do you have Professionally Workers?</a>
                            </h4>
                        </div>
                        <div id="collapse6" className="panel-collapse collapse ">
                            <div className="panel-body"><p>
                                JenCeo follows a 2/3 Step Verification Process for every Employee.</p>
                                <ul>
                                    <li>ID Checks, which checks the validity of the govt. ID the person carries</li>
                                    <li>Court/Criminal Records Check, which scans the court records of the individual at the neighbouring Indian District Courts around his/her address,</li>
                                    <li>Address Check, which reports whether the person stays at the place where one claims to be staying.</li>
                                </ul>
                                </div>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">How can I pay?</a>
                            </h4>
                        </div>
                        <div id="collapse7" className="panel-collapse collapse ">
                            <div className="panel-body"><p>We have all forms of digital payment options available.</p>
                                <ul>
                                    <li>Cash / Cheque</li>
                                    <li>Googlepay</li>
                                    <li>Phonepay</li>
                                    <li>Paytm</li>
                                    <li>Online</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Faq;
