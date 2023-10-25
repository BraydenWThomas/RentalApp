import {
	Button,
	Container,
	Modal,
	TextField,
	Grid,
	Checkbox,
	FormControlLabel,
	ThemeProvider,
	Divider,
	Select,
	FormControl,
	InputLabel,
	MenuItem,
	FormHelperText,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "../Styles/Filter.css";

const FilterOverlay = (props) => {
	const [open, setOpen] = props.open;

	const [locationFilters, setLocationFilters] = useState([]);

	return (
		<Modal open={open} onClose={() => closeFunction(setOpen,props.searchFilters,props.setSearchFilters)}>
			<Container className="filter-container" maxWidth="sm">
				{/* Header */}
				<div className="header">
					<h2 style={{ display: "inline" }}>Filter</h2>

					<button
						variant="standard"
						className="close-btn"
						onClick={() => {
							closeFunction(setOpen,props.searchFilters,props.setSearchFilters);
						}}
					>
						<CloseIcon />
					</button>
				</div>

				<LocationSearch
					locationFilters={locationFilters}
					setLocationFilters={setLocationFilters}
					searchFilters={props.searchFilters} 
					setSearchFilters={props.setSearchFilters}
				/>

				<LocationFilters
					locationFilters={locationFilters}
					setLocationFilters={setLocationFilters}
					searchFilters={props.searchFilters} 
					setSearchFilters={props.setSearchFilters}
				/>

				<PropertyTypeSelect 
					searchFilters={props.searchFilters} 
					setSearchFilters={props.setSearchFilters}
				/>

				<Divider style={{ marginTop: "20px" }} />

				<DetailFilters 
					searchFilters={props.searchFilters} 
					setSearchFilters={props.setSearchFilters}
					/>
			</Container>
		</Modal>
	);
};

const closeFunction = (setOpen,searchFilters,setSearchFilters) => {
	//#TODO put all the info into one use state
	//setSearchFilters({minPrice:'12',maxPrice:'123'})
	//setSearchFilters(searchFilters)
	console.log(searchFilters)
	setOpen(false)
}

const LocationSearch = ({ locationFilters, setLocationFilters }) => {
	const [txt, setTxt] = useState("");

	const searchBtnStyle = {
		backgroundColor: "#A59DB740",
		color: "black",
		marginInline: "10px",
	};

	const searchIconStyle = {
		color: "gray",
		margin: "0px 10px 4px 0px",
		alignSelf: "end",
	};

	return (
		<div className="search-bar">
			<SearchIcon style={searchIconStyle} />

			<TextField
				fullWidth
				variant="standard"
				label="Location"
				value={txt}
				onChange={(e) => {
					setTxt(e.target.value);
				}}
			/>

			<Button
				style={searchBtnStyle}
				variant="contained"
				disableElevation
				onClick={() => {
					if (!locationFilters.includes(txt)) {
						setLocationFilters([txt].concat(locationFilters));
						setTxt("");
					}
				}}
			>
				Add
			</Button>
		</div>
	);
};

const LocationFilters = ({ locationFilters, setLocationFilters }) => {
	return (
		<div className="location-filters">
			{locationFilters.map((location) => (
				<div className="location-label">
					<p className="location-label-text">{location}</p>
					<button
						className="remove-btn"
						onClick={() => {
							setLocationFilters(
								locationFilters.filter((loc) => {
									return loc !== location;
								})
							);
						}}
					>
						<CloseIcon fontSize="small" />
					</button>
					<div className="divider" />
				</div>
			))}
		</div>
	);
};

const PropertyTypeSelect = ({searchFilters, setSearchFilters }) => {
	const [houseChecked, setHouseChecked] = useState(false);
	const [apartmentChecked, setApartmentChecked] = useState(false);
	const [townhouseChecked, setTownhouseChecked] = useState(false);
	const [grannyFlatChecked, setgrannyFlatChecked] = useState(false);
	const [roomChecked, setRoomChecked] = useState(false);
	const [unitChecked, setUnitChecked] = useState(false);


	

	const checkBoxItemStyle = {
		padding: "5px 10px 5px 10px",
		borderRadius: "10px",
		backgroundColor: "white",
	};

	const theme = createTheme({
		palette: {
			appColor: {
				main: "#A59DB7",
				light: "#A59DB7",
				dark: "#A59DB7",
				contrastText: "#A59DB7",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<div className="property-type-container">
				<h3>Property Type</h3>

				<Grid
					container
					gap={2}
					style={{ display: "flex", justifyContent: "center" }}
				>
					<Grid xs={5} style={checkBoxItemStyle}>
						<FormControlLabel
							control={
								<Checkbox
									color="appColor"
									checked={searchFilters["propertyTypes"]['house']}
									onChange={(e) => {
										setSearchFilters(searchFilters => ({...searchFilters, propertyTypes:{...searchFilters.propertyTypes, house:(e.target.checked)}}))
									}}
								/>
							}
							label="House"
						/>
					</Grid>
					<Grid xs={5} style={checkBoxItemStyle}>
						<FormControlLabel
							control={
								<Checkbox
									color="appColor"
									checked={searchFilters["propertyTypes"]['apartment']}
									onChange={(e) => {
										setSearchFilters(searchFilters => ({...searchFilters, propertyTypes:{...searchFilters.propertyTypes, apartment:(e.target.checked)}}))
									}}
								/>
							}
							label="Apartment"
						/>
					</Grid>
					<Grid xs={5} style={checkBoxItemStyle}>
						<FormControlLabel
							control={
								<Checkbox
									color="appColor"
									checked={searchFilters["propertyTypes"]['townhouse']}
									onChange={(e) => {
										setSearchFilters(searchFilters => ({...searchFilters, propertyTypes:{...searchFilters.propertyTypes, townhouse:(e.target.checked)}}))
									}}
								/>
							}
							label="Townhouse"
						/>
					</Grid>
					<Grid xs={5} style={checkBoxItemStyle}>
						<FormControlLabel
							control={
								<Checkbox
									color="appColor"
									checked={searchFilters["propertyTypes"]['grannyflat']}
									onChange={(e) => {
										setSearchFilters(searchFilters => ({...searchFilters, propertyTypes:{...searchFilters.propertyTypes, grannyflat:(e.target.checked)}}))
									}}
								/>
							}
							label="Granny Flat"
						/>
					</Grid>
					<Grid xs={5} style={checkBoxItemStyle}>
						<FormControlLabel
							control={
								<Checkbox
									color="appColor"
									checked={searchFilters["propertyTypes"]['room']}
									onChange={(e) => {
										setSearchFilters(searchFilters => ({...searchFilters, propertyTypes:{...searchFilters.propertyTypes, room:(e.target.checked)}}))
									}}
								/>
							}
							label="Room"
						/>
					</Grid>
					<Grid xs={5} style={checkBoxItemStyle}>
						<FormControlLabel
							control={
								<Checkbox
									color="appColor"
									checked={searchFilters["propertyTypes"]['unit']}
									onChange={(e) => {
										setSearchFilters(searchFilters => ({...searchFilters, propertyTypes:{...searchFilters.propertyTypes, unit:(e.target.checked)}}))
									}}
								/>
							}
							label="Unit"
						/>
					</Grid>
				</Grid>
			</div>
		</ThemeProvider>
	);
};

const DetailFilters = ({ searchFilters, setSearchFilters }) => {

	const priceItems = [];
	const bedItems = [];
	const bathItems = [];
	const carItems = [];

	for (let i = 0; i <= 1000; i += 50) {
		priceItems.push(<MenuItem value={i}>${i}</MenuItem>);
	}
	for (let i = 1100; i <= 5000; i += 100) {
		priceItems.push(<MenuItem value={i}>${i}</MenuItem>);
	}

	for (let i = 0; i < 13; i++) {
		bedItems.push(<MenuItem value={i}>{i}</MenuItem>);
	}

	for (let i = 0; i < 13; i++) {
		bathItems.push(<MenuItem value={i}>{i}</MenuItem>);
	}

	for (let i = 0; i < 13; i++) {
		carItems.push(<MenuItem value={i}>{i}</MenuItem>);
	}

	const theme = createTheme({
		palette: {
			highlightColour: {
				main: "#A59DB7",
				light: "#A59DB7",
				dark: "#A59DB7",
				contrastText: "#A59DB7",
			},
		},
	});

	const selectStyle = {
		borderRadius: "5px 5px 0px 0px",
		backgroundColor: "white",
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				gap={2}
				style={{ display: "flex", justifyContent: "center" }}
			>
				{/* Price Filter */}
				<Grid xs={12}>
					<div className="filterHeading">Price</div>
				</Grid>
				<Grid xs={5} style={selectStyle}>
					<FormControl
						fullWidth
						color="highlightColour"
						variant="filled"
						size="small"
					>
						<InputLabel>Min</InputLabel>
						<Select
							color="highlightColour"
							value={searchFilters["detailFilters"]["minPrice"]}
							label="Min"
							onChange={(e) => {
								setSearchFilters(searchFilters => ({...searchFilters, detailFilters:{...searchFilters.detailFilters, minPrice:(e.target.value) }}))
							}}
						>
							{priceItems}
						</Select>
					</FormControl>
				</Grid>
				<Grid xs={5} style={selectStyle}>
					<FormControl
						fullWidth
						color="highlightColour"
						variant="filled"
						size="small"
					>
						<InputLabel>Max</InputLabel>
						<Select
							value={searchFilters["detailFilters"]["maxPrice"]}
							label="Max"
							onChange={(e) => {
								setSearchFilters(searchFilters => ({...searchFilters, detailFilters:{...searchFilters.detailFilters, maxPrice:(e.target.value) }}))
							}}
						>
							{priceItems}
						</Select>
					</FormControl>
				</Grid>

				{/* Bedroom Filter */}
				<Grid xs={12}>
					<div className="filterHeading">Bedrooms</div>
				</Grid>
				<Grid xs={5} style={selectStyle}>
					<FormControl
						fullWidth
						color="highlightColour"
						variant="filled"
						size="small"
					>
						<InputLabel>Min</InputLabel>
						<Select
							color="highlightColour"
							value={searchFilters["detailFilters"]["minBedrooms"]}
							label="Min"
							onChange={(e) => {
								setSearchFilters(searchFilters => ({...searchFilters, detailFilters:{...searchFilters.detailFilters, minBedrooms:(e.target.value) }}))
							}}
						>
							{bedItems}
						</Select>
					</FormControl>
				</Grid>
				<Grid xs={5} style={selectStyle}>
					<FormControl
						fullWidth
						variant="filled"
						color="highlightColour"
						size="small"
					>
						<InputLabel>Max</InputLabel>
						<Select
							value={searchFilters["detailFilters"]["maxBedrooms"]}
							label="Max"
							onChange={(e) => {
								setSearchFilters(searchFilters => ({...searchFilters, detailFilters:{...searchFilters.detailFilters, maxBedrooms:(e.target.value) }}))
							}}
						>
							{bedItems}
						</Select>
					</FormControl>
				</Grid>

				{/* Bathroom Filter */}
				<Grid xs={12}>
					<div className="filterHeading">Bathrooms</div>
				</Grid>
				<Grid xs={5} style={selectStyle}>
					<FormControl
						fullWidth
						color="highlightColour"
						variant="filled"
						size="small"
					>
						<InputLabel>Min</InputLabel>
						<Select
							color="highlightColour"
							value={searchFilters["detailFilters"]["minBathrooms"]}
							label="Min"
							onChange={(e) => {
								setSearchFilters(searchFilters => ({...searchFilters, detailFilters:{...searchFilters.detailFilters, minBathrooms:(e.target.value) }}))
							}}
						>
							{/* {bathItems} */}
						</Select>
					</FormControl>
				</Grid>
				<Grid xs={5} style={selectStyle}>
					<FormControl
						fullWidth
						variant="filled"
						color="highlightColour"
						size="small"
					>
						<InputLabel>Max</InputLabel>
						<Select
							value={searchFilters["detailFilters"]["maxBathrooms"]}
							label="Max"
							onChange={(e) => {
								setSearchFilters(searchFilters => ({...searchFilters, detailFilters:{...searchFilters.detailFilters, maxBathrooms:(e.target.value) }}))
							}}
						>
							{/* {bedItems} */}
						</Select>
					</FormControl>
				</Grid>

				{/* Car space Filter */}
				<Grid xs={12}>
					<div className="filterHeading">Car spaces</div>
				</Grid>
				<Grid xs={5} style={selectStyle}>
					<FormControl
						fullWidth
						color="highlightColour"
						variant="filled"
						size="small"
					>
						<InputLabel>Min</InputLabel>
						<Select
							color="highlightColour"
							value={searchFilters["detailFilters"]["minCars"]}
							label="Min"
							onChange={(e) => {
								setSearchFilters(searchFilters => ({...searchFilters, detailFilters:{...searchFilters.detailFilters, minCars:(e.target.value) }}))
							}}
						>
							{/* {bedItems} */}
						</Select>
					</FormControl>
				</Grid>
				<Grid xs={5} style={selectStyle}>
					<FormControl
						fullWidth
						variant="filled"
						color="highlightColour"
						size="small"
					>
						<InputLabel>Max</InputLabel>
						<Select
							value={searchFilters["detailFilters"]["maxCars"]}
							label="Max"
							onChange={(e) => {
								setSearchFilters(searchFilters => ({...searchFilters, detailFilters:{...searchFilters.detailFilters, maxCars:(e.target.value) }}))
							}}
						>
							{/* {bedItems} */}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default FilterOverlay;
