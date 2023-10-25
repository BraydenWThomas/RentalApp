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
		
		//console.log(searchFilters)

		// start date/end date currently not implemented
		// Search
		const url =
			api +
			("/properties/search" 
/* 				+
				"?searchTxt=" +
				searchTxt +
				"&minBed=" +
				searchFilters["detailFilters"]["minBedrooms"] +
				"&maxBed=" +
				searchFilters["detailFilters"]["maxBedrooms"] +
				"&minBath=" +
				0 +
				"&maxBath=" +
				300 +
				"&minPrice=" +
				searchFilters["detailFilters"]["minPrice"] +
				"&maxPrice=" +
				searchFilters["detailFilters"]["maxPrice"] +
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
				true */
				);

				const options = {
					method:'POST',
					url: api+'/properties/search',
					params: { 'api-version': '3.0' },
					headers: {
						'content-type': 'application/json',
					},
					data: searchFilters
				}
				console.log(options.data)
/* 		axios
			.get(options)
			.then((res) => {
				setSearchResults(res.data);
				console.log("Done");
			})
			.catch((err) => {
				console.log(err);
			}); */

			axios
			.request(options)
			.then((res) => {
				console.log("res data " + res.data);
				setSearchResults(res.data);
				console.log("Done");
			})
			.catch((err) => {
				console.log("its an error");
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
