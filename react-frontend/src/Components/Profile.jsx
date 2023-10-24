import { Button, Grid, TextField, Container, Select, MenuItem } from "@mui/material";
import "../Styles/Profile.css";
import * as React from 'react';
import { useState } from "react";
import ProfileWallet from "./ProfileWallet";
import ProfileSettings from "./ProfileSettings";
import ProfileDetails from "./ProfileDetails";
import ProfileProperties from "./ProfileProperties";
import { useLocation } from 'react-router-dom';
import axios from "axios";


const Profile = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
    const user = props.user
    const setUser = props.setUser

    

    // const location = useLocation();
    // const { from } = location.state;

    React.useEffect(() => {
        console.log(user)


        const url = "http://localhost:8080/api/v1/properties/ownProperties?userId="+ user.id ;
		axios
			.get(url)
			.then((res) => {
				setAllProperties(res.data);
                console.log('PRINT ALL PROPERTIES')
                console.log(res.data);
			})
			.catch(console.log);

    }, [])

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

    const [activeTab, setActiveTab] = useState('details')

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    const [allProperties, setAllProperties] = React.useState([]);

    
    

    return (
    <div className="profile-container">  
        <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'></link>

        <div className="profile-header">
            <h1 style={headingStyle} variant="contained">My Profile</h1>
            <Button variant="contained"  style={buttonStyle} size="large"> Log Out </Button>
        </div>

        <div className="profile-navigation">
            <div  className="profile-option-nav" style={profileBox} 
            onClick={() => handleTabClick('details')}>
                <p style={optionHeading}>Personal Details</p> 
                <p style={subtext}> Manage your Personal Details</p> 
            </div>

            <div  className="profile-option-nav" style={profileBox} 
            onClick={() => handleTabClick('wallet')}>
                <p style={optionHeading}>My Wallet</p> 
                <p style={subtext}> Manage your Wallet and Transactions</p> 
            </div>

            <div  className="profile-option-nav" style={profileBox} 
            onClick={() => handleTabClick('properties')}>
                <p style={optionHeading}>My Properties</p> 
                <p style={subtext}> Manage your Rental Listings</p> 
            </div>

            <div  className="profile-option-nav" style={profileBox} 
            onClick={() => handleTabClick('settings')}>
                <p style={optionHeading}>Account Settings</p> 
                <p style={subtext}> Manage your Account Settings</p> 
            </div>
        </div>

       <div className="profile-option-page">
            {activeTab === 'wallet' && <ProfileWallet 
            user={user}
            />}
            {activeTab === 'settings' && <ProfileSettings 
                user={user}
                setIsLoggedIn={setIsLoggedIn}
            />}
            {activeTab === 'details' && <ProfileDetails
                user={user}
                setUser={setUser}
            />}
            {activeTab === 'properties' && <ProfileProperties
                user={user}
                setUser={setUser}
                allProperties={allProperties}
                setAllProperties={setAllProperties}
            />}

       </div>
    </div>
        
    )
}

export default Profile;