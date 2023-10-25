import { useState } from "react";


const TransactionEntry = (props) => {

    const [name, setName] = useState('');

    const getName = (otherUserId) =>{
        axios
        .get("http://localhost:8080/api/v1/users/getname/id?=" + otherUserId)
        .then((res) => {
            console.log(res.data);
            setName(res.data);
        })
    }
   

    return(
        <div className="transaction-entry-container">
            <img src={avatar} alt="avatar"></img>
            {props.senderId === props.user.id ? 
            <p> - ${props.senderId}</p>
            :
            <p> - ${props.receiverId}</p>
            }

            <p>{props.date}</p>

            {props.amount ? 
            <p className="pos-transaction-amount"> - ${props.amount}</p>
            :
            <p className="neg-transaction-amount"> - ${props.amount}</p>
            }
            
        </div>
    )
}

export default TransactionEntry;