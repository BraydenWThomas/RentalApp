import { Grid, Button, TextField, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../Styles/SearchBar.css";

const SearchBar = (props) => {
	const [openFilter, setOpenFilter] = props.openFilter;

	const searchBtnStyle = {
		backgroundColor: "#A59DB7",
		padding: "1rem",
	};

	const filterBtnStyle = {
		backgroundColor: "#A59DB740",
		color: "black",
	};

	const searchIconStyle = {
		// paddingRight: '10px',
		color: "gray",
	};

	const searchFieldStyle = {
		marginBottom: "10px",
		marginInline: "10px",
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
				<Button style={searchBtnStyle} variant="contained" size="large">
					Search
				</Button>
			</Grid>
		</Grid>
	);
};

export default SearchBar;
