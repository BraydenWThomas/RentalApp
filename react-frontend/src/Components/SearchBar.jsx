import { Grid, Button, TextField, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../Styles/SearchBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchTxt, setSearchTxt, search, setSearch }) => {
    const nav = useNavigate();

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

    const applySearch = () => {
        if (setSearch !== undefined) {
            setSearch(!search)
        }
        if (searchTxt.length > 0) {
            console.log("Searchtext = " + searchTxt)
            nav("/search")
        }
    }

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
                            onChange={(e) => { setSearchTxt(e.target.value) }}
                        />
                        <Button
                            variant="contained"
                            disableElevation
                            style={filterBtnStyle}
                        >
                            Filters
                        </Button>
                    </Stack>
                </div>
            </Grid>
            <Grid xs={2}>
                <Button style={searchBtnStyle} variant="contained" size="large" onClick={applySearch}>
                    Search
                </Button>
            </Grid>
        </Grid>
    );
};

export default SearchBar;
