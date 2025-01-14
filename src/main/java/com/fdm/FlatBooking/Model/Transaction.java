package com.fdm.FlatBooking.Model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Transaction")
public class Transaction {
	@Id
	private String transactionId;

	private String senderId;
	private String receiverId;

	private Date date;
	private double amount;
	private String reference;

	public Transaction(String senderId, String receiverId, Date date, double amount,
			String reference) {
		super();
		this.senderId = senderId;
		this.receiverId = receiverId;
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

	public String getSender() {
		return senderId;
	}

	public void setSender(String senderId) {
		this.senderId = senderId;
	}

	public String getReceiver() {
		return receiverId;
	}

	public void setReceiver(String receiverId) {
		this.receiverId = receiverId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
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
