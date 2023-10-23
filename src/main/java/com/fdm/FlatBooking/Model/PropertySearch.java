package com.fdm.FlatBooking.Model;

import java.util.Date;
import java.util.List;

public class PropertySearch {
	private int minPrice;
	private int maxPrice;
	private int minBedrooms;
	private int maxBedrooms;
	private int minBathrooms;
	private int maxBathrooms;
	private int minCarSpaces;
	private int maxCarSpaces;
	private List<String> preferredFeatures;
	private Date startDateAvailable;
	private Date endDateAvailable;
	private List<String> propertyType;
	
	public PropertySearch(int minPrice, int maxPrice, int minBedrooms, int maxBedrooms, int minBathrooms,
			int maxBathrooms, int minCarSpaces, int maxCarSpaces, List<String> preferredFeatures,
			Date startDateAvailable, Date endDateAvailable, List<String> propertyType) {
		super();
		this.minPrice = minPrice;
		this.maxPrice = maxPrice;
		this.minBedrooms = minBedrooms;
		this.maxBedrooms = maxBedrooms;
		this.minBathrooms = minBathrooms;
		this.maxBathrooms = maxBathrooms;
		this.minCarSpaces = minCarSpaces;
		this.maxCarSpaces = maxCarSpaces;
		this.preferredFeatures = preferredFeatures;
		this.startDateAvailable = startDateAvailable;
		this.endDateAvailable = endDateAvailable;
		this.propertyType = propertyType;
	}
	public int getMinPrice() {
		return minPrice;
	}
	public void setMinPrice(int minPrice) {
		this.minPrice = minPrice;
	}
	public int getMaxPrice() {
		return maxPrice;
	}
	public void setMaxPrice(int maxPrice) {
		this.maxPrice = maxPrice;
	}
	public int getMinBedrooms() {
		return minBedrooms;
	}
	public void setMinBedrooms(int minBedrooms) {
		this.minBedrooms = minBedrooms;
	}
	public int getMaxBedrooms() {
		return maxBedrooms;
	}
	public void setMaxBedrooms(int maxBedrooms) {
		this.maxBedrooms = maxBedrooms;
	}
	public int getMinBathrooms() {
		return minBathrooms;
	}
	public void setMinBathrooms(int minBathrooms) {
		this.minBathrooms = minBathrooms;
	}
	public int getMaxBathrooms() {
		return maxBathrooms;
	}
	public void setMaxBathrooms(int maxBathrooms) {
		this.maxBathrooms = maxBathrooms;
	}
	public int getMinCarSpaces() {
		return minCarSpaces;
	}
	public void setMinCarSpaces(int minCarSpaces) {
		this.minCarSpaces = minCarSpaces;
	}
	public int getMaxCarSpaces() {
		return maxCarSpaces;
	}
	public void setMaxCarSpaces(int maxCarSpaces) {
		this.maxCarSpaces = maxCarSpaces;
	}
	public List<String> getPreferredFeatures() {
		return preferredFeatures;
	}
	public void setPreferredFeatures(List<String> preferredFeatures) {
		this.preferredFeatures = preferredFeatures;
	}
	public Date getStartDateAvailable() {
		return startDateAvailable;
	}
	public void setStartDateAvailable(Date startDateAvailable) {
		this.startDateAvailable = startDateAvailable;
	}
	public Date getEndDateAvailable() {
		return endDateAvailable;
	}
	public void setEndDateAvailable(Date endDateAvailable) {
		this.endDateAvailable = endDateAvailable;
	}
	public List<String> getPropertyType() {
		return propertyType;
	}
	public void setPropertyType(List<String> propertyType) {
		this.propertyType = propertyType;
	}

	

}
