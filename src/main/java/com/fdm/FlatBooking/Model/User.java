package com.fdm.FlatBooking.Model;

import java.util.ArrayList;
import java.util.List;

import org.bson.BsonDateTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fdm.FlatBooking.Model.Transaction;

@Document("User")
public class User {
	
	@Id
	private String id;
	
	private String firstName;
	private String lastName;
	private String password;
	private String gender;
	private BsonDateTime dateOfBirth;
	private String occupation;
	private String currentAddress;
	private boolean isActive;
	
	// Could be an array of Property objects??
	private ArrayList<String> bookmarkedProperties;
	// Could be an array of Transaction objects??
	private ArrayList<String> transactionHistory;
	
	private DigitalWallet digitalWallet;
	private ContactInformation contactInformation;
	private ArrayList<PropertySearch> propertySearchPreferences;
	
	
	public User(String firstName, String lastName, String password, String gender, BsonDateTime dateOfBirth,
			String occupation, String currentAddress, boolean isActive, ArrayList<String> bookmarkedProperties,
			ArrayList<String> arrayList, DigitalWallet digitalWallet, ContactInformation contactInformation,
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
		this.transactionHistory = arrayList;
		this.digitalWallet = digitalWallet;
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


	public BsonDateTime getDateOfBirth() {
		return dateOfBirth;
	}


	public void setDateOfBirth(BsonDateTime dateOfBirth) {
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


	public List<String> getBookmarkedProperties() {
		return bookmarkedProperties;
	}


	public void setBookmarkedProperties(ArrayList<String> bookmarkedProperties) {
		this.bookmarkedProperties = bookmarkedProperties;
	}


	public List<String> getTransactionHistory() {
		return transactionHistory;
	}


	public void setTransactionHistory(ArrayList<String> transactionHistory) {
		this.transactionHistory = transactionHistory;
	}


	public DigitalWallet getDigitalWallet() {
		return digitalWallet;
	}


	public void setDigitalWallet(DigitalWallet digitalWallet) {
		this.digitalWallet = digitalWallet;
	}


	public ContactInformation getContactInformation() {
		return contactInformation;
	}


	public void setContactInformation(ContactInformation contactInformation) {
		this.contactInformation = contactInformation;
	}


	public List<PropertySearch> getPropertySearchPreferences() {
		return propertySearchPreferences;
	}


	public void setPropertySearchPreferences(ArrayList<PropertySearch> propertySearchPreferences) {
		this.propertySearchPreferences = propertySearchPreferences;
	}
	
	
}
