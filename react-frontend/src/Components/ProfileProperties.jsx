import "../Styles/ProfileProperties.css"
// icons from here: https://www.flaticon.com/free-icons/visible

import { Button, Grid, TextField, Container, Select, MenuItem } from "@mui/material";
import * as React from 'react';
//import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { useState, useCallback } = React;

const mod = (n, m) => ((n % m) + m) % m;

const ProfileProperties = (props)=> {

    
    const [allProperties, setAllProperties] = React.useState([]);

    const [index, setIndex] = useState(0);

    const forwards = useCallback(() => 
        setIndex(state => mod(state + 1, allProperties.length)),[setIndex, allProperties]);
  
    const backwards = useCallback(() => 
        setIndex(state => mod(state - 1, allProperties.length)),[setIndex, allProperties]);

        
    const user = props.user
    const setUser = props.setUser
    const nav = useNavigate();

    const [firstName, setFirstName]  = React.useState('get users first name');
    const [lastName, setLlastName]  = React.useState('get users last name');

    const [address, setAddress]  = React.useState('get users adress');
    const [suburb, setSuburb]  = React.useState('get users suburb');
    const [state, setState]  = React.useState('get users state');
    const [postcode, setPostcode]  = React.useState('get users postcode');
    const [country, setCountry]  = React.useState('get users country');
    const [propertyType,setPropertyType] = useState('');


    const changeType = (event) => {
        setPropertyType(event.target.value)
    };

    const setPropertyBedroom = () => {
    };

      const setPropertyBathroom = () => {
    };

      const setPropertyCar = () => {
    };

    const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        fontFamily: 'Oswald',
        width:'100%',
        marginTop: 30,
        marginBottom:30,
    }



    React.useEffect(() =>{
        const url = "http://localhost:8080/api/v1/properties/ownProperties?userId="+ user.id ;
		axios
			.get(url)
			.then((res) => {
				setAllProperties(res.data);
                console.log(res.data[0]);
                console.log(allProperties[index].details.bedroom);
			})
			.catch(console.log);
    },[])

    const property = allProperties[index] || {};

    

    return(
        <div className="profile-properties-container">
            <h1 className="profile-properties-header">My Properties</h1>

            <div className="properties-contents">
                <Grid container>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">IMAGE ONLY</p>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <div className="heading">
                                    <h3 > {user.firstName} {user.lastName}  </h3>
                                </div>
                                
                                <div className="horizontal">
                                    <div className="heading">
                                        <h3 > RENT  </h3>
                                    </div>
                                    <div className="heading">
                                        <h3 > RENT DATE:  </h3>
                                    </div>
                                </div>

                                
                                <div className="horizontal">
                                    <div>
                                        <p className="formfield">Bedrooms</p>
                                        { <TextField fullWidth className="formfield" color="secondary" value={property.details ? property.details.bedroom : ''} onChange={(event) => setPropertyBedroom(event.target.value)}/> }
                                    </div>
                                    <div>
                                        <p className="formfield">Bathrooms</p>
                                        { <TextField fullWidth className="formfield" color="secondary" value={property.details ? property.details.bathroom : ''} onChange={(event) => setPropertyBathroom(event.target.value)}/> }
                                    </div>
                                    <div>
                                        <p className="formfield">Car</p>
                                        { <TextField fullWidth className="formfield" color="secondary" value={property.details ? property.details.carPark : ''} onChange={(event) => setPropertyCar(event.target.value)}/> }
                                    </div>
                                </div>

                                <div className="propertyType">
                                    <p className="propertyType"> Property Type:</p>
                                    <Select
                                        className="propertyType"
                                        value={propertyType}
                                        onChange={changeType}
                                    >
                                        <MenuItem value="APARTMENT">Apartment</MenuItem>
                                        <MenuItem value="HOUSE">House</MenuItem>
                                        <MenuItem value="ROOM">Room</MenuItem>
                                        <MenuItem value="TOWN_HOUSE">Town House</MenuItem>
                                        <MenuItem value="GRANNY_FLAT">Granny Flat</MenuItem>
                                    </Select>
                                </div>

                            </Grid>
                            


                            
                            <Grid xs={12} paddingInline={2}>
                                <p className="fieldLabel">Description</p>
                                <TextField fullWidth className="formfield" color="secondary" value={property.propertyDescription ? property.propertyDescription : ''} onChange={(event) => setState(event.target.value)}/>
                            </Grid>

                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Street</p>
                                <TextField fullWidth className="formfield" color="secondary" value={property.address ? property.address.street : ''} onChange={(event) => setSuburb(event.target.value)}/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Suburb</p>
                                <TextField fullWidth className="formfield" color="secondary" value={property.address ? property.address.suburb : ''} onChange={(event) => setSuburb(event.target.value)}/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">State</p>
                                <TextField fullWidth className="formfield" color="secondary" value={property.address ? property.address.state : ''} onChange={(event) => setSuburb(event.target.value)}/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Postcode</p>
                                <TextField fullWidth className="formfield" color="secondary" value={property.address ? property.address.postcode : ''} onChange={(event) => setSuburb(event.target.value)}/>
                            </Grid>
                            

                    </Grid>

            </div>
        </div>
    )
}

export default ProfileProperties;
