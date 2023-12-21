import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import ToggleButon from "./ToggleButton";
import Modaltag from "./Modaltag";

function Navbar({buttonClick,changeLog,user}) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div>
				<ToggleButon buttonClick={buttonClick}/>
				<h4 className="logo">Career Buddy</h4>
			</div>
			<div>
			<nav ref={navRef}>
				<a href="#" onClick={showNavbar}>Home</a>
				<a href='#CareerPage' onClick={showNavbar}>Explore</a>
                <a href="#EvaluationPage" onClick={showNavbar}>Test</a>
				<a href="#ResultPage" onClick={showNavbar}>Results</a>
				<Modaltag func={showNavbar} changeLog={changeLog} user={user} />
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			</div>
		</header>
	);
}

export default Navbar;