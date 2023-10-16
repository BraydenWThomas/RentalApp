import { Button, Grid, TextField, Container, Select, MenuItem, Stack } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';


import coin from "../Assets/coin.svg";
import wallet from "../Assets/wallet.svg";
import avatar from "../Assets/avatarSmall.svg";
import "../Styles/Profile.css";


const ProfileWallet = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#E0DFE5',
      };

      const buttonStyle = {
        backgroundColor: '#A59DB7',
        color: 'white',
        fontFamily: 'Oswald',
        marginTop: 30,
        marginBottom:30,
    }

      const [occurance, setOccurance] = React.useState('');
      const changeOccurance = (event) => {
        setOccurance(event.target.value);
      };



    const title = {
        fontSize:'30px',
        fontFamily: 'Oswald'
    }

    const balanceDisplay ={
        fontSize:'30px',
        fontFamily: 'Oswald',
        color: '#A59DB7',
    }
    const balance ={
        width:'100%',
        height:'100%',
        fontFamily: 'Oswald',
        color: '#ffffff',
        boxShadow: '1px 2px 9px #808080',
        borderRadius: '5px',

    }

    const walletOptions = {
        backgroundColor: '#A59DB740',
        fontFamily: 'Oswald',
        borderRadius: '5px',
        direction:"column",
        justifyContent:"center",
        width:'100%',
        height:'100%',
    }

    const normalText = {
        color: 'black',
        fontFamily: 'Oswald',
    }
    const transaction = {
        width:'100%',
        height:'100%',
        fontFamily: 'Oswald',
        color: '#ffffff40',
        boxShadow: '1px 2px 9px #808080',
        borderRadius: '5px',
    }

    const transactionText = {
        width:'100%',
        height:'100%',
        fontFamily: 'Oswald',
        color: '#808080',
    }

    const transactionNumber = {
        width:'100%',
        height:'100%',
        fontFamily: 'Oswald',
        fontSize: '20px',
        color: '#23DE57',
    }

    const avatarIcon = {
       paddingLeft:'20px',
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

	return(
        <Container>
            <Grid container spacing={2}  direction="column" xs={12}>
                <Grid  container xs={12}  >
                    <p style={title} variant="contained" justifyContent="flex-start">My Wallet</p>
                </Grid>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="stretch" >
                    <Grid container xs={3}  >
                        <div style={balance}>
                            <p style={balanceDisplay}>
                                $ 2,099
                            </p>
                            <p style={normalText} >
                                Current Balance
                            </p>
                            
                        </div>

                        
                    </Grid>
                    <Grid container  xs={3} >
                        <div style={walletOptions} onClick={handleOpen}>
                            <img className="coin" src={coin} alt="coin"></img>
                            <p style={normalText}>
                                Make Payment
                            </p>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box style={style}>
                                
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <form>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <h1 style={{textAlign: 'left', paddingInline: '1rem'}} >Payment</h1>
                                        </Grid>
                                        <Grid xs={12} paddingInline={2}>
                                            <p className="fieldLabel">Property ID</p>
                                            <TextField fullWidth className="formfield" color="secondary" required id="outline-required"/>
                                        </Grid>
                                        <Grid xs={12} paddingInline={2}>
                                            <p className="fieldLabel">Amount</p>
                                            <TextField fullWidth className="formfield" color="secondary" type="number"/>
                                        </Grid>
                                        <Grid xs={12} paddingInline={2}>
                                            <p className="fieldLabel">How Often*</p>
                                            <Select className="formfield datePicker" value={occurance} onChange={changeOccurance}>
                                                <MenuItem value="MONTHLY">Monthly</MenuItem>
                                                <MenuItem value="FORTNIGHTLY">Fortnightly</MenuItem>
                                                <MenuItem value="WEEKLY">Weekly</MenuItem>
                                                <MenuItem value="ONE_OFF">One Off</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid xs={12} paddingInline={2}>
                                            <Button variant="contained"  style={buttonStyle} size="large">
                                                Pay now
                                            </Button>
                                            <Button variant="contained"  style={buttonStyle} size="large">
                                                Cancel
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                                </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </Grid>
                    <Grid container justifyContent="flex-start" xs={3} >
                        <div style={walletOptions}>
                            <img className="wallet" src={wallet} alt="wallet"></img>
                            <p style={normalText}>
                                Recharge Wallet
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <Grid  container xs={12} >
                    <p  style={normalText} variant="contained" justifyContent="flex-start">Recent Transactions</p>
                    <p style={normalText} variant="contained" justifyContent="flex-end">View All Transactions</p>

                </Grid>
                <Grid  container xs={12} >

                    SEARCH
            
                </Grid>
                <Grid  container xs={12} >
                    <div style={transaction}>
                        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={0}>
                            <Grid container xs={3} alignItems="center">
                                <img style={avatarIcon}  className="avatar" src={avatar} alt="avatar" ></img>
                            </Grid>
                            <Grid container xs={6} direction="row" justifyContent="space-between" alignItems="center">
                                <Grid container xs={6}>
                                    <p style={transactionText}> Samantha Jermyn </p>
                                </Grid>
                                <Grid container xs={6}>
                                    <p style={transactionText}> 16/20/2023</p>
                                </Grid>
                                
                            </Grid>
                            <Grid container xs={3}>
                                <p style={transactionNumber}> +$300</p>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Container>
		
	)

}
export default ProfileWallet
