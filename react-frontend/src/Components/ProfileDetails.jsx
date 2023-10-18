import "../Styles/ProfileDetails.css"
import { Button, Grid, TextField, Container, Select, MenuItem } from "@mui/material";

import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ProfileDetails = ()=> {

    const [gender, setGender] = React.useState('');
    const [firstName, setFirstName]  = React.useState('get users first name');
    const [lastName, setLlastName]  = React.useState('get users last name');
    const [email, setEmail]  = React.useState('get users email');
    const [mobile, setMobile]  = React.useState('get users mobile');
    const [dob, setDob]  = React.useState('');
    const [occupation, setOccupation]  = React.useState('get users occupation');

    const [address, setAddress]  = React.useState('get users adress');
    const [suburb, setSuburb]  = React.useState('get users suburb');
    const [state, setState]  = React.useState('get users state');
    const [postcode, setPostcode]  = React.useState('get users postcode');
    const [country, setCountry]  = React.useState('get users country');


    const changeGender = (event) => {
    setGender(event.target.value);
  };


    const updateInformation = () => {
        console.log('update info clicked')
    };

    const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        fontFamily: 'Oswald',
        width:'100%',
        marginTop: 30,
        marginBottom:30,
    }

    return(
        <div className="profile-details-container">
            <h1 className="profile-details-header">Personal Details</h1>

            <div className="details-contents">
                <form>
                    <Grid container>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">First Name</p>
                                <TextField fullWidth className="formfield" value={firstName} color="secondary" onChange={(event) => setFirstName(event.target.value)}/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Last Name</p>
                                <TextField fullWidth className="formfield" color="secondary" value={lastName} onChange={(event) => setLlastName(event.target.value)}/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Email</p>
                                <TextField fullWidth className="formfield" color="secondary" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Phone Number</p>
                                <TextField fullWidth className="formfield" color="secondary" value={mobile} onChange={(event) => setMobile(event.target.value)}/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Date of Birth*</p>
                                <DatePicker className="formfield datePicker" /> 
                                
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Gender*</p>
                                <Select className="formfield datePicker" value={gender} onChange={changeGender}>
                                    <MenuItem value="FEMALE">Female</MenuItem>
                                    <MenuItem value="MALE">Male</MenuItem>
                                    <MenuItem value="NON_BINARY">Non-binary</MenuItem>
                                    <MenuItem value="PREFER_NOT_TO_SAY">Pefer not to say</MenuItem>
                                </Select>
                            </Grid>
                            <Grid xs={12} paddingInline={2}>
                                <p className="fieldLabel">Occupation</p>
                                <TextField fullWidth className="formfield" color="secondary" value={occupation} onChange={(event) => setOccupation(event.target.value)}/>
                            </Grid>
                            <Grid xs={12} paddingInline={2}>
                                <p className="fieldLabel">Current address</p>
                                <TextField fullWidth className="formfield" color="secondary" value={address} onChange={(event) => setAddress(event.target.value)}/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Suburb</p>
                                <TextField fullWidth className="formfield" color="secondary" value={suburb} onChange={(event) => setSuburb(event.target.value)}/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">State</p>
                                <TextField fullWidth className="formfield" color="secondary" value={state} onChange={(event) => setState(event.target.value)}/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Postcode</p>
                                <TextField fullWidth className="formfield" color="secondary" value={postcode} onChange={(event) => setPostcode(event.target.value)}/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Country</p>
                                <TextField fullWidth className="formfield" color="secondary" value={country} onChange={(event) => setCountry(event.target.value)}/>
                            </Grid>

                    </Grid>
                    
                    
                    <Button variant="contained" style={buttonStyle} onClick={updateInformation}> Update Information</Button>
                </form>
            </div>
        </div>
    )
}

export default ProfileDetails;
