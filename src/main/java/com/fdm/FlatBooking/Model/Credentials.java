package com.fdm.FlatBooking.Model;

public class Credentials {
	private String password;
	private String email;
	
	public Credentials(String password, String email) {
		super();
		this.password = password;
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setpassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
