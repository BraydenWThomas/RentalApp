import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import SignupPage from "./Components/SignupPage";
import Profile from "./Components/Profile";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
	return (
		<div className="App">
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Navbar></Navbar>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</LocalizationProvider>
		</div>
	);
}

export default App;
