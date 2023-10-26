import ProfileWallet from "./ProfileWallet";

const MyWalletPage = (props) => {

    const user = props.user
    const setUser = props.setUser
    const isLoggedIn = props.isLoggedIn

    return(
        <div className="my-wallet-page-container">
            <div className="profile-wallet">
                <ProfileWallet user={user} setUser={setUser} isLoggedIn={isLoggedIn}></ProfileWallet>
            </div>
            
        </div>
    )
}

export default MyWalletPage;