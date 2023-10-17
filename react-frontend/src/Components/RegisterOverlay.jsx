import { Button, Grid, TextField, Container, Select, MenuItem, Modal } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "../Styles/RegisterOverlay.css"
import * as React from 'react';

const RegisterOverlay = (props) => {

    const [open, setOpen] = props.open

    const handleClose = () => {
        setOpen(false)
    }

    // var gender = "FEMALE"const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('');


    const changeGender = (event) => {
    setGender(event.target.value);
    };

    const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        marginRight: '10px',
        fontFamily: 'Oswald'
    }

    const textfieldStyle = {
        backgroundColor: 'white' 
    }
    

    return (
        <Modal
        open={open}
        onClose={handleClose}>
            <Container className="register-container" maxWidth="sm">
                <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'></link>
                <div className="formbox">
                        <form>
                            <Grid container>
                                <Grid xs={12}>
                                    <h1 style={{textAlign: 'left', paddingInline: '1rem'}} >Register</h1>
                                </Grid>
                                <Grid xs={6} paddingInline={2}>
                                    <p className="fieldLabel">First Name*</p>
                                    <TextField fullWidth className="formfield" style={textfieldStyle} required id="outline-required"/>
                                </Grid>
                                <Grid xs={6} paddingInline={2}>
                                    <p className="fieldLabel">Last Name*</p>
                                    <TextField fullWidth className="formfield" style={textfieldStyle}/>
                                </Grid>
                                <Grid xs={12} paddingInline={2}>
                                    <p className="fieldLabel">Email*</p>
                                    <TextField fullWidth className="formfield" style={textfieldStyle} type="email"/>
                                </Grid>
                                <Grid xs={12} paddingInline={2}>
                                    <p className="fieldLabel">Date of Birth*</p>
                                    <DatePicker className="formfield datePicker" color="white"/>
                                </Grid>
                                <Grid xs={12} paddingInline={2}>
                                    <p className="fieldLabel">Mobile*</p>
                                    <TextField fullWidth className="formfield" style={textfieldStyle} type="number"/>
                                </Grid>
                                <Grid xs={12} paddingInline={2}>
                                    <p className="fieldLabel">Gender*</p>
                                    <Select className="formfield datePicker" value={gender} onChange={changeGender}>
                                        <MenuItem value="FEMALE">Female</MenuItem>
                                        <MenuItem value="MALE">Male</MenuItem>
                                        <MenuItem value="NON_BINARY">Non-binary</MenuItem>
                                        <MenuItem value="PREFER_NOT_TO_SAY">Pefer not to say</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid xs={12} paddingInline={2}>
                                    <p className="fieldLabel">Password*</p>
                                    <TextField fullWidth className="formfield" style={textfieldStyle} type="password"/>
                                </Grid>
                                <Grid xs={12} paddingInline={2}>
                                    <p className="fieldLabel">Confirm Password*</p>
                                    <TextField fullWidth className="formfield" style={textfieldStyle} type="password"/>
                                    <p className="fieldLabel">Use 8 or more characters with a mix of lower and upper case letters & numbers.</p>
                                </Grid>
                                <Grid xs={12} paddingInline={2}>
                                    <Button variant="contained"  style={buttonStyle} size="large">
                                        Register
                                    </Button>
                                    <Button variant="contained"  style={buttonStyle} size="large">
                                        Log In
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
            </Container>
        </Modal>
    )
}

export default RegisterOverlay;