import React, { useState } from 'react';
import { Router, Routes, Route, Link, NavLink, browserHistory, IndexRoute } from 'react-router-dom';

import log from '../images/jencio-logo.svg';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import Faq from './pages/Faq';
import ContactUs from './pages/ContactUs';
import Elements from './Elements/Elements';


export default function Navbar() {
 // Function to scroll to the top of the page
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds smooth scrolling
    });
  };

	const [isActive, setActive] = useState(false);
	const toggleClass = () => {
		setActive(!isActive);
		scrollToTop()
	}

	const closeMenu = ()=> {
		document.querySelector(".navbar-collapse").classList.remove("show")
		toggleClass()

	}



	return (
		<>

			<header className="navbar-bg 	 scroll-change">
				<nav className="navbar navbar-expand-md container">
					{/* <a className="navbar-brand"> */}
					<NavLink to='/' className="navbar-brand"><img src={log} alt="JENCEO Logo" width="50px" /></NavLink>
					{/* </a> */}
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
						<i className={isActive ? "fa fa-close" : "fa fa-bars"} onClick={toggleClass} ></i>
						{/* <span className="navbar-toggler-icon"></span> */}
					</button>
					<div className="collapse navbar-collapse" id="collapsibleNavbar">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink to='/' className="nav-link" onClick={closeMenu}>Home </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='About-Us' className="nav-link" onClick={closeMenu}>About Us </NavLink>
							</li>

							<li className="nav-item">
								<NavLink to='Our-services' className="nav-link" onClick={closeMenu}> Our Services</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='FAQs' className="nav-link"onClick={closeMenu} >FAQs </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='Contact' className="nav-link" onClick={closeMenu}>Contact Us </NavLink>
							</li>
							<li className="nav-item home-care">
								<a href='https://trades.jenceo.com/' onClick={closeMenu}>JenCeo - Trades</a>
							</li>
							{/* <li className="nav-item">
								<NavLink to='Elements' className="nav-link"> Trender Cocnut </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='Link' className="nav-link"> Link </NavLink>
							</li> */}
						</ul>
					</div>
				</nav>
			</header>


			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="About-us" element={<AboutUs />} />
				<Route path="Our-services" element={<OurServices />} />
				<Route path="FAQs" element={<Faq />} />
				<Route path="Contact" element={<ContactUs />} />
				<Route path="/Elements" element={<Elements />} />
			</Routes>
		</>
	)
}
