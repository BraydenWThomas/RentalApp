import SearchBar from "./SearchBar";
import { Container, Grid, Stack,Button } from "@mui/material";
import { useState, useEffect } from "react";
import imagePlaceholder from "../Assets/No-Image-Placeholder.png";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";

const PropertySearch = (props) => {

    const user = props.user
    const setUser = props.setUser 


	const searchStyle = {
		padding: "10px",
	};

    const [allProps,setAllProps] = useState([]);
    

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/properties/saved/" + user.id)
        .then((res) => {
            setAllProps(res.data);
    })
      }, []);

    

	return (
		<Container>
			<Grid container>
				<Grid xs={12} style={searchStyle}>
					
				</Grid>
				<Grid xs={12}>
					{allProps.map((result) => (
						<PropertyCard
							property={result}
							key={result.propertyId}
						/>
            
					))}
				</Grid>
			</Grid>
		</Container>
	);
}; 

const PropertyCard = (props) => {

    

    const property = props.property
    const key = props.key 
    

	const containerStyle = {
		display: "flex",
		justifyContent: "center",
	};

	const boxStyle = {
		backgroundColor: "#A59DB780",
		width: "30rem",
		margin: "10px",
		borderRadius: "10px",
	};

	const imageStyle = {
		height: "auto",
		width: "30rem",
	};

	const infoStyle = {
		textAlign: "left",
		margin: "10px",
		color: "#3D1670",
		fontFamily: "Oswald",
	};

	const iconContainerStyle = {
		display: "flex",
		textAlign: "end",
		alignItems: "center",
		color: "#3D1670",
	};

    const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        fontFamily: 'Oswald',
        marginTop: 30,
        marginBottom:30,
    }

    const removeFavourite =() =>{

    }

    const [imageData, setImageData] = useState("");
    const url = `http://localhost:8080/api/v1/properties/${property.propertyId}/photo`;
 
    axios
        .get(url)
        .then((res) => {
            setImageData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

	return (
		<div style={containerStyle}>
			<div style={boxStyle}>
				<link
					href="https://fonts.googleapis.com/css?family=Oswald"
					rel="stylesheet"
				></link>

				<div style={infoStyle}>
					<h3>{"Leaser Name"}</h3>
				</div>

				{imageData.length > 0 ? (
                    <img
                        style={imageStyle}
                        src={`data:image/jpg;base64,${imageData}`}
                        alt={"Property with " + property.propertyDescription}
                    />
                ) : (
                    <img
                        style={imageStyle}
                        src={imagePlaceholder}
                        alt={"Property with " + property.propertyDescription}
                    />
                )}


                <Grid
                container
                >
					<Grid container xs={6} style={infoStyle} direction="column"
  justifyContent="flex-start"
  alignItems="flex-start">
						<h4>{"$" + property.rentalPrice + " per week"}</h4>
						<div>
							{property.address.unit +
								" " +
								property.address.street +
								", " +
								property.address.suburb +
								", " +
								property.address.state +
								" (" +
								property.address.postcode +
								")"}
						</div>
						<div>
							{property.details.bedroom +
								" Bed | " +
								property.details.bathroom +
								" Bath | " +
								property.details.carPark +
								" Car"}
						</div>
					</Grid>
					<Grid container xs={5} style={iconContainerStyle} direction="row"
  justifyContent="space-evenly"
  alignItems="flex-start" >
                        <Button variant="contained" style={buttonStyle}>Apply</Button>
                        <Button 
                            variant="contained" 
                            style={buttonStyle}
                            onClick={removeFavourite}
                        >
                            Remove
                        </Button>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};



export default PropertySearch;