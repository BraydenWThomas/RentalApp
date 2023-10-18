import "../Styles/ProfileSettings.css"
import visible from "../Assets/visible.png"
import unvisible from "../Assets/visibility.png"
import { Button, Grid, TextField, Container, Select, MenuItem } from "@mui/material";

import { useState } from "react";

const ProfileSettings = ()=> {

    const [canShow, setCanShow] = useState(false)
    
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
        <div className="profile-settings-container">
            <h1 className="profile-settings-header">Account Settings</h1>

            <div className="settings-contents">
                <h3> Email</h3>
                <p> Users email here </p>

                <h3> Password</h3>

                {canShow ? 
                    <view>
                        <text> User Password Here </text>
                        <img className="visibility-icon" onClick={handleToggle} src={visible}></img>
                    </view>
                : 
                    <view>
                        <text> ********* </text>
                        <img className="visibility-icon"  onClick={handleToggle}  src={unvisible}></img>
                    </view>
                }

                




                <Button variant="contained" style={buttonStyle}> Delete Account</Button>
            </div>
        </div>
    )
}

export default ProfileSettings;
