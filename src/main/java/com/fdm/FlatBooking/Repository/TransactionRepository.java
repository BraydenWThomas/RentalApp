package com.fdm.FlatBooking.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fdm.FlatBooking.Model.Transaction;

public interface TransactionRepository extends MongoRepository<Transaction, String> {

}
