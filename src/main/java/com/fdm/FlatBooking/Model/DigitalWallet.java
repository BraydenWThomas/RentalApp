package com.fdm.FlatBooking.Model;

public class DigitalWallet {
	private String walletId;
	private int balance;
	public DigitalWallet(String walletId, int balance) {
		super();
		this.walletId = walletId;
		this.balance = balance;
	}
	public String getWalletId() {
		return walletId;
	}
	public void setWalletId(String walletId) {
		this.walletId = walletId;
	}
	public int getBalance() {
		return balance;
	}
	public void setBalance(int balance) {
		this.balance = balance;
	}
	
	
}
