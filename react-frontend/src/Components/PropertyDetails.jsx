import {
    Button,
    Grid,
    p,
    Container,
    Select,
    MenuItem,
    ThemeProvider,
    FormControl,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/PropertyDetails.css";
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import imagePlaceholder from "../Assets/No-Image-Placeholder.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { createTheme } from "@mui/material/styles";


const PropertyDetails = (props) => {
    const property = props.detailedProperty
    const [imageData, setImageData] = useState([])
    const [owner, setOwner] = useState('')
    const [imageIndex, setImageIndex] = useState(0)
    const [savedProps, setSavedProps] = useState([])

    console.log(property)

    const buttonStyle = {
        backgroundColor: "#A59DB7",
        color: "white",
        fontFamily: "Oswald",
    };

    const imageStyle = {
        maxWidth: "100%",
        height: "auto",
    };

    const imagePlaceholderStyle = {
        maxWidth: "100%",
        height: "auto",
    };


    useEffect(() => {
        // Get landlord name
        axios.get("http://localhost:8080/api/v1/users/" + property.landlord + "/name").then(res => {
            setOwner(res.data)
        }).catch(err => {
            console.log(err)
        })

        // Get images
        const url = `http://localhost:8080/api/v1/properties/${property.propertyId}/photos`;
        axios.get(url).then(res => {
            setImageData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const theme = createTheme({
        palette: {
            appColor: {
                main: "#A59DB7",
                light: "#A59DB7",
                dark: "#A59DB7",
                contrastText: "#A59DB7",
            },
        },
    });

    const checkBoxItemStyle = {
        padding: "5px 10px 5px 10px",
        borderRadius: "10px",
        backgroundColor: "#e3e1e9",
        textAlign: "left",
    };

    const nextPhoto = () => {
        setImageIndex((imageIndex + 1) % imageData.length)
    }

    const lastPhoto = () => {
        setImageIndex(((imageIndex - 1) % imageData.length + imageData.length) % imageData.length)
    }

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <link
                    href="https://fonts.googleapis.com/css?family=Oswald"
                    rel="stylesheet"
                ></link>
                <Grid container style={{ margin: '20px' }}>
                    <Grid xs={6} paddingInline={2}>
                        <div className="detail-item">
                            {property.address.unit + " " + property.address.street + ", " + property.address.suburb}
                        </div>
                    </Grid>
                    <Grid xs={6} paddingInline={2}>
                        <div className="detail-item">
                            {owner}
                        </div>

                    </Grid>
                    <Grid xs={6} paddingInline={2}>
                        {imageData[imageIndex] !== "" ? (
                            <img
                                style={imageStyle}
                                src={`data:image/jpg;base64,${imageData[imageIndex]}`}
                                alt="Property"
                            />
                        ) : (
                            <img
                                style={imagePlaceholderStyle}
                                src={imagePlaceholder}
                                alt={"Property with " + property.propertyDescription}
                            />
                        )}
                    </Grid>
                    <Grid xs={6} paddingInline={2}>

                        <div className="detail-item">
                            {"$" + property.rentalPrice + " per week"}
                        </div>

                        <div className="detail-item">
                            {property.propertyType}
                        </div>

                        <div className="amendities">
                            <div className="amendity">
                                <BedIcon />
                                {property.details.bedroom}
                            </div>

                            <div className="amendity">
                                <ShowerIcon />
                                {property.details.bathroom}
                            </div>

                            <div className="amendity">
                                <DirectionsCarIcon />
                                {property.details.carPark}
                            </div>
                        </div>


                        <p className="fieldLabel">Property Features</p>
                        <Grid
                            container
                            gap={2}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <Grid xs={5} style={checkBoxItemStyle}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableTouchRipple
                                            color="appColor"
                                            checked={property.facilities[0]}
                                        />
                                    }
                                    label="Furnished"
                                />
                            </Grid>

                            <Grid xs={5} style={checkBoxItemStyle}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableTouchRipple
                                            color="appColor"
                                            checked={property.facilities[1]}
                                        />
                                    }
                                    label="Pets allowed"
                                />
                            </Grid>
                            <Grid xs={5} style={checkBoxItemStyle}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableTouchRipple
                                            color="appColor"
                                            checked={property.facilities[2]}
                                        />
                                    }
                                    label="Air conditioning"
                                />
                            </Grid>
                            <Grid xs={5} style={checkBoxItemStyle}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableTouchRipple
                                            color="appColor"
                                            checked={property.facilities[3]}
                                        />
                                    }
                                    label="Dishwasher"
                                />
                            </Grid>
                            <Grid xs={5} style={checkBoxItemStyle}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableTouchRipple
                                            color="appColor"
                                            checked={property.facilities[4]}
                                        />
                                    }
                                    label="Balcony"
                                />
                            </Grid>
                            <Grid xs={5} style={checkBoxItemStyle}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableTouchRipple
                                            color="appColor"
                                            checked={property.facilities[5]}
                                        />
                                    }
                                    label="Swimming pool"
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid xs={6}>
                        {imageData.length === 0 ? (
                            <div className="detail-item">No Images</div>
                        ) : (
                            <div className="pager-container">
                                <button className="pager-btn" onClick={lastPhoto}>
                                    <ChevronLeftIcon />
                                </button>
                                {imageIndex + 1} / {imageData.length}
                                <button className="pager-btn" onClick={nextPhoto}>
                                    <ChevronRightIcon />
                                </button>
                            </div>)}

                    </Grid>

                    <Grid xs={6}>
                        <div className="applybookmark">
                            <Button variant="contained" style={buttonStyle}>Apply</Button>

                            {props.user?.bookmarkedProperties?.includes(property.propertyId) && (
                                <BookmarkIcon style={{ color: '#8D4DDF' }} fontSize="large" />
                            )}
                        </div>
                    </Grid>

                    <Grid xs={12}>
                        <div className="description">
                            {property.propertyDescription}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default PropertyDetails;