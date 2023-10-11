package com.fdm.FlatBooking.Model;

import java.util.ArrayList;
import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("User")
public class User {
	
	@Id
	private String id;
	
	private String firstName;
	private String lastName;
	private String password;
	private String gender;
//	private BsonDateTime dateOfBirth;
	private Date dateOfBirth;
	private String occupation;
	private String currentAddress;
	private boolean isActive;
	
	private ArrayList<String> bookmarkedProperties;
	private ArrayList<String> transactionHistory;
	
	private double balance;
	private ContactInformation contactInformation;
	private ArrayList<PropertySearch> propertySearchPreferences;
	
	
	public User(String firstName, String lastName, String password, String gender, Date dateOfBirth,
			String occupation, String currentAddress, boolean isActive, ArrayList<String> bookmarkedProperties,
			ArrayList<String> transactionHistory, double balance, ContactInformation contactInformation,
			ArrayList<PropertySearch> propertySearchPreferences) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.occupation = occupation;
		this.currentAddress = currentAddress;
		this.isActive = isActive;
		this.bookmarkedProperties = bookmarkedProperties;
		this.transactionHistory = transactionHistory;
		this.balance = balance;
		this.contactInformation = contactInformation;
		this.propertySearchPreferences = propertySearchPreferences;
	}


	


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public Date getDateOfBirth() {
		return dateOfBirth;
	}


	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}


	public String getOccupation() {
		return occupation;
	}


	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}


	public String getCurrentAddress() {
		return currentAddress;
	}


	public void setCurrentAddress(String currentAddress) {
		this.currentAddress = currentAddress;
	}


	public boolean isActive() {
		return isActive;
	}


	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}


	public ArrayList<String> getBookmarkedProperties() {
		return bookmarkedProperties;
	}


	public void setBookmarkedProperties(ArrayList<String> bookmarkedProperties) {
		this.bookmarkedProperties = bookmarkedProperties;
	}


	public ArrayList<String> getTransactionHistory() {
		return transactionHistory;
	}


	public void setTransactionHistory(ArrayList<String> transactionHistory) {
		this.transactionHistory = transactionHistory;
	}


	public double getBalance() {
		return this.balance;
	}


	public void setBalance(double balance) {
		this.balance = balance;
	}


	public ContactInformation getContactInformation() {
		return contactInformation;
	}


	public void setContactInformation(ContactInformation contactInformation) {
		this.contactInformation = contactInformation;
	}


	public ArrayList<PropertySearch> getPropertySearchPreferences() {
		return propertySearchPreferences;
	}


	public void setPropertySearchPreferences(ArrayList<PropertySearch> propertySearchPreferences) {
		this.propertySearchPreferences = propertySearchPreferences;
	}
	
	
}
