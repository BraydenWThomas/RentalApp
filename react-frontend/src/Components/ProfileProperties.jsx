import "../Styles/ProfileProperties.css"
// icons from here: https://www.flaticon.com/free-icons/visible

import { Button, Grid, TextField, Container, Select, MenuItem } from "@mui/material";

import { useState } from "react";

const ProfileProperties = ()=> {

    const [canShow, setCanShow] = useState(false)
    const [email, setEmail]  = useState('get users email');
    const [password, setPassword]  = useState('get users password');
    
    const handleToggle = () => {
        setCanShow((canShow) => !canShow);
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
        <div className="profile-properties-container">
            <h1 className="profile-properties-header">My Properties</h1>

            <div className="properties-contents">
                <div  className="balance-container">
                    <p className="balance-amount">$2999</p> 
                    <p>Current Balance</p> 
                </div>

                <div className="wallet-action">
                    <p>Make Payment</p>
                </div>

            </div>
        </div>
    )
}

export default ProfileProperties;
