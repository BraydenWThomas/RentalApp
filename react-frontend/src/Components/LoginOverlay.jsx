import { Box, Button, Modal, TextField } from "@mui/material";
import "../Styles/LoginOverlay.css"

const LoginOverlay = ( props ) => {

    const [open, setOpen] = props.open

    const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        marginTop: '30px'
    }

    const textfieldStyle = {
        backgroundColor: 'white'
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (

        <Modal 
        open={open}
        onClose={handleClose}>
            <Box className="login-container">
                <div className="login-content">
                    <h1>Login</h1>
                    <form>
                        <p>Email</p>
                        <TextField fullWidth style={textfieldStyle}></TextField>
                        <p>Password</p>
                        <TextField fullWidth style={textfieldStyle}></TextField>
                        
                    </form>
                    
                    <Button
                        className="submit-button"
                        type="submit"
                        variant="contained"
                        style={buttonStyle}
                    >
                        Login
                    </Button>
                    <p>Don't have an account? Register <a href="/register">here</a>.</p>
                    
                </div>
            </Box>

        </Modal>
    )
}

export default LoginOverlay;