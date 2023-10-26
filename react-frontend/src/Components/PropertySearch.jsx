import SearchBar from "./SearchBar";
import { Container, Grid, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import imagePlaceholder from "../Assets/No-Image-Placeholder.png";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import FilterOverlay from "./FilterOverlay";
import { useNavigate } from "react-router-dom";

const PropertySearch = ({
	searchTxt,
	setSearchTxt,
	searchResults,
	setSearchResults,
	searchFilters,
	setSearchFilters,
	user,
	setDetailedProperty
}) => {
	const searchStyle = {
		padding: "10px",
	};

	const [openFilter, setOpenFilter] = useState(false);

	return (
		<Container>
			<Grid container>
				<Grid xs={12} style={searchStyle}>
					<SearchBar
						searchTxt={searchTxt}
						setSearchTxt={setSearchTxt}
						searchResults={searchResults}
						setSearchResults={setSearchResults}
						searchFilters={searchFilters}
						setSearchFilters={setSearchFilters}
						openFilter={openFilter}
						setOpenFilter={setOpenFilter}
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
							user={user}
							setDetailedProperty={setDetailedProperty}
							key={result.propertyId}
						/>
					))}
				</Grid>
			</Grid>
			<FilterOverlay
				open={[openFilter, setOpenFilter]}
				searchFilters={searchFilters}
				setSearchFilters={setSearchFilters}
				openFilter={openFilter}
				setOpenFilter={setOpenFilter}
			/>
		</Container>
	);
};

const PropertyCard = ({ property, user, setDetailedProperty }) => {
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
		aspectRatio: '16/9',
		objectFit: 'cover'
	};

	const imagePlaceholderStyle = {
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

	const [imageData, setImageData] = useState("");
	const url = `http://localhost:8080/api/v1/properties/${property.propertyId}/photo`;
	const nav = useNavigate()

	axios
		.get(url)
		.then((res) => {
			setImageData(res.data);
		})
		.catch((err) => {
			console.log(err);
		});

	return (
		<div style={containerStyle}>
			<div style={boxStyle} onClick={() => {
				setDetailedProperty(property)
				nav("/details")
			}}>
				<link
					href="https://fonts.googleapis.com/css?family=Oswald"
					rel="stylesheet"
				></link>

				<div style={infoStyle}>
					<h3>{"Leaser Name"}</h3>
				</div>

				{imageData.length > 0 ? (
					<img
						style={imageStyle}
						src={`data:image/jpg;base64,${imageData}`}
						alt={"Property with " + property.propertyDescription}
					/>
				) : (
					<img
						style={imagePlaceholderStyle}
						src={imagePlaceholder}
						alt={"Property with " + property.propertyDescription}
					/>
				)}

				<Grid container>
					<Grid xs={10} style={infoStyle}>
						<div>{"$" + property.rentalPrice + " per week"}</div>
						<div>
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
						</div>
						<div>
							{property.details.bedroom +
								" Bed | " +
								property.details.bathroom +
								" Bath | " +
								property.details.carPark +
								" Car"}
						</div>
					</Grid>
					<Grid xs={1} style={iconContainerStyle}>
						{user?.bookmarkedProperties?.includes(
							property.propertyId
						) && <StarIcon fontSize="large" />}
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default PropertySearch;
