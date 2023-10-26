package com.fdm.FlatBooking.Model;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

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

	private List<String> imageIds;
	private ArrayList<Boolean> facilities;

	private Date latestUpdate;
	private boolean currentlyAvailable;

	public Property(String propertyType, int rentalPrice, int bondFee, String landlordId, String leaseeId,
			Address address, String propertyDescription, PropertyDetails details,
			ArrayList<Boolean> facilities, Date latestUpdate, boolean currentlyAvailable) {
		super();
		this.propertyType = propertyType;
		this.rentalPrice = rentalPrice;
		this.bondFee = bondFee;
		this.landlordId = landlordId;
		this.leaseeId = leaseeId;
		this.address = address;
		this.propertyDescription = propertyDescription;
		this.details = details;
		this.imageIds = new ArrayList<String>();
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

	public List<String> getImages() {
		return imageIds;
	}

	public ArrayList<Boolean> getFacilities() {
		return facilities;
	}

	public Date getLatestUpdate() {
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

	public void setLeasee(String leaseeId) {
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

	public void setImages(List<String> imageIds) {
		this.imageIds = imageIds;
	}

	public void setFacilities(ArrayList<Boolean> facilities) {
		this.facilities = facilities;
	}

	public void setLatestUpdate(Date latestUpdate) {
		this.latestUpdate = latestUpdate;
	}

	public void setCurrentlyAvailable(boolean currentlyAvailable) {
		this.currentlyAvailable = currentlyAvailable;
	}

	public void addImageId(String imageId) {
		this.imageIds.add(imageId);
	}

}
