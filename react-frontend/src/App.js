import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Profile from "./Components/Profile";

import { LocalizationProvider } from "@mui/x-date-pickers";
import 'dayjs/locale/en-au'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className="App">
			<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-au">
				<Navbar isLoggedIn={isLoggedIn} />
				<Routes>
					<Route
						path="/"
						element={
							<HomePage
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
							/>
						}
					/>
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</LocalizationProvider>
		</div>
	);
}

export default App;
