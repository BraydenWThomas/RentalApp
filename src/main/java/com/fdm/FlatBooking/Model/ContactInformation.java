package com.fdm.FlatBooking.Model;

public class ContactInformation {
	private int mobile;
	private String email;
	public ContactInformation(int mobile, String email) {
		super();
		this.mobile = mobile;
		this.email = email;
	}
	public int getMobile() {
		return mobile;
	}
	public void setMobile(int mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
