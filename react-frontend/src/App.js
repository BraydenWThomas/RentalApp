import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import PropertySearch from "./Components/PropertySearch";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [searchTxt, setSearchTxt] = useState("");
	const [searchFilters, setSearchFilters] = useState({});
	const [searchResults, setSearchResults] = useState([]);

	return (
		<div className="App">
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Navbar isLoggedIn={isLoggedIn} />
				<Routes>
					<Route
						path="/"
						element={
							<HomePage
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
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
						path="/search"
						element={
							<PropertySearch
								searchTxt={searchTxt}
								setSearchTxt={setSearchTxt}
								searchFilters={searchFilters}
								setSearchFilters={setSearchFilters}
								searchResults={searchResults}
								setSearchResults={setSearchResults}
							/>
						}
					/>
				</Routes>
			</LocalizationProvider>
		</div>
	);
}

export default App;
