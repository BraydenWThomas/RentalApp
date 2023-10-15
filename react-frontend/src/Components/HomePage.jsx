import { Button, Container, Grid } from "@mui/material";
import "../Styles/HomePage.css"
import SearchBar from "./SearchBar";

const HomePage = () => {

    const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        marginRight: '10px',
        fontFamily: 'Oswald'
    }

    return (
        <div className="home">
            <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'></link>
            <div className="top">
                <p className="slogan">Your Space, Your Wallet, All in One.</p>
                <div className="login-buttons">
                    <Button variant="contained" style={buttonStyle}>Login</Button>
                    <Button variant="contained" style={buttonStyle}>Sign Up</Button>
                </div>
            </div>

            <Container>
                <div className="box">
                    <Grid container>
                        {/* Search */}
                        <Grid xs={12}>
                            <SearchBar />
                        </Grid>
                        {/* Recent Searches */}
                        <Grid xs={12}>
                            <p>Test 2</p>
                        </Grid>
                    </Grid>
                </div>
                <h3 className="heading">Latest Listings</h3>
            </Container>
        </div>
    )
}

export default HomePage;