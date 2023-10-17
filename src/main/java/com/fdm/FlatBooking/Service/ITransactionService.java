package com.fdm.FlatBooking.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import com.fdm.FlatBooking.Model.Transaction;

public interface ITransactionService {

    void addTransaction(Transaction transaction);

    /**
     * Get all transactions
     * 
     * @return
     */
    List<Transaction> getAllTransactions();

    /**
     * Get all transactions that involes the user identified by the given ID
     * 
     * @param userId ID of user to get transactions for
     * @return Transactions that involve the user
     */
    List<Transaction> getAllTransactionsForUser(String userId);

    List<Transaction> getRecentTransactionsForUser(String userId);

    /**
     * Get all transactions where the user (identified by the given ID) is the
     * sender
     * 
     * @param userID The ID of the sender user
     * @return Transactions where the user is the sender
     */
    List<Transaction> getAllTransactionsForSender(String userID);

    /**
     * Get all transactions where the user (identified by the given ID) is the
     * receiver
     * 
     * @param userID The ID of the reciever user
     * @return Transactions where the user is the receiver
     */
    List<Transaction> getAllTransactionsForReceiver(String userId);

    /**
     * Get all transactions within a date range
     * 
     * @param start The earliest date (inclusive)
     * @param end   The latest date (inclusive)
     * @return Transactions within the date range
     */
    List<Transaction> getAllTransactionsWithin(Date start, Date end);

    /**
     * Get all transactions within a date range for a user (specified by userId)
     * 
     * @param userId The user involved in the transactions
     * @param start  The earliest date (inclusive)
     * @param end    The latest date (inclusive)
     * @return Transactions within the date range
     */
    List<Transaction> getAllTransactionsForUserWithin(String userId, Date start, Date end);

    /**
     * Get the transaction with the given ID
     * 
     * @param Id
     * @return
     */
    Optional<Transaction> getTransactionById(String Id);

}
