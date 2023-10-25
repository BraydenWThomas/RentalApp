package com.fdm.FlatBooking.Model;

import java.util.Date;
import java.util.List;

public class DetailFilters {
	private int minPrice;
	private int maxPrice;
	private int minBedrooms;
	private int maxBedrooms;
	private int minBathrooms;
	private int maxBathrooms;
	private int minCars;
	private int maxCars;
	//need avail dates (min max)
	
	public DetailFilters(int minPrice, int maxPrice, int minBedrooms, int maxBedrooms, int minBathrooms,
			int maxBathrooms, int minCars, int maxCars) {
		super();
		this.minPrice = minPrice;
		this.maxPrice = maxPrice;
		this.minBedrooms = minBedrooms;
		this.maxBedrooms = maxBedrooms;
		this.minBathrooms = minBathrooms;
		this.maxBathrooms = maxBathrooms;
		this.minCars = minCars;
		this.maxCars = maxCars;
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

	public int getMinCars() {
		return minCars;
	}

	public void setMinCars(int minCars) {
		this.minCars = minCars;
	}

	public int getMaxCars() {
		return maxCars;
	}

	public void setMaxCars(int maxCars) {
		this.maxCars = maxCars;
	}

	@Override
	public String toString() {
		return "DetailFilters [minPrice=" + minPrice + ", maxPrice=" + maxPrice + ", minBedrooms=" + minBedrooms
				+ ", maxBedrooms=" + maxBedrooms + ", minBathrooms=" + minBathrooms + ", maxBathrooms=" + maxBathrooms
				+ ", minCars=" + minCars + ", maxCars=" + maxCars + "]";
	}

	

	
}
