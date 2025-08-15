import React, {useEffect} from 'react';

import Carousal from '../Carousal';
import Card from '../Card';
import Choose from '../Choose';
import HowToProcess from '../HowToProcess';
import SendMessage from '../SendMessage';
import EnquiryForm from '../EnquiryForm';
import ReactGA from 'react-ga';
import Watsapp from '../Watsapp';
import { Helmet } from 'react-helmet';

const Home = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <>
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
            <Carousal />
            <Card />
            <Choose />
            <HowToProcess />
            {/* <SendMessage /> */}
            <EnquiryForm />

                     <div className='container map'>
                    <div className="row">
                        <div className="col-md-12">
                              <h2>Our Location</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.69729562386!2d78.29143277622855!3d17.521957598912334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98cbd24f037b%3A0xde9386f2938cfadb!2sJenCeo!5e0!3m2!1sen!2sin!4v1755257374294!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

        </>
    );
}

export default Home;
