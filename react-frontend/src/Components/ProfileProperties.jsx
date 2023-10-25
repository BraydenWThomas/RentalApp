import "../Styles/ProfileProperties.css";
// icons from here: https://www.flaticon.com/free-icons/visible

import {
	Button,
	Grid,
	TextField,
	Container,
	Select,
	MenuItem,
} from "@mui/material";
import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const { useState, useCallback } = React;

const mod = (n, m) => ((n % m) + m) % m;

const ProfileProperties = (props) => {
	const allProperties = props.allProperties;
	const setAllProperties = props.setAllProperties;

	const [index, setIndex] = useState(0);
	const [imageData, setImageData] = useState("");

	const user = props.user;
	const setUser = props.setUser;

	const nav = useNavigate();

	const [bedroom, setBedroom] = React.useState(
		allProperties[index].details.bedroom
	);
	const [bathroom, setBathroom] = React.useState(
		allProperties[index].details.bathroom
	);
	const [carPark, setCarPark] = React.useState(
		allProperties[index].details.carPark
	);

	const [description, setDescription] = React.useState(
		allProperties[index].propertyDescription
	);

	const [street, setStreet] = React.useState(
		allProperties[index].address.street
	);
	const [suburb, setSuburb] = React.useState(
		allProperties[index].address.suburb
	);
	const [state, setState] = React.useState(
		allProperties[index].address.state
	);
	const [postcode, setPostcode] = React.useState(
		allProperties[index].address.postcode
	);

	const [propertyType, setPropertyType] = useState(
		allProperties[index].propertyType
	);

	const indexChange = () => {
		setBedroom(allProperties[index].details.bedroom);
		setBathroom(allProperties[index].details.bathroom);
		setCarPark(allProperties[index].details.carPark);

		setDescription(allProperties[index].propertyDescription);

		setStreet(allProperties[index].address.street);
		setSuburb(allProperties[index].address.suburb);
		setState(allProperties[index].address.state);
		setPostcode(allProperties[index].address.postcode);
		setPropertyType(allProperties[index].propertyType);
	};

	const changeType = (event) => {
		setPropertyType(event.target.value);
	};

	const updateInformation = () => {
		console.log("Updating info for index " + index);
		allProperties[index].details.bedroom = bedroom;
		allProperties[index].details.bathroom = bathroom;
		allProperties[index].details.carPark = carPark;

		allProperties[index].propertyDescription = description;
		allProperties[index].propertyType = propertyType;

		allProperties[index].address.street = street;
		allProperties[index].address.suburb = suburb;
		allProperties[index].address.state = state;
		allProperties[index].address.postcode = postcode;

		console.log("PROPERTY TO SAVE");
		console.log(allProperties[index]);
		console.log(allProperties);

		axios
			.post(
				"http://localhost:8080/api/v1/properties/updateProperty",
				allProperties[index]
			)
			.then((res) => {
				console.log("AFTER SAVING");
				// allProperties[index] = res.data;
				console.log(res.data);
				console.log(allProperties[0]);
				console.log(allProperties[1]);
			});
	};

	const forwards = () => {
		setIndex(mod(index + 1, allProperties.length));
		console.log("INDEX INCREASE");
		console.log(index);
		console.log(mod(index + 1, allProperties.length));
	};

	const backwards = () => {
		setIndex(mod(index - 1, allProperties.length));
		console.log("INDEX DECREASE");
		console.log(index);
		console.log(mod(index + 1, allProperties.length));
	};

	React.useEffect(() => {
		// This code will run whenever `index` changes
		indexChange();
		loadImage();
	}, [index]);

	const loadImage = () => {
		const url = `http://localhost:8080/api/v1/properties/${allProperties[index].propertyId}/photo`;
		axios
			.get(url)
			.then((res) => {
				setImageData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const buttonStyle = {
		backgroundColor: "#A59DB7",
		color: "white",
		fontFamily: "Oswald",
		width: "100%",
		marginTop: 30,
		marginBottom: 30,
	};

	const imageStyle = {
		maxWidth: "100%",
		height: "auto",
	};

	return (
		<div className="profile-properties-container">
			<h1 className="profile-properties-header">My Properties</h1>

			<div className="properties-contents">
				<div className="properties-paging-container">
					<button className="pager-btn" onClick={backwards}>
						<ChevronLeftIcon />
					</button>
					<form>
						<Grid container>
							<Grid xs={6} paddingInline={2}>
								{imageData !== "" && (
									<img
										style={imageStyle}
										src={`data:image/jpg;base64,${imageData}`}
										alt="Property"
									/>
								)}
							</Grid>
							<Grid xs={6} paddingInline={2}>
								<div className="heading">
									<h3>
										{" "}
										{user.firstName} {user.lastName}{" "}
									</h3>
								</div>

								<div className="horizontal">
									<div className="heading">
										<h3>
											{" "}
											$ {
												allProperties[index].rentalPrice
											}{" "}
										</h3>
									</div>
									<div className="heading">
										<h3> RENT DATE: </h3>
									</div>
								</div>

								<div className="horizontal">
									<div>
										<p className="formfield">Bedrooms</p>
										{
											<TextField
												fullWidth
												className="formfield"
												color="secondary"
												value={bedroom}
												onChange={(event) =>
													setBedroom(
														event.target.value
													)
												}
											/>
										}
									</div>
									<div>
										<p className="formfield">Bathrooms</p>
										{
											<TextField
												fullWidth
												className="formfield"
												color="secondary"
												value={bathroom}
												onChange={(event) =>
													setBathroom(
														event.target.value
													)
												}
											/>
										}
									</div>
									<div>
										<p className="formfield">Car</p>
										{
											<TextField
												fullWidth
												className="formfield"
												color="secondary"
												value={carPark}
												onChange={(event) =>
													setCarPark(
														event.target.value
													)
												}
											/>
										}
									</div>
								</div>

								<div className="propertyType">
									<p className="propertyType">
										{" "}
										Property Type:
									</p>
									<Select
										className="propertyType"
										value={propertyType}
										onChange={changeType}
									>
										<MenuItem value="Apartment">
											Apartment
										</MenuItem>
										<MenuItem value="House">House</MenuItem>
										<MenuItem value="Room">Room</MenuItem>
										<MenuItem value="Town House">
											Town House
										</MenuItem>
										<MenuItem value="Granny Flat">
											Granny Flat
										</MenuItem>
									</Select>
								</div>
							</Grid>

							<Grid xs={12} paddingInline={2}>
								<p className="fieldLabel">Description</p>
								<TextField
									fullWidth
									className="formfield"
									color="secondary"
									value={description}
									onChange={(event) =>
										setDescription(event.target.value)
									}
								/>
							</Grid>

							<Grid xs={6} paddingInline={2}>
								<p className="fieldLabel">Street</p>
								<TextField
									fullWidth
									className="formfield"
									color="secondary"
									value={street}
									onChange={(event) =>
										setStreet(event.target.value)
									}
								/>
							</Grid>
							<Grid xs={6} paddingInline={2}>
								<p className="fieldLabel">Suburb</p>
								<TextField
									fullWidth
									className="formfield"
									color="secondary"
									value={suburb}
									onChange={(event) =>
										setSuburb(event.target.value)
									}
								/>
							</Grid>
							<Grid xs={6} paddingInline={2}>
								<p className="fieldLabel">State</p>
								<TextField
									fullWidth
									className="formfield"
									color="secondary"
									value={state}
									onChange={(event) =>
										setState(event.target.value)
									}
								/>
							</Grid>
							<Grid xs={6} paddingInline={2}>
								<p className="fieldLabel">Postcode</p>
								<TextField
									fullWidth
									className="formfield"
									color="secondary"
									value={postcode}
									onChange={(event) =>
										setPostcode(event.target.value)
									}
								/>
							</Grid>
							<Grid xs={12} paddingInline={2}>
								<Button
									variant="contained"
									style={buttonStyle}
									onClick={updateInformation}
								>
									{" "}
									Update Information
								</Button>
							</Grid>
						</Grid>
					</form>

					<button className="pager-btn" onClick={forwards}>
						<ChevronRightIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileProperties;
