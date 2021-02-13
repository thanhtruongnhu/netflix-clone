import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
	const [show, handleShow] = useState(false); //hook: an easy way to define var in reactjs

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar); //when the component is mounted into other web component, it needs to be cleaned up. Here: the transitionNavBar is attached to the scroll function of the web browser, this mounting need to be cleaned up everytime it is triggered in order for the Listener to catch the most updated state of transitionNavBar
		return () => {
			window.removeEventListener('scroll', transitionNavBar);
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__contents">
				<img
					className="nav__logo"
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt=""
				/>

				<img
					className="nav__avatar"
					src="https://live.staticflickr.com/65535/50916903991_32e09d803c_z.jpg"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Nav;
