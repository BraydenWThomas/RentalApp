import {
	Button,
	Grid,
	TextField,
	Container,
	Select,
	MenuItem,
	Modal,
	FormControl,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../Styles/RegisterOverlay.css";
import * as React from "react";
import axios from "axios";
import { createTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useNavigate } from "react-router-dom";
import { Stack, ThemeProvider } from "@mui/system";
import { create } from "@mui/material/styles/createTransitions";

const RegisterOverlay = (props) => {
	const [open, setOpen] = props.open;
	const nav = useNavigate();
	const api = "http://localhost:8080/api/v1";

	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [mobile, setMobile] = React.useState("");
	const [dob, setDob] = React.useState(new Date());
	const [password, setPassword] = React.useState("");
	const [password2, setPassword2] = React.useState("");
	const [profilePhoto, setProfilePhoto] = React.useState(null);

	const fileInputBtn = React.useRef(null);

	const handleClose = () => {
		setOpen(false);
	};

	const imageChanged = (e) => {
		setProfilePhoto(e.target.files[0]);
	};

	const uploadPhoto = (userId) => {
		const data = new FormData();

		data.append("profilePhoto", profilePhoto, profilePhoto.name);

		console.log(profilePhoto);

		axios.post(api + "/users/" + userId + "/profilePhoto", data);
	};

	const imagePickerBtnClick = () => {
		fileInputBtn.current.click();
	};

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

	// var gender = "FEMALE"const [age, setAge] = React.useState('');
	const [gender, setGender] = React.useState("");

	const changeGender = (event) => {
		setGender(event.target.value);
	};

	const buttonStyle = {
		backgroundColor: "#A59DB7",
		color: "white",
		marginRight: "10px",
		fontFamily: "Oswald",
	};

	const imagePickerbuttonStyle = {
		backgroundColor: "#FFFF",
		color: "#000",
		marginRight: "10px",
		fontFamily: "Oswald",
	};

	const textfieldStyle = {
		backgroundColor: "white",
	};

	const imageUploadStackStyle = {
		display: "flex",
		alignItems: "center",
		marginBottom: "15px",
	};

	const imageUploadStyle = {};

	const register = (e) => {
		e.preventDefault();

		if (password !== password2) {
			alert("Passwords do not match")
			return
		}

		const passwordValidatnStr = "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-\\\/.><,])"
		const regex = new RegExp(passwordValidatnStr)
		const res = regex.test(password)

		if (!res) {
			alert("Password failed validation")
			return
		}

		// if (password !== password2) {
		// not secure -- need to change
		const url = "http://localhost:8080/api/v1/users";
		axios
			.post(url, {
				firstName: firstName,
				lastName: lastName,
				mobile: mobile,
				gender: gender,
				dateOfBirth: dob,
				occupation: "",
				currentAddress: "",
				isActive: true,
				bookmarkedProperties: [],
				transactionHistory: [],
				balance: 0,
				credentials: {
					password: password,
					email: email,
				},
				propertySearchPreferences: [],
			})
			.then((res) => {
				console.log(res);

				// Upload photo if chosen
				if (profilePhoto) {
					uploadPhoto(res.data.id);
				}

				// Close modal
				handleClose();
				nav("/");

				// Reset form
				setFirstName("")
				setLastName("")
				setEmail("")
				setDob(new Date())
				setGender("Female")
				setMobile("")
				setPassword("")
				setPassword2("")
				setProfilePhoto(null)
			})
			.catch(console.log);
		// }
	};

	return (
		<Modal open={open} onClose={handleClose}>
			<ThemeProvider theme={theme}>
				<Container className="register-container" maxWidth="sm">
					<link
						href="https://fonts.googleapis.com/css?family=Oswald"
						rel="stylesheet"
					></link>
					<div className="formbox">
						<FormControl>
							<Grid container>
								<Grid xs={12}>
									<h1
										style={{
											textAlign: "left",
											paddingInline: "1rem",
										}}
									>
										Register
									</h1>
								</Grid>

								{/* First name */}
								<Grid xs={6} paddingInline={2}>
									<p className="fieldLabel">First Name*</p>
									<TextField
										fullWidth
										className="formfield"
										style={textfieldStyle}
										required
										id="outline-required"
										onChange={(e) => {
											setFirstName(e.target.value);
										}}
									/>
								</Grid>

								{/* Last name */}
								<Grid xs={6} paddingInline={2}>
									<p className="fieldLabel">Last Name*</p>
									<TextField
										fullWidth
										className="formfield"
										style={textfieldStyle}
										onChange={(e) => {
											setLastName(e.target.value);
										}}
									/>
								</Grid>

								{/* Email */}
								<Grid xs={12} paddingInline={2}>
									<p className="fieldLabel">Email*</p>
									<TextField
										fullWidth
										className="formfield"
										style={textfieldStyle}
										type="email"
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</Grid>

								{/* Date of birth select */}
								<Grid xs={12} paddingInline={2}>
									<p className="fieldLabel">Date of Birth*</p>
									<DatePicker
										dateFormat="dd/MM/yyyy"
										className="formfield datePicker"
										color="white"
										onChange={(date) => {
											setDob(date);
										}}
									/>
								</Grid>

								{/* Mobile number */}
								<Grid xs={12} paddingInline={2}>
									<p className="fieldLabel">Mobile*</p>
									<TextField
										fullWidth
										className="formfield"
										style={textfieldStyle}
										type="number"
										onChange={(e) => {
											setMobile(e.target.value);
										}}
									/>
								</Grid>

								{/* Gender select */}
								<Grid xs={12} paddingInline={2}>
									<p className="fieldLabel">Gender*</p>
									<Select
										className="formfield datePicker"
										value={gender}
										onChange={changeGender}
									>
										<MenuItem value="FEMALE">
											Female
										</MenuItem>
										<MenuItem value="MALE">Male</MenuItem>
										<MenuItem value="NON_BINARY">
											Non-binary
										</MenuItem>
										<MenuItem value="PREFER_NOT_TO_SAY">
											Pefer not to say
										</MenuItem>
									</Select>
								</Grid>

								{/* Password */}
								<Grid xs={12} paddingInline={2}>
									<p className="fieldLabel">Password*</p>
									<TextField
										fullWidth
										className="formfield"
										style={textfieldStyle}
										type="password"
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
								</Grid>

								{/* Confirm password */}
								<Grid xs={12} paddingInline={2}>
									<p className="fieldLabel">
										Confirm Password*
									</p>
									<TextField
										fullWidth
										className="formfield"
										style={textfieldStyle}
										type="password"
										onChange={(e) => {
											setPassword2(e.target.value);
										}}
									/>
									<p className="fieldLabel">
										Use 8 or more characters with a mix of
										lower and upper case letters & numbers.
									</p>
								</Grid>

								{/* profile picture upload */}
								<Grid xs={12} paddingInline={2}>
									<Stack
										direction="horizontal"
										style={imageUploadStackStyle}
										gap={2}
									>
										<AccountCircleIcon fontSize="large" />
										<Button
											variant="outlined"
											style={imagePickerbuttonStyle}
											color="appColor"
											onClick={imagePickerBtnClick}
										>
											Choose Profile Picture
										</Button>
										<input
											type="file"
											style={{ display: "none" }}
											onChange={imageChanged}
											ref={fileInputBtn}
										/>
									</Stack>
								</Grid>

								{/* Register and cancel buttons */}
								<Grid xs={12} paddingInline={2}>
									<Button
										variant="contained"
										style={buttonStyle}
										size="large"
										onClick={register}
									>
										Register
									</Button>
									<Button
										variant="contained"
										style={buttonStyle}
										size="large"
										onClick={handleClose}
									>
										Cancel
									</Button>
								</Grid>
							</Grid>
						</FormControl>
					</div>
				</Container>
			</ThemeProvider>
		</Modal>
	);
};

export default RegisterOverlay;
