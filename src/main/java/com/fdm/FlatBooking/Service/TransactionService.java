package com.fdm.FlatBooking.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.fdm.FlatBooking.Model.Transaction;
import com.fdm.FlatBooking.Repository.TransactionRepository;

public class TransactionService implements ITransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @Override
    public List<Transaction> getAllTransactionsForUser(String userId) {
        List<Transaction> res = transactionRepository.findBySenderId(userId);
        res.addAll(transactionRepository.findByReceiverId(userId));

        return res;
    }

    @Override
    public List<Transaction> getAllTransactionsForSender(String userID) {
        return transactionRepository.findBySenderId(userID);
    }

    @Override
    public List<Transaction> getAllTransactionsForReceiver(String userId) {
        return transactionRepository.findByReceiverId(userId);
    }

    @Override
    public List<Transaction> getAllTransactionsWithin(Date start, Date end) {
        return transactionRepository.findTransactionsBetweenDates(start, end);
    }

    @Override
    public List<Transaction> getAllTransactionsForUserWithin(String userId, Date start, Date end) {
        return transactionRepository.findTransactionsBetweenDatesForUser(start, end, userId);
    }

    @Override
    public Optional<Transaction> getTransactionById(String id) {
        return transactionRepository.findById(id);
    }

}
