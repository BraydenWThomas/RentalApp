import "../Styles/ProfileSettings.css"
import visible from "../Assets/visible.png"
import unvisible from "../Assets/visibility.png"
// icons from here: https://www.flaticon.com/free-icons/visible
import axios from "axios";

import { Button, Grid, TextField, Container, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfileSettings = (props)=> {
    const user = props.user
    const nav = useNavigate();

    const [canShow, setCanShow] = useState(false);
    //const email = user.credentials.email;
    
    const handleToggle = () => {
        setCanShow((canShow) => !canShow);
      };

      const handleDelete = (e) => {
		e.preventDefault();

        axios.get("http://localhost:8080/api/v1/users/signout");
		props.setIsLoggedIn(false);

		// not secure -- need to change
		const url =
			"http://localhost:8080/api/v1/users/deactivate?userId="+
			user.id ;
		axios
			.post(url)
			.then((res) => {
				const success = res.data;
				console.log(success);
				if (success) {
					console.log("hello");
					nav("/");
					
				}
			})
			.catch(console.log);

		
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
                <p> {user.credentials.email} </p>


                <h3> Password</h3>

                {canShow ? 
                    <view>
                        <img className="visibility-icon" onClick={handleToggle} src={visible}></img>
                        <p> {user.credentials.password} </p>  
                        
                    </view>
                : 
                    <view>
                        <img className="visibility-icon"  onClick={handleToggle}  src={unvisible}></img>

                        <p> ********* </p>
                    </view>
                }

                <Button variant="contained" style={buttonStyle} onClick={handleDelete}> Delete Account</Button>
            </div>
        </div>
    )
}

export default ProfileSettings;
