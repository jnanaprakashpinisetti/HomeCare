import React, { useState } from 'react';
import { Router, Routes, Route, Link, NavLink, browserHistory, IndexRoute } from 'react-router-dom';
import '../scss/navbar.scss';
import Elements from './Elements';
import log from '../images/logo.png'

export default function Navbar() {
	const [isActive, setActive] = useState(false);
	const toggleClass = () => {
		setActive(!isActive)
	}



	return (
		<>

			<header className="navbar-bg 	 scroll-change">
				<nav className="navbar navbar-expand-md container">
					<a className="navbar-brand" href="#">
					<NavLink to='/'><img src={log} alt="SSP Logo" width="50px" /></NavLink>
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
						<i className={isActive ? "fa fa-close" : "fa fa-bars"} onClick={toggleClass} ></i>
					</button>
					<div className="collapse navbar-collapse" id="collapsibleNavbar">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink to='/' className="nav-link">Home </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='About-Us' className="nav-link">About Us </NavLink>
							</li>

							<li className="nav-item">
								<NavLink to='Our-Services' className="nav-link"> Our Services</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='FAQs' className="nav-link">FAQs </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='Contact-Us' className="nav-link">Contact Us </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='Elements' className="nav-link"> Elements </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='Link' className="nav-link"> Link </NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</header>


			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/Elements" element={<Elements />} />
				{/* <Route path="/Link" element={<BookList />} /> */}
			</Routes>
		</>
	)
}
