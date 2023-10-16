import { Button, Grid, TextField, Container, Select, MenuItem } from "@mui/material";
import "../Styles/Profile.css";
import * as React from 'react';
import ProfileWallet from "./ProfileWallet.jsx";

const Profile = () => {
    const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        fontFamily: 'Oswald',
        marginTop: 30,
        marginBottom:30,
    }
    const headingStyle = {
        color: 'black',
        fontFamily: 'Oswald'
    }

    const optionHeading = {
        color: 'black',
        fontFamily: 'Oswald',
        fontSize: '20px',
    }

    const profileBox = {
        backgroundColor: '#A59DB740',
        margin: '10px',
        width: '100%',  
    }

    const option = {
        backgroundColor: '#ffffff',
        margin: '10px',
        width:'100%',
        boxShadow: '1px 2px 9px #808080',
        borderRadius: '5px',
        padding: '10px',
    }

    const subtext = {
        margin: 10,
        marginTop: -20,
        color: 'grey',
        fontFamily: 'Oswald'
    }
    

    return (
    <Container >  
        <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'></link>
        
        <Grid container spacing={2}>
            <Grid  contaienr xs={6} >
                    <h1 style={headingStyle} variant="contained" justifyContent="flex-start">My Profile</h1>
            </Grid>

            <Grid  container xs={6} justifyContent="flex-end">
                <Button variant="contained"  style={buttonStyle} size="large"> Log Out </Button>
            </Grid>
        </Grid>

        <Grid container spacing={2}  direction="row" xs={12}>
            <Grid container   direction="column" xs={3}>
                <Grid container justifyContent="flex-start" >
                    <div  className="profileOption" style={profileBox}  >
                        <p style={optionHeading}>Personal Details</p> 
                        <p style={subtext}> Manage your Personal Details</p> 
                    </div>
                </Grid>

                <Grid container justifyContent="flex-start" >
                    <div  className="profileOption" style={profileBox}  >
                        <p style={optionHeading}>My Wallet</p> 
                        <p style={subtext}> Manage your Wallet and Transactions</p> 
                    </div>
                </Grid>

                <Grid container justifyContent="flex-start" >
                    <div  className="profileOption" style={profileBox}  >
                        <p style={optionHeading}>My Properties</p> 
                        <p style={subtext}> Manage your Rental Listings</p> 
                    </div>
                </Grid>

                <Grid container justifyContent="flex-start">
                    <div  className="profileOption" style={profileBox}  >
                        <p style={optionHeading}>Accoutn Settings</p> 
                        <p style={subtext}> Manage your Account Settings</p> 
                    </div>
                </Grid>
            </Grid>
            <Grid container direction="column" xs={9}>
                <Grid container justifyContent="flex-start">
                    <div className="Option" style={option}>
                        <ProfileWallet/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
        
       
       
        
            
    </Container>
        
    )
}

export default Profile