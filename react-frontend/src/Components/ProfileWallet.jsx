import "../Styles/ProfileWallet.css"
import paymentIcon from "../Assets/payment-icon.png"
import rechargeIcon from "../Assets/recharge-icon.png"
import { Box, Button, MenuItem, Modal, Select, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import avatar from "../Assets/avatarSmall.svg"
import axios from "axios"

const ProfileWallet = (props)=> {

    const user = props.user
    const isLoggedIn = props.isLoggedIn
    const [transactions, setTransactions] = useState([])
    const [rechargeAmount, setRechargeAmount] = useState(0)

    const url = "http://localhost:8080/api/v1/"

    useEffect(() => {
        if (isLoggedIn) {
            axios
            .get(url + `transactions/${user.id}/alltransactions`)
            .then((response) => {
                setTransactions(response.data)
            })
            .catch(console.log)
        }
    }, [])

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

    const handleRechargeAmountChange = (e) => {
        setRechargeAmount(e.target.value)
    }

    const handleRechargeWallet = () => {
        const updatedBalance = parseFloat(user.balance) + rechargeAmount*1;
        axios.post(url + `users/${user.id}/balance?amount=${updatedBalance}`)
        .then(response => {
            props.setUser(response.data)
            console.log(response.data)
        })
        .catch(error => console.log(error))
        setRechargeAmount(0)
        handleRechargeClose()
    }

    return(
        <div className="profile-wallet-container">
            <h1 className="profile-wallet-header">My Wallet</h1>

            <div className="wallet-contents">

                <div  className="balance-container">
                    <p className="balance-amount">{user.balance}</p> 
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

                {transactions?.map((transaction) => (
                    <div>
                        {transaction.sender === user.id ? 
                            <div className="transaction-entry">
                                <img src={avatar} alt="avatar"></img>
                                <p>{transaction.sender}</p>
                                <p>{transaction.date.substring(0,10)}</p>
                                <p className="neg-transaction-amount"> - ${transaction.amount}</p>
                            </div>
                            :
                            <div className="transaction-entry">
                                <img src={avatar} alt="avatar"></img>
                                <p>{transaction.receiver}</p>
                                <p>{transaction.date.substring(0,10)}</p>
                                <p className="pos-transaction-amount"> + ${transaction.amount}</p>
                            </div>
                        }
                    </div>
                        
                ))}

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
                    <TextField 
                        variant="filled" 
                        fullWidth 
                        type="number"
                        onChange={handleRechargeAmountChange}
                    ></TextField>

                    <div className="payment-buttons">
                        <Button 
                            variant="contained" 
                            style={buttonStyle}
                            onClick={handleRechargeWallet}
                        >
                            Recharge
                        </Button>
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
