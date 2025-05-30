import React, {useEffect} from 'react';

import cook from '../../images/img/cook-maid.jpg';
import babyCare from '../../images/img/baby-care.jpg';
import oldAgeCare from '../../images/img/old-age-care.jpg';
import physotherophy from '../../images/img/physotherophy.jpg';
import patentCare from '../../images/img/patent-care.jpg';
import officeCleaing from '../../images/img/office-cleaning.jpg';
import serviceMobileHero from '../../images/img/services-mobile.jpg'
import Watsapp from '../Watsapp';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const OurServices = () => {
        useEffect(() => {
            ReactGA.pageview(window.location.pathname)
        }, [])
    
    return (
        <div className="services">
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
                        <div className="col-md-6">
                        <h2 className="section-heading">Best<span className="blue"> Home Care Services  </span> <span className="d-desktop"></span> In  <span className="yellow">Hyderabad</span></h2>
                           
                            <h5>We provide baby care, old-age care, cooking, physiotherapy, and office cleaning services at the best price and with high quality.</h5>
                        </div>
                        <div className="col-md-6 visable-mobile">
                            <img src={serviceMobileHero} alt='jenceo services'/>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Home Care Services in Hyderabad</h2>
                        <p>The need for home care services in Hyderabad is growing rapidly as people’s work and personal lives are becoming increasingly intertwined, making it difficult for them to care for the elderly and those in need. JenCeo has partnered with the most reputable home care services to provide affordable, high-quality care. Our caretakers are highly qualified and trained in maintaining hygiene and promoting overall health.</p>
                    </div>
                </div>
            </div>

            <div className="container service-wrap" id="baby-care">
                <div className="row">
                    <div className="col-md-4">
                        <img src={babyCare} alt="baby care" />
                    </div>
                    <div className="col-md-8">
                        <h2>Baby Care</h2>

                        <p>where we understand that every little one deserves the utmost care and attention. Our dedicated team of childcare experts is committed to providing a nurturing environment that supports the healthy development and happiness of your precious bundle of joy.</p>
                        <p>Give your little ones the love and attention they deserve with our reliable babysitters. Experienced and compassionate. </p>
                        <p>Our caregivers provide a safe and nurturing environment for your children. Rest easy knowing they're in capable hands.</p>
                        <ul>
                            <li><strong>Expertise in Infant Care:</strong> Our team has a wealth of experience in caring for infants, ensuring that your baby receives the best care possible.</li>
                            <li><strong>Parental Involvement:</strong> We believe in fostering a strong partnership with parents. Regular communication and involvement in your baby's care are key aspects of our approach.</li>
                            <li><strong>Holistic Care:</strong> Beyond basic needs, we focus on the holistic well-being of your baby, addressing emotional, social, and developmental aspects.</li>
                            <li><strong>Flexible Programs:</strong> Our baby care programs are designed to accommodate the unique schedules and preferences of each family, providing flexibility and convenience.</li>
                        </ul>

                        {/* <div className="btn-wrapper">
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div> */}
                    </div>

                </div>

            </div>

            <hr></hr>

            <div className="container service-wrap" id="old-age-care">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Old Age Care</h2>
                        <p>where we redefine the art of aging gracefully. Our dedicated team is committed to providing compassionate and comprehensive old-age care tailored to the unique needs of your loved ones.</p>
                        <p>With a focus on promoting independence, well-being, and dignity, we offer a range of personalized services to ensure a comfortable and fulfilling lifestyle.</p>
                        <h4>Services include</h4>
                        <ul>
                            <li>Feeding your loved ones</li>
                            <li>Our caretaker will assist you in walking and preventing falls</li>
                            <li>Bathing, brushing teeth, and denture care</li>
                            <li>Assist in commode, bedpan and urinal</li>
                            <li>Dressing & Grooming</li>
                            <li>Diaper changing</li>
                            <li>Prevent bedsores</li>
                            <li>Provide timely medicines</li>
                        </ul>

                        {/* <div className="btn-wrapper">
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div> */}
                    </div>
                    <div className="col-md-4">
                        <img src={oldAgeCare} alt="old age care" />
                    </div>
                </div>
            </div>

            <hr></hr>
            <div className="container service-wrap" id="bedside-attendants">
                <div className="row">
                    <div className="col-md-4">
                        <img src={patentCare} alt="patent care" />
                    </div>
                    <div className="col-md-8">
                        <h2>Aaya / Bedside Attendants & Nurse Service for Elderly and Sick People</h2>

                        <p>Jenceo offers compassionate and professional Aaya / Care taker / Nurse services for elderly and sick individuals, ensuring comfort and care at Home / Hospital.</p>
                        <ul>
                            <li><strong>Trained  Caregivers:</strong> Experienced aayas / Nurses skilled in elderly and patient care, including mobility assistance, medication reminders, and hygiene support.</li>
                            <li><strong>24/7 Availability:</strong> Round-the-clock support to meet the needs of your loved ones at any time of the day or night.</li>
                            <li><strong>Personalized Care Plans:</strong> Tailored services based on individual health requirements and preferences, ensuring the highest level of comfort.</li>
                            <li><strong>Flexible Service Hours:</strong> Choose from hourly, daily, or live-in options based on your requirements.</li>
                        </ul>

                        {/* <div className="btn-wrapper">
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div> */}
                    </div>

                </div>

            </div>
            <div className="hero-banner service-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h2>We will make life better for you</h2>
                            <p>We respect the fact that every individual is different and unique in terms of their likes, dislikes, interests and habits. Hence, we carry out a comprehensive assessment of your needs and then make significant efforts to match our care assistants to completely suit your needs to ensure compatibility, empathy and mutual respect.</p>
                            <p>We want to make a remarkable difference to your life with excellent care in your own home.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container service-wrap" id="maid /cook">
                <div className="row">
                    <div className="col-md-4">
                        <img src={cook} alt="cook - maid" />
                    </div>
                    <div className="col-md-8">
                        <h2>Maid / Cook</h2>
                        <p>We take pride in offering a unique and personalized cooking experience that brings the joy of delicious, homemade meals right to your doorstep.</p>
                        <p>We believe that exceptional meals should be accessible to everyone. Let us redefine your culinary experience, bringing the love and expertise of a chef directly to your home. Explore our offerings and embark on a journey of delectable flavors and unparalleled convenience.</p>

                        <ul>
                            <li><strong>Chef Expertise:</strong>  Our team of skilled chefs brings a wealth of culinary expertise to your table, ensuring a delightful dining experience.</li>
                            <li><strong>Fresh and Locally Sourced Ingredients:</strong>  We prioritize the use of fresh, high-quality, and locally sourced ingredients to create meals that are both delicious and wholesome.</li>
                            <li><strong>Flexibility and Customization:</strong>  We understand that everyone's tastes and dietary needs are unique. Our services are highly flexible and can be tailored to meet your specific preferences.</li>
                            <li><strong>Convenience Redefined:</strong>  Say goodbye to kitchen stress. Our services are designed to save you time and effort, allowing you to savor the moments that matter.</li>
                        </ul>
                        {/* <div className="btn-wrapper">
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div> */}
                    </div>

                </div>

            </div>
            <hr></hr>
            <div className="container service-wrap" id="physotherophy">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Physiotherapy</h2>
                        <p>Where we are dedicated to enhancing your well-being through personalized and comprehensive physiotherapy services. Our experienced team of physiotherapists is committed to providing effective care that addresses your unique needs and promotes a healthier, more active lifestyle.</p>
                        <p>We believe in the transformative power of physiotherapy to improve lives. Whether you're recovering from an injury, managing chronic conditions, or seeking to enhance your physical well-being, our team is here to guide you on your journey to optimal health.</p>
                        <ul>
                            <li><strong>Expertise and Experience:</strong> Our team comprises skilled and experienced physiotherapists dedicated to providing high-quality care.</li>
                            <li><strong>Patient-Centric Approach:</strong> Your well-being is at the center of everything we do. We take the time to understand your needs and tailor our treatments accordingly.</li>
                            <li><strong>Holistic Wellness:</strong> Beyond addressing specific issues, we emphasize holistic wellness, supporting you in achieving long-term health and vitality.</li>
                        </ul>
                        {/* <div className="btn-wrapper">
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div> */}
                    </div>
                    <div className="col-md-4">
                        <img src={physotherophy} alt="physotherophy" />
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="container service-wrap" id="office-clean">
                <div className="row">
                    <div className="col-md-4">
                        <img src={officeCleaing} alt="office-clean" />
                    </div>
                    <div className="col-md-8">
                        <h2>Office Cleaning</h2>
                        <p>Jenceo offers professional office cleaning services to maintain a clean, healthy, and productive workspace. Our team ensures that your office environment remains spotless, organized, and inviting for employees and visitors alike.</p>

                        <ul>
                            <li><strong>Comprehensive Cleaning:</strong> Our services cover dusting, mopping, vacuuming, sanitizing surfaces, and waste disposal, ensuring every corner is spotless.</li>
                            <li><strong>Customizable Packages:</strong>  Customizable Packages.</li>
                            <li><strong>Eco-Friendly Products:</strong>  We use safe, eco-friendly cleaning products to ensure the health and safety of your employees and the environment.</li>
                            <li><strong>Trained Professionals:</strong>  Our cleaning staff is experienced, trustworthy, and trained to handle all types of office cleaning tasks efficiently.</li>
                        </ul>
                        {/* <div className="btn-wrapper">
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div> */}
                    </div>

                </div>

            </div>



        </div>
    );
}

export default OurServices;
