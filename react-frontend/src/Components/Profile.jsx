import { Button, Grid, TextField, Container, Select, MenuItem } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "../Styles/Profile.css";
import * as React from 'react';

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
        // margin: '10px',
        width: '100%',
        
    }

    const subtext = {
        margin: 10,
        marginTop: -20,
        color: 'grey',
        fontFamily: 'Oswald'
    }
    

    return (
    <div className="profile-container">  
        <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'></link>

        <div className="profile-header">
            <h1 style={headingStyle} variant="contained">My Profile</h1>
            <Button variant="contained"  style={buttonStyle} size="large"> Log Out </Button>
        </div>

        <div className="profile-navigation">
            <div  className="profile-option-nav" style={profileBox}  >
                <p style={optionHeading}>Personal Details</p> 
                <p style={subtext}> Manage your Personal Details</p> 
            </div>

            <div  className="profile-option-nav" style={profileBox}  >
                <p style={optionHeading}>My Wallet</p> 
                <p style={subtext}> Manage your Wallet and Transactions</p> 
            </div>

            <div  className="profile-option-nav" style={profileBox}  >
                <p style={optionHeading}>My Properties</p> 
                <p style={subtext}> Manage your Rental Listings</p> 
            </div>

            <div  className="profile-option-nav" style={profileBox}  >
                <p style={optionHeading}>Account Settings</p> 
                <p style={subtext}> Manage your Account Settings</p> 
            </div>
        </div>

       <div className="profile-option-page">

       </div>
    </div>
        
    )
}

export default Profile