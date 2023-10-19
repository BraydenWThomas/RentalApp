import "../Styles/ProfileWallet.css"
import paymentIcon from "../Assets/payment-icon.png"
import rechargeIcon from "../Assets/recharge-icon.png"
import { Box, Button, MenuItem, Modal, Select, TextField } from "@mui/material"
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import avatar from "../Assets/avatarSmall.svg"

const ProfileWallet = ()=> {

    const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        fontFamily: 'Oswald',
        marginTop: 30,
        marginBottom:30,
    }

    const [openPayment, setOpenPayment] = useState(false)
    const [openRecharge, setOpenRecharge] = useState(false)

    const handlePaymentClose = () => {
        setOpenPayment(false)
    }

    const handleRechargeClose = () => {
        setOpenRecharge(false)
    }

    return(
        <div className="profile-wallet-container">
            <h1 className="profile-wallet-header">My Wallet</h1>

            <div className="wallet-contents">

                <div  className="balance-container">
                    <p className="balance-amount">$2999</p> 
                    <p>Current Balance</p> 
                </div>

                <div className="wallet-action" onClick={() => setOpenPayment(true)}>
                    <img src={paymentIcon}></img>
                    <p>Make Payment</p>
                </div>

                <div className="wallet-action" onClick={() => setOpenRecharge(true)}>
                    <img src={rechargeIcon}></img>
                    <p>Recharge Wallet</p>
                </div>

            </div>

            <div className="transaction-log">
                <div className="transaction-entry">
                
                    <img src={avatar} alt="avatar"></img>
                    <p>Sender Name</p>
    
                    <p>date</p>
                    <p>+ $230</p>
                </div>
            </div>

            <Modal open={openPayment}>
                <Box className="payment-container">
                    <CloseIcon className="close-icon" onClick={handlePaymentClose}/>
                    <h1>Payment</h1>
                    <p>Property ID</p>
                    <Select
                        fullWidth
                        // value={age}
                        // label="Age"
                        // onChange={handleChange}
                    >
                        {/* <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                    <p>Amount</p>
                    <TextField variant="filled" fullWidth></TextField>
                    <p>How Often?</p>
                    <Select
                        fullWidth
                        // value={age}
                        // label="Age"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Weekly</MenuItem>
                        <MenuItem value={20}>Fortnightly</MenuItem>
                        <MenuItem value={30}>Monthly</MenuItem>
                    </Select>

                    <div className="payment-buttons">
                        <Button variant="contained" style={buttonStyle}>Pay Now</Button>
                        <Button 
                            variant="contained" 
                            style={buttonStyle}
                            onClick={handlePaymentClose}
                        >
                            Cancel
                        </Button>
                    </div>
                    
                </Box>
            </Modal>

            <Modal open={openRecharge}>
                <Box className="recharge-container">
                    <CloseIcon className="close-icon" onClick={handleRechargeClose}/>
                    <h1>Recharge</h1>
                    <p>Amount</p>
                    <TextField variant="filled" fullWidth type="number"></TextField>

                    <div className="payment-buttons">
                        <Button variant="contained" style={buttonStyle}>Recharge</Button>
                        <Button 
                            variant="contained" 
                            style={buttonStyle}
                            onClick={handleRechargeClose}
                        >
                            Cancel
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ProfileWallet;
