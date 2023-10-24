import SearchBar from "./SearchBar";
import { Container, Grid, Stack } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import StarIcon from '@mui/icons-material/Star';

const PropertySearch = ({ searchTxt, setSearchTxt }) => {
    const [search, setSearch] = useState(false)
    const [results, setResults] = useState([])
    const api = "http://localhost:8080/api/v1"

    const searchStyle = {
        padding: '10px'
    }

    useEffect(() => {
        const url = api + ("/properties/search?" +
            "minBed=" + 0 +
            "&maxBed=" + 3 +
            "&minBath=" + 0 +
            "&maxBath=" + 3 +
            "&minBudget=" + 0 +
            "&maxBudget=" + 501 +
            "&minCar=" + 0 +
            "&maxCar=" + 3 +
            "&minSize=" + 0 +
            "&maxSize=" + 30000 +
            "&type=" + "Apartment" +
            "&isAvailable=" + "true");

        console.log("Searching")
        axios.get(url)
            .then(res => {
                setResults(res.data)
                console.log("Done")
            })
            .catch(err => {
                console.log(err)
            })
    }, [search])

    return (
        <Container>
            <Grid container>
                <Grid xs={12} style={searchStyle}>
                    <SearchBar searchTxt={searchTxt} setSearchTxt={setSearchTxt} search={search} setSearch={setSearch} />
                </Grid>
                <Grid xs={12}>
                    <p>{results.length + " properties matched your search"}</p>
                </Grid>
                <Grid xs={12}>
                    {results.map((result) => (
                        <PropertyCard property={result} />
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
}

const PropertyCard = ({ property }) => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
    }

    const boxStyle = {
        backgroundColor: '#A59DB780',
        width: '30rem',
        margin: '10px',
        borderRadius: '10px',
    }

    const imageStyle = {
        height: 'auto',
        width: '30rem'
    };

    const infoStyle = {
        textAlign: 'left',
        margin: '10px',
        color: '#3D1670',
        fontFamily: 'Oswald',
    }

    const iconContainerStyle = {
        display: 'flex',
        textAlign: 'end',
        alignItems: 'center',
        color: '#3D1670',
    }

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

                {property.images.length > 0 && (
                    <img style={imageStyle} src={`data:image/jpg;base64,${property.images[0].data}`} />
                )}

                <Grid container >
                    <Grid xs={10} style={infoStyle}>
                        <p>{"$" + property.rentalPrice + " per week"}</p>
                        <p>{property.address.unit + " " + property.address.street + ", " + property.address.suburb + ", " + property.address.state + " (" + property.address.postcode + ")"}</p>
                        <p>{property.details.bedroom + " Bed | " + property.details.bathroom + " Bath | " + property.details.carPark + " Car"}</p>
                    </Grid>
                    <Grid xs={1} style={iconContainerStyle}>
                        <StarIcon fontSize="large" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default PropertySearch;