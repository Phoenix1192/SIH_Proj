import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import ToggleButon from "./ToggleButton";

function Navbar({buttonClick}) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<ToggleButon buttonClick={buttonClick}/>
			<h3>PATHfinder</h3>
			<div>
			<nav ref={navRef}>
				<a href="#" onClick={showNavbar}>Home</a>
				<a href='#CareerPage' onClick={showNavbar}>Careers</a>
                <a href="#EvaluationPage" onClick={showNavbar}>Test</a>
				<a href="#ResultPage" onClick={showNavbar}>Results</a>
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