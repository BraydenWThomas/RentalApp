package com.fdm.FlatBooking.Model;

import java.util.ArrayList;
import java.util.List;

import org.bson.BsonDateTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
	
	@Id
	private String _id;
	
	private String firstName;
	private String lastName;
	private String password;
	private String gender;
	private BsonDateTime dateOfBirth;
	private String occupation;
	private String currentAddress;
	private boolean isActive;
	
	// Could be an array of Property objects??
	private List<Property> bookmarkedProperties;
	// Could be an array of Transaction objects??
	private List<Transaction> transactionHistory;
	
	private DigitalWallet digitalWallet;
	private ContactInformation contactInformation;
	private List<PropertySearch> propertySearchPreferences;
}
