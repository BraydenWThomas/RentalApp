package com.fdm.FlatBooking.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
	@Id
	private String id;
	
	private ContactInformation contactInformation;
}
