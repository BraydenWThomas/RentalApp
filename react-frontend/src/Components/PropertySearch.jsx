import SearchBar from "./SearchBar";
import { Container, Grid, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import imagePlaceholder from "../Assets/No-Image-Placeholder.png";
import StarIcon from "@mui/icons-material/Star";

const PropertySearch = ({
	searchTxt,
	setSearchTxt,
	searchResults,
	setSearchResults,
}) => {
	const searchStyle = {
		padding: "10px",
	};

	return (
		<Container>
			<Grid container>
				<Grid xs={12} style={searchStyle}>
					<SearchBar
						searchTxt={searchTxt}
						setSearchTxt={setSearchTxt}
						searchResults={searchResults}
						setSearchResults={setSearchResults}
					/>
				</Grid>
				<Grid xs={12}>
					<p>
						{searchResults.length +
							" properties matched your search"}
					</p>
				</Grid>
				<Grid xs={12}>
					{searchResults.map((result) => (
						<PropertyCard
							property={result}
							key={result.propertyId}
						/>
					))}
				</Grid>
			</Grid>
		</Container>
	);
};

const PropertyCard = ({ property }) => {
	const containerStyle = {
		display: "flex",
		justifyContent: "center",
	};

	const boxStyle = {
		backgroundColor: "#A59DB780",
		width: "30rem",
		margin: "10px",
		borderRadius: "10px",
	};

	const imageStyle = {
		height: "auto",
		width: "30rem",
	};

	const infoStyle = {
		textAlign: "left",
		margin: "10px",
		color: "#3D1670",
		fontFamily: "Oswald",
	};

	const iconContainerStyle = {
		display: "flex",
		textAlign: "end",
		alignItems: "center",
		color: "#3D1670",
	};

	return (
		<div style={containerStyle}>
			<div style={boxStyle}>
				<link
					href="https://fonts.googleapis.com/css?family=Oswald"
					rel="stylesheet"
				></link>

				<div style={infoStyle}>
					<h3>{"Leaser Name"}</h3>
				</div>

				{property.images.length > 0 ? (
					<img
						style={imageStyle}
						src={`data:image/jpg;base64,${property.images[0].data}`}
						alt={"Property with " + property.propertyDescription}
					/>
				) : (
					<img
						style={imageStyle}
						src={imagePlaceholder}
						alt={"Property with " + property.propertyDescription}
					/>
				)}

				<Grid container>
					<Grid xs={10} style={infoStyle}>
						<p>{"$" + property.rentalPrice + " per week"}</p>
						<p>
							{property.address.unit +
								" " +
								property.address.street +
								", " +
								property.address.suburb +
								", " +
								property.address.state +
								" (" +
								property.address.postcode +
								")"}
						</p>
						<p>
							{property.details.bedroom +
								" Bed | " +
								property.details.bathroom +
								" Bath | " +
								property.details.carPark +
								" Car"}
						</p>
					</Grid>
					<Grid xs={1} style={iconContainerStyle}>
						<StarIcon fontSize="large" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default PropertySearch;
