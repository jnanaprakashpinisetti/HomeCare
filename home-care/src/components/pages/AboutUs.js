import React, { useEffect } from 'react';

import aboutUs from '../../images/img/about-us-2.jpg';
import ratanTata from '../../images/img/ratan-tata.png';
import abulKalam from '../../images/img/abdul-kalam.png';
import swamiVivekanandh from '../../images/img/swami-vivekanandha.png';
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
                <meta name='Baby care services' content='Baby care services' />
                <meta name='Baby care services in Hyderabad' content='Baby care services in Hyderabad' />
                <meta name='Baby care services near to me' content='Baby care services near to me' />

                <meta name='Professional Baby care' content='Professional Baby care' />
                <meta name='Professional Baby care in Hyderabad' content='Professional Baby care in Hyderabad' />
                <meta name='Professional Baby care in near to me' content='Professional Baby care in near to me' />

                <meta name='Home Baby care' content='Home Baby care' />
                <meta name='Home Baby care in Hyderabad' content='Home Baby care in Hyderabad' />
                <meta name='Home Baby care near to me' content='Home Baby care near to me' />

                <meta name='Elderly care services' content='Elderly care services' />
                <meta name='Elderly care services in Hyderabad' content='Elderly care services in Hyderabad' />
                <meta name='Elderly care services in near to me' content='Elderly care services in near to me' />

                <meta name='Professional Elderly care' content='Professional Elderly care' />
                <meta name='Professional Elderly care in Hyderabad' content='Professional Elderly care in Hyderabad' />
                <meta name='Professional Elderly care in Near to me' content='Professional Elderly care in Near to me' />

                <meta name='Quality baby care' content='Quality baby care' />
                <meta name='Quality baby care in Hyderabad' content='Quality baby care in Hyderabad' />
                <meta name='Quality baby care in near to me' content='Quality baby care in near to me' />

                <meta name='Senior care services' content='Senior care services' />
                <meta name='Senior care services in Hyderabad' content='Senior care services in Hyderabad' />
                <meta name='Senior care services in Near to me' content='Senior care services in Near to me' />

                <meta name='Professional Old age care' content='Professional Old age care' />
                <meta name='Professional Old age care in Hyderabad' content='Professional Old age care in Hyderabad' />
                <meta name='Professional Old age care in near to me' content='Professional Old age care in near to me' />

                <meta name='Patient care' content='Patient care' />
                <meta name='Patient care in Hyderabad' content='Patient care in Hyderabad' />
                <meta name='Patient care in near to me' content='Patient care in near to me' />

                <meta name='Professional patient care' content='Professional patient care' />
                <meta name='Professional patient care in Hyderabad' content='Professional patient care in Hyderabad' />
                <meta name='Professional patient care in near to me' content='Professional patient care in near to me' />


                <meta name='Best patinet care' content='Best patinet care' />
                <meta name='Best patinet care in hyderabad' content='Best patinet care in hyderabad' />
                <meta name='Best patinet care in near to me' content='Best patinet care in near to me' />

                <meta name='Nursing services' content='Nursing services' />
                <meta name='Nursing services in Hyderabad' content='Nursing services in Hyderabad' />
                <meta name='Nursing services in Near to me' content='Nursing services in Near to me' />

                <meta name='Best nursing services' content='Best nursing services' />
                <meta name='Best nursing services Near to me' content='Best nursing services Near to me' />
                <meta name='Best nursing services in Hyderabad' content='Best nursing services in Hyderabad' />

                <meta name='Best nursing services at home in Hyderabad' content='Best nursing services at home in Hyderabad' />
                <meta name='Best nursing services at home near to me' content='Best nursing services at home near to me' />
                <meta name='Best nursing services at home' content='Best nursing services at home' />

                <meta name='Home cleaning services' content='Home cleaning services' />
                <meta name='Home cleaning services in Hyderabad' content='Home cleaning services in Hyderabad' />
                <meta name='Home cleaning services near to me' content='Home cleaning services near to me' />

                <meta name='Best price home care' content='Best price home care' />
                <meta name='Best price home care near to me' content='Best price home care near to me' />
                <meta name='Best price home care in hyderabad' content='Best price home care in hyderabad' />


                <meta name='Personalized baby care' content='Personalized baby care' />
                <meta name='Personalized baby care in hyderabad' content='Personalized baby care in hyderabad' />
                <meta name='Personalized baby care near to me' content='Personalized baby care near to me' />

                <meta name='Affordable elderly care' content='Affordable elderly care' />
                <meta name='Affordable elderly care in hyderabad' content='Affordable elderly care in hyderabad' />
                <meta name='Affordable elderly care near to me' content='Affordable elderly care near to me' />

                <meta name='Profitional Home care service' content='Profitional Home care service' />
                <meta name='Profitional Home care service near to me' content='Profitional Home care service near to me' />
                <meta name='Profitional Home care service in Hyderabad' content='Profitional Home care service in Hyderabad' />


            </Helmet>
            <Watsapp />
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
                        <h2>Inspired by Greatness, Guided by Values</h2>
                        <br></br>
                <div className="row">
                    <div className="col-sm-12">
                        <p>At <strong>JenCeo</strong>, we don’t just provide home care services—we build relationships rooted in trust, compassion, and integrity. Our foundation is inspired by the timeless wisdom of three legendary visionaries: <strong>Sri Ratan Tata, Dr. APJ Abdul Kalam</strong>, and <strong>Swami Vivekananda</strong>. Their teachings guide us in delivering care that goes beyond duty, embracing <strong>moral values, ethical service</strong>, and the universal <strong>law of karma</strong>.</p>
                    </div>
                    {/* <div className="col-sm-3">
                        <img src={aboutUs} alt="ourstory" />
                    </div> */}
                </div>

            </div>
            <hr />

            {/* Ratan Tata Ji */}
            <div className='container'>
                <h3>Inspired by Ratan Tata – Compassion in Action</h3>
                <br></br>
                <div className='row'>
                    <div className='col-sm-3'>
                        <img src={ratanTata} alt="ratanTata" />
                    </div>
                    <div className='col-sm-9'>
                        <p><em>"Ups and downs in life are very important to keep us going because a straight line, even in an ECG, means we are not alive</em> <strong> – Ratan Tata</strong></p>
                        <p>Like Ratan Tata, we believe that true success lies in serving others with humility and empathy. His dedication to ethical business and social responsibility inspires us to:</p>
                        <ul>
                            <li>Treat every client with <strong>dignity and respect</strong>.</li>
                            <li>Operate with <strong>transparency and honesty</strong> in all dealings.</li>
                            <li>Give back to society by ensuring <strong>affordable, high-quality care</strong> for those in need.</li>
                        </ul>

                    </div>

                </div>

            </div>
            <hr />

            {/* Abdul Kalam Ji */}
            <div className='container'>
                <h3>Guided by Dr. APJ Abdul Kalam – Service with Integrity</h3>
                <br></br>
                <div className='row'>

                    <div className='col-sm-9'>
                        <p><em>"Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action."</em> <strong>– Dr. APJ Abdul Kalam</strong></p>
                        <p>Dr. Kalam’s life was a testament to <strong>selfless service and unwavering integrity</strong>. Following his principles, we:</p>
                        <ul>
                            <li>Strive for <strong>excellence in care</strong> with a scientific yet compassionate approach.</li>
                            <li>Believe in <strong>empowering caregivers</strong> through continuous learning and ethical training.</li>
                            <li>Uphold <strong>truth and accountability</strong> in every interaction, knowing that <strong>good karma returns in kind</strong>.</li>
                        </ul>
                    </div>

                    <div className='col-sm-3'>
                        <img src={abulKalam} alt="abulKalam" />
                    </div>

                </div>

            </div>
           <hr></hr>

            {/* Swami Vivekananda */}

            <div className='container'>
                <h3>Rooted in Swami Vivekananda’s Wisdom – The Law of Karma</h3>
                <br></br>
                <div className='row'>
                    <div className='col-sm-3'>
                        <img src={swamiVivekanandh} alt="swami Vivekanandh" />
                    </div>
                    <div className='col-sm-9'>
                        <p><em>"The greatest religion is to be true to your own nature. Have faith in yourselves!"</em> <strong>– Swami Vivekananda</strong></p>
                        <p>Swami Vivekananda taught that <strong>selfless service (Karma Yoga) is the highest form of duty</strong>. We embrace this philosophy by:</p>
                        <ul>
                            <li>Ensuring that <strong>every act of care is performed with sincerity and love</strong></li>
                            <li>Believing that<strong> what we give to the world, we receive in retur</strong>n—hence, we serve with pure intentions</li>
                            <li>Encouraging <strong>moral strength and ethical discipline</strong> in our team, because true success comes from righteous actions.</li>
                        </ul>
                    </div>

                </div>

            </div>

            <hr></hr>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <p>At <strong>JenCeo</strong>, we don’t just follow policies—we follow principles. Every caregiver is trained not just in skills but in values, because we know that the way we treat others defines who we are.</p>
                        <h2>Karma is our compass. Ethics is our foundation. Service is our purpose.</h2>
                        <h4>Join us in redefining home care—where compassion meets karma, and trust is earned, not given.</h4>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutUs;
