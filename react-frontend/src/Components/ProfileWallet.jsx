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
    const [users, setUsers] = useState([])
    const [transaction, setTransaction] = useState(
        {
            senderId: user.id,
            receiverId: "",
            date: "",
            amount: "",
            reference: ""
        })

    const url = "http://localhost:8080/api/v1/"

    useEffect(() => {
        if (isLoggedIn) {
            
            loadUsers()
            loadTransactions()
            
        }
    }, [])

    const loadTransactions = () => {
        axios
            .get(url + `transactions/${user.id}/alltransactions`)
            .then((response) => {
                setTransactions(response.data)
            })
            .catch(e => console.log(e))
    }

    const loadUsers = () => {
        axios
            .get(url + "users")
            .then((response) => {
                setUsers(response.data)
            })
            .catch(e => console.log(e))
    }

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
        setTransaction({
            senderId: "",
            receiverId: "",
            date: "",
            amount: "",
            reference: ""
        })
        setOpenPayment(false)
    }

    const handleRechargeClose = () => {
        setOpenRecharge(false)
        setRechargeAmount(0)
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

    const handlePayment = () => {

    }

    const handleTransactionChange = (event) => {

        console.log(event.target)

        const { name, value } = event.target;
        
        setTransaction((prevState) => ({
            ...prevState,
            [name]: value
        }))
        console.log(transaction)
        console.log(users)
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
                    <p>Payee</p>

                    <Select
                        name="receiverId"
                        value={transaction.receiverId}
                        onChange={handleTransactionChange}
                        fullWidth
                    >
                        {
                            users?.map((payee) => (
                                <div>
                                    {
                                    user.id !== payee.id &&
                                    <MenuItem 
                                        value={payee.id}
                                    >
                                        {payee.firstName} {payee.lastName}
                                    </MenuItem>
                                    }
                                </div>
                            ))
                        }

                    </Select>

                    <p>Reference</p>
                    <TextField 
                        variant="filled" 
                        type="text" 
                        name="reference"
                        value={transaction.reference} 
                        onChange={handleTransactionChange}
                        fullWidth
                    >
                    </TextField>

                    <p>Amount</p>
                    <TextField 
                        variant="filled" 
                        type="number" 
                        name="amount"
                        value={transaction.amount} 
                        onChange={handleTransactionChange}
                        fullWidth
                    >
                    </TextField>

                    <div className="payment-buttons">
                        <Button 
                            variant="contained" 
                            style={buttonStyle}
                            onClick={handlePayment}
                        >
                            Pay Now
                        </Button>
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
