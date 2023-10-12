package com.fdm.FlatBooking.Controller;

import java.util.List;

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

@RestController
@RequestMapping("transaction")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TransactionController {

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserRepository userRepository;

    // Get all transactions
    @GetMapping("")
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    // Get specific transaction
    @GetMapping("{transactionId}")
    public Transaction getTransactionbyId(@PathVariable String transactionId) {
        return transactionRepository.findById(transactionId)
                // #TODO need proper or else throws -> i cant figure it out
                .orElseThrow();
    }

    // Create Transaction #TODO this will need to be replaced when security added
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Transaction createTransaction(@RequestBody Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    // Verify login #TODO this will need to be replaced when security added
    @GetMapping("signin")
    public boolean verifyTransaction(@PathVariable String email, String password) {
        // Verify if email false
        if (transactionRepository.findById(email).get().getCredentials().getEmail() != email) {
            return false;
        }
        // Verify if password false
        if (transactionRepository.findById(email).get().getCredentials().getPassword() != password) {
            return false;
        }
        return true;
    }
}