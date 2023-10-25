import { Button, Container, Grid, ImageList } from "@mui/material";
import "../Styles/HomePage.css";
import LoginOverlay from "./LoginOverlay";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";
import RegisterOverlay from "./RegisterOverlay";
import FilterOverlay from "./FilterOverlay";
import imagePlaceholder from "../Assets/No-Image-Placeholder.png";

const HomePage = (props) => {
	const [openLogin, setOpenLogin] = useState(false);
	const [openRegister, setOpenRegister] = useState(false);
	const [openFilter, setOpenFilter] = useState(true);
	const [recentListings, setRecentListings] = useState([]);
	const [recentSearches, setRecentSearches] = useState([]);
	const [refreshListings, setRefreshListings] = useState(false);
	const api = "http://localhost:8080/api/v1";

	useEffect(() => {
		// Load recent listings
		console.log("loading:");
		axios
			.get(api + "/properties/recentListings")
			.then((res) => {
				setRecentListings(res.data);
				console.log("Listings:");
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [refreshListings]);

	useEffect(() => {
		// Load recent searches
		console.log("Show recent searches");
		if (props.isLoggedIn) {
			axios.get(api + "/users/userdetails").then((res) => {
				console.log(res.data);
				setRecentSearches(res.data.propertySearchPreferences);
			});
		} else {
			setRecentSearches([]);
		}
	}, [props.isLoggedIn]);

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
							<SearchBar
								openFilter={openFilter}
								setOpenFilter={setOpenFilter}
								searchTxt={props.searchTxt}
								setSearchTxt={props.setSearchTxt}
								searchResults={props.searchResults}
								setSearchResults={props.setSearchResults}
								searchFilters={props.searchFilters}
								setSearchFilters={props.setSearchFilters}
							/>
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
								{recentSearches?.map((search) => (
									<RecentSearchCard search={search} />
								))}
							</ImageList>
						</Grid>
					</Grid>
				</div>
				{/* Recent listings */}
				<h2 className="heading">Latest Listings</h2>
				<ImageList
					sx={{
						gridAutoFlow: "column",
						gridTemplateColumns:
							"repeat(auto-fill,minmax(250px,1fr)) !important",
						gridAutoColumns: "minmax(250px, 1fr)",
					}}
					gap={10}
				>
					{recentListings.map((listing) => (
						<RecentListingCard
							listing={listing}
							key={listing.propertyId}
						/>
					))}
				</ImageList>
			</Container>
			<LoginOverlay
				open={[openLogin, setOpenLogin]}
				isLoggedIn={props.isLoggedIn}
				setIsLoggedIn={props.setIsLoggedIn}
				user={props.user}
				setUser={props.setUser}
			/>
			<RegisterOverlay
				open={[openRegister, setOpenRegister]}
				isLoggedIn={props.isLoggedIn}
				setIsLoggedIn={props.setIsLoggedIn}
			/>
			<FilterOverlay
				open={[openFilter, setOpenFilter]}
				searchFilters={props.searchFilters}
				setSearchFilters={props.setSearchFilters}
			/>
		</div>
	);
};

const RecentSearchCard = ({ search }) => {
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
				<b style={locationStyle}>{"This is a search"}</b>
			</Grid>
			<Grid xs={12}>
				<div style={{ display: "inline-block" }}>
					{"$" + search["detailFilters"]["minPrice"] + 
					" to $" + 
					search["detailFilters"]["maxPrice"]}
				</div>
				<div style={{ display: "inline-block" }}>
					{"Bedrooms: " +
						search["detailFilters"]["minBedrooms"] +
						" to " +
						search["detailFilters"]["maxBedrooms"]}
				</div>
				<div style={{ display: "inline-block" }}>
					{"Car Spots: " +
						search["detailFilters"]["minCars"] +
						" to " +
						search["detailFilters"]["maxCars"]}
				</div>
				<div style={{ display: "inline-block" }}>
					{"Available Date: " +
						"N/A" +
						" to " +
						"N/A"}
				</div>
				{
					//#TODO Preferred Features
					//#TODO Property Type
				}
			</Grid>
		</Grid>
	);
};

const RecentListingCard = ({ listing }) => {
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
				{/* <img
					style={imageStyle}
					src="https://carlislehomes.com.au/static/images/hal/CARL607554_Matisse33_003_2.jpg"
					alt="House"
				/> */}
				{listing.images.length > 0 ? (
					<img
						style={imageStyle}
						src={`data:image/jpg;base64,${listing.images[0].data}`}
						alt="Property"
					/>
				) : (
					<img
						style={imageStyle}
						src={imagePlaceholder}
						alt="Property"
					/>
				)}
			</Grid>
			<div style={textStyle}>
				<Grid xs={12}>{"Price: $" + listing.rentalPrice}</Grid>
				<Grid xs={12}>
					{"Address: " +
						listing.address.unit +
						" " +
						listing.address.street +
						", " +
						listing.address.suburb}
				</Grid>
				<Grid xs={12}>
					{"Features: " +
						listing.details.bedroom +
						" Bed | " +
						listing.details.bathroom +
						" Bath | " +
						listing.details.carPark +
						" Car"}
				</Grid>
			</div>
		</Grid>
	);
};

export default HomePage;
