import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import SignupPage from "./Components/SignupPage";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/signup" element={<SignupPage />} />
			</Routes>
		</div>
	);
}

export default App;
