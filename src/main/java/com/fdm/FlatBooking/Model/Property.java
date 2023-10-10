package com.fdm.FlatBooking.Model;

import java.util.List;

import org.bson.BsonDateTime;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("Properties")
public class Property {
	
	@Id
	private int propertyId;
	private String propertyType;
	private int rentalPrice;
	private int bondFee;
	private User landlord;
	private User leasee;
	
	private Address address;
	private String propertyDescription;
	private PropertyDetails details;
	
	private List<Binary> images;
	
	
	private List<String> facilities;
	
	private BsonDateTime latestUpdate;
	private boolean currentlyAvailable;
	
	
	
	
	
	public Property(int propertyId, String propertyType, int rentalPrice, int bondFee, User landlord, User leasee,
			Address address, String propertyDescription, PropertyDetails details, List<Binary> images,
			List<String> facilities, BsonDateTime latestUpdate, boolean currentlyAvailable) {
		super();
		this.propertyId = propertyId;
		this.propertyType = propertyType;
		this.rentalPrice = rentalPrice;
		this.bondFee = bondFee;
		this.landlord = landlord;
		this.leasee = leasee;
		this.address = address;
		this.propertyDescription = propertyDescription;
		this.details = details;
		this.images = images;
		this.facilities = facilities;
		this.latestUpdate = latestUpdate;
		this.currentlyAvailable = currentlyAvailable;
	}
	public int getPropertyId() {
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
	public User getLandlord() {
		return landlord;
	}
	public User getLeasee() {
		return leasee;
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
	public List<Binary> getImages() {
		return images;
	}
	public List<String> getFacilities() {
		return facilities;
	}
	public BsonDateTime getLatestUpdate() {
		return latestUpdate;
	}
	public boolean isCurrentlyAvailable() {
		return currentlyAvailable;
	}
	public void setPropertyId(int propertyId) {
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
	public void setLandlord(User landlord) {
		this.landlord = landlord;
	}
	public void setLeasee(User leasee) {
		this.leasee = leasee;
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
	public void setImages(List<Binary> images) {
		this.images = images;
	}
	public void setFacilities(List<String> facilities) {
		this.facilities = facilities;
	}
	public void setLatestUpdate(BsonDateTime latestUpdate) {
		this.latestUpdate = latestUpdate;
	}
	public void setCurrentlyAvailable(boolean currentlyAvailable) {
		this.currentlyAvailable = currentlyAvailable;
	}
	
	
	

}
