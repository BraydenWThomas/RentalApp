package com.fdm.FlatBooking.Model;

import org.bson.BsonDateTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Transaction")
public class Transaction {
	@Id
	private String transactionId;
	
	private User sender;
	private User receiver;
	
	private BsonDateTime date;
	private double amount;
	private String reference;
	
	
	public Transaction(User sender, User receiver, BsonDateTime date, double amount,
			String reference) {
		super();
		this.sender = sender;
		this.receiver = receiver;
		this.date = date;
		this.amount = amount;
		this.reference = reference;
	}
	
	public String getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	public User getSender() {
		return sender;
	}
	public void setSender(User sender) {
		this.sender = sender;
	}
	public User getReceiver() {
		return receiver;
	}
	public void setReceiver(User receiver) {
		this.receiver = receiver;
	}
	public BsonDateTime getDate() {
		return date;
	}
	public void setDate(BsonDateTime date) {
		this.date = date;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
	}
	
	
}
