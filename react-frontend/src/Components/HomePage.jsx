import {
	Button,
	Container,
	Grid,
	List,
	ListItem,
	ListItemButton,
	Box,
	ImageList,
} from "@mui/material";
import "../Styles/HomePage.css";
import LoginOverlay from "./LoginOverlay";
import SearchBar from "./SearchBar";
import axios from "axios";

import { useState } from "react";
import RegisterOverlay from "./RegisterOverlay";

const HomePage = (props) => {
	const [openLogin, setOpenLogin] = useState(false);
	const [openRegister, setOpenRegister] = useState(false);

	const handleLoginClick = () => {
		setOpenLogin(true);
	};

	const handleRegisterClick = () => {
		setOpenRegister(true);
	};

	const handleLogoutClick = () => {
		axios.get("http://localhost:8080/api/v1/users/signout");
		props.setIsLoggedIn(false);
	};

	// Dummy data
	const recentSearches = [
		{
			location: "Melbourne",
			info: "1 Bed, 2 Bath",
		},
		{
			location: "Hawthorne",
			info: "1 Bed, 1 Car",
		},
		{
			location: "Bendigo",
			info: "3 Bed, 2 Bath, 2 Car",
		},
		{
			location: "Ringwood",
			info: "1 Bed, 1 Bath",
		},
	];

	// Dummy data
	const recentLisings = [
		{
			price: "$350 pw",
			address: "123 Smith Street",
			features: "Large Living area",
		},
		{
			price: "$450 pw",
			address: "123 Smith Street",
			features: "Large Living area",
		},
		{
			price: "$500 pw",
			address: "123 Smith Street",
			features: "Large Living area",
		},
		{
			price: "$320 pw",
			address: "123 Smith Street",
			features: "Large Living area",
		},
	];

	const buttonStyle = {
		backgroundColor: "#A59DB7",
		color: "white",
		marginRight: "10px",
		fontFamily: "Oswald",
	};

	return (
		<div className="home">
			<link
				href="https://fonts.googleapis.com/css?family=Oswald"
				rel="stylesheet"
			></link>
			<div className="top">
				<p className="slogan">Your Space, Your Wallet, All in One.</p>
				{!props.isLoggedIn ? (
					<div className="login-buttons">
						<Button
							variant="contained"
							style={buttonStyle}
							onClick={handleLoginClick}
						>
							Login
						</Button>
						<Button
							variant="contained"
							style={buttonStyle}
							onClick={handleRegisterClick}
						>
							Sign Up
						</Button>
					</div>
				) : (
					<div className="login-buttons">
						<Button
							variant="contained"
							style={buttonStyle}
							onClick={handleLogoutClick}
						>
							Logout
						</Button>
					</div>
				)}
			</div>

			<Container>
				<div className="box">
					<Grid container>
						{/* Search */}
						<Grid xs={12}>
							<SearchBar />
						</Grid>
						{/* Recent Searches */}
						<Grid xs={12}>
							<ImageList
								sx={{
									gridAutoFlow: "column",
									gridTemplateColumns:
										"repeat(auto-fill,minmax(160px,1fr)) !important",
									gridAutoColumns: "minmax(160px, 1fr)",
								}}
								gap={10}
							>
								{recentSearches.map((search) => (
									<RecentSearchCard search={search} />
								))}
							</ImageList>
						</Grid>
					</Grid>
				</div>
				<h2 className="heading">Latest Listings</h2>
				<ImageList
					sx={{
						gridAutoFlow: "column",
						gridTemplateColumns:
							"repeat(auto-fill,minmax(200px,1fr)) !important",
						gridAutoColumns: "minmax(160px, 1fr)",
					}}
					gap={10}
				>
					{recentLisings.map((listing) => (
						<RecentListingCard listing={listing} />
					))}
				</ImageList>
			</Container>
			<LoginOverlay
				open={[openLogin, setOpenLogin]}
				isLoggedIn={props.isLoggedIn}
				setIsLoggedIn={props.setIsLoggedIn}
			/>
			<RegisterOverlay
				open={[openRegister, setOpenRegister]}
				isLoggedIn={props.isLoggedIn}
				setIsLoggedIn={props.setIsLoggedIn}
			/>
		</div>
	);
};

const RecentSearchCard = (props) => {
	const cardStyle = {
		marginBottom: "10px",
		padding: "10px",
		borderRadius: "10px",
		backgroundColor: "white",
	};

	const locationStyle = {
		color: "#857E97",
	};

	return (
		<Grid container style={cardStyle}>
			<Grid xs={12}>
				<b style={locationStyle}>{props.search.location}</b>
			</Grid>
			<Grid xs={12}>{props.search.info}</Grid>
		</Grid>
	);
};

const RecentListingCard = (props) => {
	const cardStyle = {
		borderRadius: "10px",
		backgroundColor: "#A59DB740",
	};

	const textStyle = {
		textAlign: "left",
		fontFamily: "Oswald",
		padding: "10px",
	};

	const imageStyle = {
		maxWidth: "100%",
		height: "auto",
		borderRadius: "10px 10px 0 0",
	};

	return (
		<Grid container style={cardStyle}>
			<Grid xs={12}>
				<img
					style={imageStyle}
					src="https://carlislehomes.com.au/static/images/hal/CARL607554_Matisse33_003_2.jpg"
					alt="House"
				/>
			</Grid>
			<div style={textStyle}>
				<Grid xs={12}>{"Price: " + props.listing.price}</Grid>
				<Grid xs={12}>{"Address: " + props.listing.address}</Grid>
				<Grid xs={12}>{"Features: " + props.listing.features}</Grid>
			</div>
		</Grid>
	);
};

export default HomePage;
