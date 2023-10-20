import axios from "axios";
import { useEffect, useState } from "react";

const TransactionEntry = (props) => {

    return(
        <div className="transaction-entry-container">
            <img src={avatar} alt="avatar"></img>
            <p>{props.name}</p>
            <p>{props.date}</p>
            {props.incoming ? 
            <p className="pos-transaction-amount"> - ${props.amount}</p>
            :
            <p className="neg-transaction-amount"> - ${props.amount}</p>
            }
            
        </div>
    )
}

export default TransactionEntry;