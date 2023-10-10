package com.fdm.FlatBooking.Model;

public class Address {

	private String unit;
	private String street;
	private String suburb;
	private String state;
	private String postcode;
	private GeoLocation location;
	
	public String getUnit() {
		return unit;
	}
	public String getStreet() {
		return street;
	}
	public String getSuburb() {
		return suburb;
	}
	public String getState() {
		return state;
	}
	public String getPostcode() {
		return postcode;
	}
	public GeoLocation getLocation() {
		return location;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public void setSuburb(String suburb) {
		this.suburb = suburb;
	}
	public void setState(String state) {
		this.state = state;
	}
	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}
	public void setLocation(GeoLocation location) {
		this.location = location;
	}
	public Address(String unit, String street, String suburb, String state, String postcode, GeoLocation location) {
		super();
		this.unit = unit;
		this.street = street;
		this.suburb = suburb;
		this.state = state;
		this.postcode = postcode;
		this.location = location;
	}
	
	
	
	
}
