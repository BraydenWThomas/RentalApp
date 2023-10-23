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
		<Modal open={open} onClose={() => setOpen(false)}>
			<Container className="filter-container" maxWidth="sm">
				{/* Header */}
				<div className="header">
					<h3 style={{ display: "inline" }}>Filter</h3>

					<button
						variant="standard"
						className="close-btn"
						onClick={() => {
							setOpen(false);
						}}
					>
						<CloseIcon />
					</button>
				</div>

				<LocationSearch
					locationFilters={locationFilters}
					setLocationFilters={setLocationFilters}
				/>

				<LocationFilters
					locationFilters={locationFilters}
					setLocationFilters={setLocationFilters}
				/>

				<PropertyTypeSelect />

				<Divider style={{ marginTop: "20px" }} />

				<DetailFilters />
			</Container>
		</Modal>
	);
};

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

const PropertyTypeSelect = () => {
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
									checked={houseChecked}
									onChange={(e) => {
										setHouseChecked(e.target.checked);
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
									checked={apartmentChecked}
									onChange={(e) => {
										setApartmentChecked(e.target.checked);
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
									checked={townhouseChecked}
									onChange={(e) => {
										setTownhouseChecked(e.target.checked);
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
									checked={grannyFlatChecked}
									onChange={(e) => {
										setgrannyFlatChecked(e.target.checked);
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
									checked={roomChecked}
									onChange={(e) => {
										setRoomChecked(e.target.checked);
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
									checked={unitChecked}
									onChange={(e) => {
										setUnitChecked(e.target.checked);
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

const DetailFilters = () => {
	const [minPrice, setMinPrice] = useState(100);
	const [maxPrice, setMaxPrice] = useState(400);

	const menuItems = [];

	for (let i = 0; i <= 1000; i += 50) {
		menuItems.push(<MenuItem value={i}>${i}</MenuItem>);
	}
	for (let i = 1100; i <= 5000; i += 100) {
		menuItems.push(<MenuItem value={i}>${i}</MenuItem>);
	}

	const theme = createTheme({
		palette: {
			highlightColour: {
				main: "#3D1670",
				light: "#A59DB7",
				dark: "#A59DB7",
				contrastText: "#A59DB7",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				gap={2}
				style={{ display: "flex", justifyContent: "center" }}
			>
				{/* Price Filter */}
				<Grid xs={12}>
					<h3>Price</h3>
				</Grid>
				<Grid xs={5}>
					<FormControl fullWidth color="highlightColour">
						<InputLabel>Min</InputLabel>
						<Select
							color="highlightColour"
							variant="standard"
							value={minPrice}
							label="Min"
							onChange={(e) => {
								setMinPrice(e.target.value);
							}}
						>
							{menuItems}
						</Select>
					</FormControl>
				</Grid>
				<Grid xs={5}>
					<FormControl fullWidth>
						<InputLabel>Max</InputLabel>
						<Select
							variant="standard"
							value={maxPrice}
							label="Max"
							onChange={(e) => {
								setMaxPrice(e.target.value);
							}}
						>
							{menuItems}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default FilterOverlay;
