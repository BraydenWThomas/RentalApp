package com.fdm.FlatBooking.Model;

import java.util.List;

import org.bson.BsonDateTime;

public class PropertySearch {
	private int budget;
	private int numberOfBedrooms;
	private int numberOfBathrooms;
	private int numberOfCarspaces;
	private List<String> preferredFeatures;
	private BsonDateTime moveInDate;
	
	
	public PropertySearch(int budget, int numberOfBedrooms, int numberOfBathrooms, int numberOfCarspaces,
			List<String> preferredFeatures, BsonDateTime moveInDate) {
		super();
		this.budget = budget;
		this.numberOfBedrooms = numberOfBedrooms;
		this.numberOfBathrooms = numberOfBathrooms;
		this.numberOfCarspaces = numberOfCarspaces;
		this.preferredFeatures = preferredFeatures;
		this.moveInDate = moveInDate;
	}


	public int getBudget() {
		return budget;
	}


	public void setBudget(int budget) {
		this.budget = budget;
	}


	public int getNumberOfBedrooms() {
		return numberOfBedrooms;
	}


	public void setNumberOfBedrooms(int numberOfBedrooms) {
		this.numberOfBedrooms = numberOfBedrooms;
	}


	public int getNumberOfBathrooms() {
		return numberOfBathrooms;
	}


	public void setNumberOfBathrooms(int numberOfBathrooms) {
		this.numberOfBathrooms = numberOfBathrooms;
	}


	public int getNumberOfCarspaces() {
		return numberOfCarspaces;
	}


	public void setNumberOfCarspaces(int numberOfCarspaces) {
		this.numberOfCarspaces = numberOfCarspaces;
	}


	public List<String> getPreferredFeatures() {
		return preferredFeatures;
	}


	public void setPreferredFeatures(List<String> preferredFeatures) {
		this.preferredFeatures = preferredFeatures;
	}


	public BsonDateTime getMoveInDate() {
		return moveInDate;
	}


	public void setMoveInDate(BsonDateTime moveInDate) {
		this.moveInDate = moveInDate;
	}
	
	
}
