import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import SavedProperties from "./Components/SavedProperties";
import Profile from "./Components/Profile";
import PropertySearch from "./Components/PropertySearch";
import { LocalizationProvider } from "@mui/x-date-pickers";
import "dayjs/locale/en-au";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	const [searchTxt, setSearchTxt] = useState("");

	const [searchFilters, setSearchFilters] = useState({
		locationFilters: [""],
		propertyTypes: {
			house: false,
			apartment: false,
			townhouse: false,
			grannyflat: false,
			room: false,
			unit: false,
		},
		detailFilters: {
			minPrice: 0,
			maxPrice: 1000,
			minBedrooms: 0,
			maxBedrooms: 12,
			minBathrooms: 0,
			maxBathrooms: 6,
			minCars: 0,
			maxCars: 6,
			//missing start/end date
		},
	});
	const [searchResults, setSearchResults] = useState([]);

	return (
		<div className="App">
			<LocalizationProvider
				dateAdapter={AdapterDayjs}
				adapterLocale="en-au"
			>
				<Navbar isLoggedIn={isLoggedIn} user={user} setUser={setUser} />
				<Routes>
					<Route
						path="/"
						element={
							<HomePage
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
								user={user}
								setUser={setUser}
								searchTxt={searchTxt}
								setSearchTxt={setSearchTxt}
								searchFilters={searchFilters}
								setSearchFilters={setSearchFilters}
								searchResults={searchResults}
								setSearchResults={setSearchResults}
							/>
						}
					/>
					<Route
						path="/savedProperties"
						element={
							<SavedProperties
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
								user={user}
								setUser={setUser}
								searchTxt={searchTxt}
								setSearchTxt={setSearchTxt}
								searchFilters={searchFilters}
								setSearchFilters={setSearchFilters}
								searchResults={searchResults}
								setSearchResults={setSearchResults}
							/>
						}
					/>

					{/* <Route path="/signup" element={<SignupPage />} /> */}
					<Route
						path="/profile"
						element={
							<Profile
								user={user}
								setUser={setUser}
								setIsLoggedIn={setIsLoggedIn}
							/>
						}
					/>
					<Route
						path="/search"
						element={
							<PropertySearch
								searchTxt={searchTxt}
								setSearchTxt={setSearchTxt}
								setIsLoggedIn={setIsLoggedIn}
								searchFilters={searchFilters}
								setSearchFilters={setSearchFilters}
								searchResults={searchResults}
								setSearchResults={setSearchResults}
								user={user}
							/>
						}
					/>
				</Routes>
			</LocalizationProvider>
		</div>
	);
}

export default App;
