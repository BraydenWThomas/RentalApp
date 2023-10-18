package com.fdm.FlatBooking.Repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.fdm.FlatBooking.Model.Transaction;

public interface TransactionRepository extends MongoRepository<Transaction, String> {

    List<Transaction> findBySenderId(String senderId);

    List<Transaction> findByReceiverId(String receiverId);

    @Query("{\"date\": {\"$gte\": ISODate(\"?0\"), \"$lte\": ISODate(\"?1\")}}")
    List<Transaction> findTransactionsBetweenDates(Date start, Date end);

    @Query("{\"$or\": [{\"senderId\": \"?3\"}, {\"receiverId\": \"?3\"}], \"date\": {\"$gte\": ISODate(\"?0\"), \"$lte\": ISODate(\"?1\")}}")
    List<Transaction> findTransactionsBetweenDatesForUser(Date start, Date end, String userId);

}
