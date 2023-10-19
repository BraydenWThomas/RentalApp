import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
// import SignupPage from "./Components/SignupPage";
import Profile from "./Components/Profile";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});

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
								user={user}
								setUser={setUser}
							/>
						}
					/>
					{/* <Route path="/signup" element={<SignupPage />} /> */}
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</LocalizationProvider>
		</div>
	);
}

export default App;
