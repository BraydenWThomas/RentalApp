import { Grid, Button, TextField, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../Styles/SearchBar.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
	const nav = useNavigate();
	const api = "http://localhost:8080/api/v1";
	const openFilter = props.openFilter;
	const setOpenFilter = props.setOpenFilter;
	const searchTxt = props.searchTxt;
	const setSearchTxt = props.setSearchTxt;
	const searchResults = props.searchResults;
	const setSearchResults = props.setSearchResults;

	const setSearchFilters=props.setSearchFilters
	const searchFilters=props.searchFilters

	//
	console.log("search "+props.searchFilters)
	console.log("search "+searchFilters)

	const searchBtnStyle = {
		backgroundColor: "#A59DB7",
		padding: "1rem",
	};

	const filterBtnStyle = {
		backgroundColor: "#A59DB740",
		color: "black",
	};

	const searchIconStyle = {
		color: "gray",
	};

	const searchFieldStyle = {
		marginBottom: "10px",
		marginInline: "10px",
	};

	const applySearch = (searchFilters) => {
		console.log("Searchtext = " + searchTxt);
		//
		//console.log(searchFilters)

		// Search
		const url =
			api +
			("/properties/search" +
				"?searchTxt=" +
				searchTxt +
				"&minBed=" +
				0 +
				"&maxBed=" +
				300 +
				"&minBath=" +
				0 +
				"&maxBath=" +
				300 +
				"&minBudget=" +
				0 +
				"&maxBudget=" +
				5010 +
				"&minCar=" +
				0 +
				"&maxCar=" +
				300 +
				"&minSize=" +
				0 +
				"&maxSize=" +
				300000 +
				"&type=" +
				"Apartment" +
				"&isAvailable=" +
				true);

		axios
			.get(url)
			.then((res) => {
				setSearchResults(res.data);
				console.log("Done");
			})
			.catch((err) => {
				console.log(err);
			});

		// Navigate to search results page
		nav("/search");
	};

	return (
		<Grid container className="searchContainer">
			<Grid xs={10}>
				<div className="searchBox">
					<Stack direction="horizonal" className="searchFieldStack">
						<SearchIcon style={searchIconStyle} />
						<TextField
							variant="standard"
							fullWidth
							label="Search"
							style={searchFieldStyle}
							color="secondary"
							onChange={(e) => {
								setSearchTxt(e.target.value);
							}}
						/>
						<Button
							variant="contained"
							disableElevation
							style={filterBtnStyle}
							onClick={() => {
								setOpenFilter(true);
							}}
						>
							Filters
						</Button>
					</Stack>
				</div>
			</Grid>
			<Grid xs={2}>
				<Button
					style={searchBtnStyle}
					variant="contained"
					size="large"
					onClick={() =>applySearch(props.searchFilters)}
				>
					Search
				</Button>
			</Grid>
		</Grid>
	);
};

export default SearchBar;
