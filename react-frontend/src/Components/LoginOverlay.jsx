import { Box, Button, Modal, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import "../Styles/LoginOverlay.css";

import { useNavigate } from "react-router-dom";

const LoginOverlay = (props) => {
	const [open, setOpen] = props.open;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const nav = useNavigate();

	const buttonStyle = {
		backgroundColor: "#A59DB7",
		color: "white",
		marginTop: "30px",
	};

	const textfieldStyle = {
		backgroundColor: "white",
	};

	const handleClose = () => {
		setOpen(false);
	};

	const login = (e) => {
		e.preventDefault();

		// not secure -- need to change
		const url =
			"http://localhost:8080/api/v1/users/signin?email=" +
			email +
			"&password=" +
			password;
		axios
			.get(url)
			.then((res) => {
				const success = res.data;
				console.log(success);
				if (success) {
					console.log(password);
					setOpen(false);
					props.setIsLoggedIn(true);
					nav("/");

					setEmail("");
					setPassword("");
				}
			})
			.catch(console.log);
	};

	return (
		<Modal open={open} onClose={handleClose}>
			<Box className="login-container">
				<div className="login-content">
					<h1>Login</h1>
					<form>
						<p>Email</p>
						<TextField
							fullWidth
							style={textfieldStyle}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						></TextField>
						<p>Password</p>
						<TextField
							fullWidth
							style={textfieldStyle}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						></TextField>
					</form>

					<Button
						className="submit-button"
						type="submit"
						variant="contained"
						style={buttonStyle}
						onClick={login}
					>
						Login
					</Button>
					<p>
						Don't have an account? Register{" "}
						<a href="/register">here</a>.
					</p>
				</div>
			</Box>
		</Modal>
	);
};

export default LoginOverlay;
