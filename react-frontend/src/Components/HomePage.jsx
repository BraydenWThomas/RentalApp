import { Button } from "@mui/material";
import "../Styles/HomePage.css"

const HomePage = () => {

    const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        marginRight: '10px'
    }

    return (
        <div className="home">
            <div className="top">
                <p className="slogan">Your Space, Your Wallet, All in One.</p>
                <div className="login-buttons">
                    <Button variant="contained" style={buttonStyle}>Login</Button>
                    <Button variant="contained" style={buttonStyle}>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;