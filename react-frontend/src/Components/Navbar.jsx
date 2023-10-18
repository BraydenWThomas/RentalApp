import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = (props) => {
	return (
		<nav className="navbar">
			<div>
				<img className="navbar-logo" src={logo} alt="RENTEX"></img>
			</div>
			{props.isLoggedIn && (
				<div className="navbar-links">
					<Link to="/">Home</Link>
					<Link to="/my-wallet">My Wallet</Link>
					<Link to="/saved-properties">Saved Properties</Link>
					<Link to="/profile">My Profile</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
