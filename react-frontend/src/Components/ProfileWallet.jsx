import { Button, Grid, TextField, Container, Select, MenuItem, Stack } from "@mui/material";

import coin from "../Assets/coin.svg";
import wallet from "../Assets/wallet.svg";
import avatar from "../Assets/avatarSmall.svg";
import "../Styles/Profile.css";


const ProfileWallet = () => {




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
                                2099.50 $
                            </p>
                            <p style={normalText} >
                                Current Balance
                            </p>
                        </div>

                        
                    </Grid>
                    <Grid container  xs={3} >
                        <div style={walletOptions}>
                            <img className="coin" src={coin} alt="coin"></img>
                            <p style={normalText}>
                                Make Payment
                            </p>
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
