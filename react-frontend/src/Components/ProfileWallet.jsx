import "../Styles/ProfileWallet.css"
import paymentIcon from "../Assets/payment-icon.png"
import rechargeIcon from "../Assets/recharge-icon.png"

const ProfileWallet = ()=> {

    return(
        <div className="profile-wallet-container">
            <h1 className="profile-wallet-header">My Wallet</h1>

            <div className="wallet-contents">

                <div  className="balance-container">
                    <p className="balance-amount">$2999</p> 
                    <p>Current Balance</p> 
                </div>

                <div className="wallet-action">
                    <img src={paymentIcon}></img>
                    <p>Make Payment</p>
                </div>

                <div className="wallet-action">
                    <img src={rechargeIcon}></img>
                    <p>Recharge Wallet</p>
                </div>

            </div>
        </div>
    )
}

export default ProfileWallet;