package com.fdm.FlatBooking.Service;

import java.sql.Date;
import java.util.List;

import com.fdm.FlatBooking.Model.Transaction;

public class TransactionService implements ITransactionService {

    @Override
    public List<Transaction> getAllTransactions() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllTransactions'");
    }

    @Override
    public List<Transaction> getAllTransactionsForUser(String userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllTransactionsForUser'");
    }

    @Override
    public List<Transaction> getAllTransactionsForSender(String userID) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllTransactionsForSender'");
    }

    @Override
    public List<Transaction> getAllTransactionsForReceiver(String userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllTransactionsForReceiver'");
    }

    @Override
    public List<Transaction> getAllTransactionsWithin(Date start, Date end) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllTransactionsWithin'");
    }

    @Override
    public List<Transaction> getAllTransactionsForUserWithin(String userId, Date start, Date end) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllTransactionsForUserWithin'");
    }

    @Override
    public Transaction getTransactionById(String Id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getTransactionById'");
    }

}
