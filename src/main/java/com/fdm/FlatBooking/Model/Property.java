package com.fdm.FlatBooking.Model;

import java.util.ArrayList;

import org.bson.BsonDateTime;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("Properties")
public class Property {
	
	@Id
	private String propertyId;
	private String propertyType;
	private int rentalPrice;
	private int bondFee;
	private String landlordId;
	private String leaseeId;
	
	private Address address;
	private String propertyDescription;
	private PropertyDetails details;
	
	private ArrayList<Binary> images;
	private ArrayList<String> facilities;
	
	private BsonDateTime latestUpdate;
	private boolean currentlyAvailable;
	
	
	public Property(String propertyType, int rentalPrice, int bondFee, String landlordId, String leaseeId,
			Address address, String propertyDescription, PropertyDetails details, ArrayList<Binary> images,
			ArrayList<String> facilities, BsonDateTime latestUpdate, boolean currentlyAvailable) {
		super();
		this.propertyType = propertyType;
		this.rentalPrice = rentalPrice;
		this.bondFee = bondFee;
		this.landlordId = landlordId;
		this.leaseeId = leaseeId;
		this.address = address;
		this.propertyDescription = propertyDescription;
		this.details = details;
		this.images = images;
		this.facilities = facilities;
		this.latestUpdate = latestUpdate;
		this.currentlyAvailable = currentlyAvailable;
	}
	
	public String getPropertyId() {
		return propertyId;
	}
	public String getPropertyType() {
		return propertyType;
	}
	public int getRentalPrice() {
		return rentalPrice;
	}
	public int getBondFee() {
		return bondFee;
	}
	public String getLandlord() {
		return landlordId;
	}
	public String getLeasee() {
		return leaseeId;
	}
	public Address getAddress() {
		return address;
	}
	public String getPropertyDescription() {
		return propertyDescription;
	}
	public PropertyDetails getDetails() {
		return details;
	}
	public ArrayList<Binary> getImages() {
		return images;
	}
	public ArrayList<String> getFacilities() {
		return facilities;
	}
	public BsonDateTime getLatestUpdate() {
		return latestUpdate;
	}
	public boolean isCurrentlyAvailable() {
		return currentlyAvailable;
	}
	public void setPropertyId(String propertyId) {
		this.propertyId = propertyId;
	}
	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}
	public void setRentalPrice(int rentalPrice) {
		this.rentalPrice = rentalPrice;
	}
	public void setBondFee(int bondFee) {
		this.bondFee = bondFee;
	}
	public void setLandlord(String landlord) {
		this.landlordId = landlord;
	}
	public void setLeasee(String leasee) {
		this.leaseeId = leaseeId;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public void setPropertyDescription(String propertyDescription) {
		this.propertyDescription = propertyDescription;
	}
	public void setDetails(PropertyDetails details) {
		this.details = details;
	}
	public void setImages(ArrayList<Binary> images) {
		this.images = images;
	}
	public void setFacilities(ArrayList<String> facilities) {
		this.facilities = facilities;
	}
	public void setLatestUpdate(BsonDateTime latestUpdate) {
		this.latestUpdate = latestUpdate;
	}
	public void setCurrentlyAvailable(boolean currentlyAvailable) {
		this.currentlyAvailable = currentlyAvailable;
	}
	
	
	

}
