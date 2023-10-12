import { Button } from "@mui/material";
import "../Styles/HomePage.css"

const HomePage = () => {

    return (
        <div className="home">
            <div className="top">
                <p className="slogan">Your Space, Your Wallet, All in One.</p>
                <div className="login-buttons">
                    <Button variant="contained" style={{backgroundColor: '#A59DB7', color: "white"}}>Login</Button>
                    <Button className="signup-button" variant="contained" style={{backgroundColor: '#A59DB7', color: "white"}}>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;