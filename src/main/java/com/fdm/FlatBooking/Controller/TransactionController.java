package com.fdm.FlatBooking.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fdm.FlatBooking.Model.Transaction;
import com.fdm.FlatBooking.Repository.PropertyRepository;
import com.fdm.FlatBooking.Repository.TransactionRepository;
import com.fdm.FlatBooking.Repository.UserRepository;
import com.fdm.FlatBooking.Service.TransactionService;

@RestController
@RequestMapping("/api/v1/transactions")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    // Get all transactions
    @GetMapping("")
    public List<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }

    // Get specific transaction
    @GetMapping("{transactionId}")
    public Transaction getTransactionbyId(@PathVariable String transactionId) {
        Optional<Transaction> trans = transactionService.getTransactionById(transactionId);

        if (!trans.isPresent()) {
            // error
            return null;
        }

        return trans.get();
    }

    // Create Transaction
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Transaction createTransaction(@RequestBody Transaction transaction) {
        transactionService.addTransaction(transaction);
        return transaction;
    }

    @GetMapping("/{userId}/recent")
    public List<Transaction> getRecentTransactionsForUser(@PathVariable String userId) {
        return transactionService.getRecentTransactionsForUser(userId);
    }

    @GetMapping("/{userId}/alltransactions")
    public List<Transaction> getTransactionsForUser(@PathVariable String userId) {
        return transactionService.getAllTransactionsForUser(userId);
    }
}