import "../Styles/ProfileProperties.css"
// icons from here: https://www.flaticon.com/free-icons/visible

import { Button, Grid, TextField, Container, Select, MenuItem } from "@mui/material";
import * as React from 'react';
import { useState } from "react";

const ProfileProperties = ()=> {

    const [firstName, setFirstName]  = React.useState('get users first name');
    const [lastName, setLlastName]  = React.useState('get users last name');

    const [address, setAddress]  = React.useState('get users adress');
    const [suburb, setSuburb]  = React.useState('get users suburb');
    const [state, setState]  = React.useState('get users state');
    const [postcode, setPostcode]  = React.useState('get users postcode');
    const [country, setCountry]  = React.useState('get users country');
  

    const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        fontFamily: 'Oswald',
        width:'100%',
        marginTop: 30,
        marginBottom:30,
    }

    return(
        <div className="profile-properties-container">
            <h1 className="profile-properties-header">My Properties</h1>

            <div className="properties-contents">
            <Grid container>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">IMAGE ONLY</p>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Last Name</p>
                                <TextField fullWidth className="formfield" color="secondary" value={lastName} onChange={(event) => setLlastName(event.target.value)}/>
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

            </div>
        </div>
    )
}

export default ProfileProperties;
