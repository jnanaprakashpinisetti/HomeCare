import React, {useEffect} from 'react';

import aboutUs from '../../images/img/about-us-2.jpg';
import Watsapp from '../Watsapp';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
        useEffect(() => {
            ReactGA.pageview(window.location.pathname)
        }, [])
    return (
        <div className="about-us mt-80">
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
            <div className="hero-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h2 className="section-heading"><span className="blue"> About </span><span className="yellow">Us</span></h2>
                            <h5>Our mission is to empower our customers to lead joyous and fulfilling lives, fully fostering independence. We are dedicated to supporting you on your journey to happiness and autonomy.</h5>
                        </div>

                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>Our Story</h2>
                        <p>Our story began with a simple idea - helping others. As humans, we are bound to help others and are always seeking 'JenCeo's High'. The warm glow of pro sociality certainly drives us in helping a fellow human being. So, in 2022, when the world was at the highest gear and people were time constrained, we launched JenCeo as a platform to seek and provide help.</p>
                        <p>We saw people, especially in urban India struggling to complete tasks, look after their loved ones. JenCeo was designed in such a way that anyone could request help on our platform to be taken up by our verified community members.</p>
                        <p>Our team understood this problem quite well as we had senior parents who lived alone far away from us. We knew the issues seniors faced everyday and it motivated us immensely to use Helpee as a platform to provide on-demand help for our loved ones.</p>
                    </div>
                    <div className="col-sm-4">
                        <img src={aboutUs} alt="ourstory" />
                    </div>
                </div>

            </div>
            <hr/>
            
            <div className="container">
            <h2>Guaranteed Comfort</h2>
            <ul>
                <li>We serve our customers with utmost dignity and try our best to make them feel comfortable and reduce their anxiety.</li>
                <li>We aim to fully understand your precise needs and preferences before our service begins.</li>
                <li>Only when you are happy with the support plan we have agreed together, will we select a care worker to meet you.</li>
                <li> It will be someone with appropriate experience, qualifications and skills, and you will always be able to change your care worker if you wish.</li>
                <li>You'll find that you will soon get to know your career and feel comfortable with them.</li>
                <li>You'll also get to know your local JenCeo Field Care Supervisor, who will make regular visits to your home to check that you are entirely happy with the support you are receiving.</li>
                <li>And you are encouraged to speak to us at any time if you have any concerns about your safety or wellbeing or wish to change the way your support is arranged.</li>
            </ul>
            </div>
        </div>
    );
}

export default AboutUs;
