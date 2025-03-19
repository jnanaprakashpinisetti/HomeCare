import React, {useEffect} from 'react';
import EnquiryForm from '../EnquiryForm';
import Watsapp from '../Watsapp';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const Faq = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <div className="faq">
               <Helmet>
                <title>Home Care Services | www.jenceo.com</title>
                <meta name='Baby care services' content='Baby care services'/>
                <meta name='Baby care services in Hyderabad' content='Baby care services in Hyderabad'/>
                <meta name='Baby care services near to me' content='Baby care services near to me'/>

                <meta name='Professional Baby care' content='Professional Baby care'/>
                <meta name='Professional Baby care in Hyderabad' content='Professional Baby care in Hyderabad'/>
                <meta name='Professional Baby care in near to me' content='Professional Baby care in near to me'/>
                
                <meta name='Home Baby care' content='Home Baby care'/>
                <meta name='Home Baby care in Hyderabad' content='Home Baby care in Hyderabad'/>
                <meta name='Home Baby care near to me' content='Home Baby care near to me'/>

                <meta name='Elderly care services' content='Elderly care services'/>
                <meta name='Elderly care services in Hyderabad' content='Elderly care services in Hyderabad'/>
                <meta name='Elderly care services in near to me' content='Elderly care services in near to me'/>

                <meta name='Professional Elderly care' content='Professional Elderly care'/>
                <meta name='Professional Elderly care in Hyderabad' content='Professional Elderly care in Hyderabad'/>
                <meta name='Professional Elderly care in Near to me' content='Professional Elderly care in Near to me'/>

                <meta name='Quality baby care' content='Quality baby care'/>
                <meta name='Quality baby care in Hyderabad' content='Quality baby care in Hyderabad'/>
                <meta name='Quality baby care in near to me' content='Quality baby care in near to me'/>

                <meta name='Senior care services' content='Senior care services'/>
                <meta name='Senior care services in Hyderabad' content='Senior care services in Hyderabad'/>
                <meta name='Senior care services in Near to me' content='Senior care services in Near to me'/>

                <meta name='Professional Old age care' content='Professional Old age care'/>
                <meta name='Professional Old age care in Hyderabad' content='Professional Old age care in Hyderabad'/>
                <meta name='Professional Old age care in near to me' content='Professional Old age care in near to me'/>

                <meta name='Patient care' content='Patient care'/>
                <meta name='Patient care in Hyderabad' content='Patient care in Hyderabad'/>
                <meta name='Patient care in near to me' content='Patient care in near to me'/>

                <meta name='Professional patient care' content='Professional patient care'/>
                <meta name='Professional patient care in Hyderabad' content='Professional patient care in Hyderabad'/>
                <meta name='Professional patient care in near to me' content='Professional patient care in near to me'/>


                <meta name='Best patinet care' content='Best patinet care'/>
                <meta name='Best patinet care in hyderabad' content='Best patinet care in hyderabad'/>
                <meta name='Best patinet care in near to me' content='Best patinet care in near to me'/>

                <meta name='Nursing services' content='Nursing services'/>
                <meta name='Nursing services in Hyderabad' content='Nursing services in Hyderabad'/>
                <meta name='Nursing services in Near to me' content='Nursing services in Near to me'/>

                <meta name='Best nursing services' content='Best nursing services'/>
                <meta name='Best nursing services Near to me' content='Best nursing services Near to me'/>
                <meta name='Best nursing services in Hyderabad' content='Best nursing services in Hyderabad'/>

                <meta name='Best nursing services at home in Hyderabad' content='Best nursing services at home in Hyderabad'/>
                <meta name='Best nursing services at home near to me' content='Best nursing services at home near to me'/>
                <meta name='Best nursing services at home' content='Best nursing services at home'/>
                
                <meta name='Home cleaning services' content='Home cleaning services'/>
                <meta name='Home cleaning services in Hyderabad' content='Home cleaning services in Hyderabad'/>
                <meta name='Home cleaning services near to me' content='Home cleaning services near to me'/>

                <meta name='Best price home care' content='Best price home care'/>
                <meta name='Best price home care near to me' content='Best price home care near to me'/>
                <meta name='Best price home care in hyderabad' content='Best price home care in hyderabad'/>


                <meta name='Personalized baby care' content='Personalized baby care'/>
                <meta name='Personalized baby care in hyderabad' content='Personalized baby care in hyderabad'/>
                <meta name='Personalized baby care near to me' content='Personalized baby care near to me'/>

                <meta name='Affordable elderly care' content='Affordable elderly care'/>
                <meta name='Affordable elderly care in hyderabad' content='Affordable elderly care in hyderabad'/>
                <meta name='Affordable elderly care near to me' content='Affordable elderly care near to me'/>
                
                <meta name='Profitional Home care service' content='Profitional Home care service'/>
                <meta name='Profitional Home care service near to me' content='Profitional Home care service near to me'/>
                <meta name='Profitional Home care service in Hyderabad' content='Profitional Home care service in Hyderabad'/>

              
              </Helmet>
            <Watsapp/>
            
            <div className="hero-banner mt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-heading"> <span className="blue"> Got a question ? <br /></span> <span className="yellow"> get your answer </span></h2 >
                            <h5 > We are available to help you around the clock,  <br />so feel free to ask any questions you may have.</h5 >
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="panel-group" id="accordion">
                    <h2> Frequently asked questions </h2> <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapse1"> What kind of service do you provide ? </a> </h4>
                        </div>
                        <div id="collapse1" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p> We provide all the household services, be it hiring a housemaid or a house servant staff, babysitter or a nanny, cook or chef, elderly care or patient care, or a nurse - we provide solutions
                                    for all your domestic HELP requirement. </p>
                                <ul>
                                    <li> House Keeping </li>
                                    <li> Baby Care </li>
                                    <li> In - house cooks / Maids </li>
                                    <li> Golden age support </li>
                                    <li> Beside Aaya / Attender </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"> How will our relationship work ? </a> </h4>
                        </div>
                        <div id="collapse2" className="panel-collapse collapse ">
                            <div className="panel-body"> We recognize the importance of communication, especially when it comes to important valuables in your home and any specific cleaning requests you may have.Our housecleaning franchises value your trust and do everything possible to earn it by performing reliable, affordable, top - notch cleaning services to meet your needs and exceed your expectations </div> </div> </div>


                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"> How can I place a service request or a requirement ? </a> </h4> </div> <div id="collapse3"
                                    className="panel-collapse collapse ">
                            <div className="panel-body"> You can simply < strong > Call </strong> or <strong>Watsapp</strong > to our customer care no. < a href="tell:9888559955"> < strong > 9888 559955 </strong> </a > or visit our website < a href="www.jenceo.com//Contact"> jenceo.com / Contact </a> for placing your service request. We’re available 27/7 </div> </div> </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapse4"> Do you have a Guarantee ? </a> </h4>
                        </div>
                        <div id="collapse4" className="panel-collapse collapse ">
                            <div className="panel-body"> OUR SERVICES ARE ALWAYS GUARANTEED : Just call or email
                                if you have a question or concern about our services, and we will contact you within 24 hours to solve your issue.
                            </div>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapse5"> Why should I trust JenCeo Home Care Services ? </a> </h4>
                        </div>
                        <div id="collapse5" className="panel-collapse collapse">
                            <div className="panel-body"> <p>
                                We’ re proud to offer professional house cleaning services and employ residential housekeepers, who pride themselves on top - quality services.After undergoing an extensive background check, each member of our team is thoroughly trained on every step of our detailed cleaning plans.We also back all of our work with a 24 - hour warranty.These are just a few of the many reasons why customers trust JenCeo Services. </p></div >
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse6"> Do you have Professionally Workers ? </a> </h4>
                        </div>
                        <div id="collapse6" className="panel-collapse collapse ">
                            <div className="panel-body">
                                <p>JenCeo follows a 3 Step Verification Process for every Employee. </p>
                                <ul>
                                    <li> ID we verify the valid of the govt.ID the person carries </li>
                                    <li> Court / Criminal Records </li>
                                    <li> Address, which reports whether the person stays at the place where he / she claims to be a resident. </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse7"> How can I pay ? </a> </h4>
                        </div>
                        <div id="collapse7" className="panel-collapse collapse ">
                            <div className="panel-body"> <p> We have all forms of digital payment options available. </p>
                                <ul>
                                    <li> Cash / Cheque </li>
                                    <li> GooglePay </li>
                                    <li> PhonePay </li>
                                    <li> Paytm </li>
                                    <li> Net Banking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EnquiryForm />

        </div>
    );
}

export default Faq;
