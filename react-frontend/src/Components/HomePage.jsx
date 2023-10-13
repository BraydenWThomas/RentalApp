import { Button } from "@mui/material";
import "../Styles/HomePage.css"
import LoginOverlay from "./LoginOverlay";
import { useEffect, useState } from "react";

const HomePage = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(open)
    }, [])

    const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        marginRight: '10px'
    }

    const handleClick = () => {
        setOpen(true)
    }

    
    return (
        <div className="home">
            <div className="top">
                <p className="slogan">Your Space, Your Wallet, All in One.</p>
                <div className="login-buttons">
                    <Button variant="contained" style={buttonStyle} onClick={handleClick}>Login</Button>
                    <Button variant="contained" style={buttonStyle}>Sign Up</Button>
                </div>
            </div>

            <LoginOverlay open={[open, setOpen]} />
        </div>
    )
}

export default HomePage;