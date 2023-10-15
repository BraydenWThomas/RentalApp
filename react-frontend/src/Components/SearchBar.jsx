import { Grid, Button, TextField, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "../Styles/SearchBar.css";

const SearchBar = () => {


    return (
        <Grid container>
            <Grid xs={8}>
                <div className="searchBox">
                    <Stack direction="horizonal">
                        <SearchIcon />
                        <TextField variant="standard" fullWidth />
                        <Button variant="standard" className="filterBtn">Filters</Button>
                    </Stack>
                </div>
            </Grid>
            <Grid xs={4}>

            </Grid>
        </Grid>
    )
}

export default SearchBar;