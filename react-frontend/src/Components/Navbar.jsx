import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = (props) => {
	const user = props.user
	const setUser = props.setUser
	return (

		<nav className="navbar">
			<div>
				<img className="navbar-logo" src={logo} alt="RENTEX"></img>
			</div>
			{props.isLoggedIn && (
				<div className="navbar-links">
					<Link to="/">Home</Link>
					<Link to="/my-wallet">My Wallet</Link>
					<Link to="/SavedProperties">Saved Properties</Link>
					<Link to="/profile" state={{ from: user }} >My Profile</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
