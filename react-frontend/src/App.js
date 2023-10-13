import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import SignupPage from "./Components/SignupPage";
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
				</Routes>
			</LocalizationProvider>
		</div>
	);
}

export default App;
