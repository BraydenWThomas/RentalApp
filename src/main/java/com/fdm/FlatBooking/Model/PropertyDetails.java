package com.fdm.FlatBooking.Model;

public class PropertyDetails {

	private int bathroom;
	private int bedroom;
	private int balcony;
	private int propertySize;
	private int carPark;

	public int getBathroom() {
		return bathroom;
	}

	public int getBedroom() {
		return bedroom;
	}

	public int getBalcony() {
		return balcony;
	}

	public int getPropertySize() {
		return propertySize;
	}

	public int getCarPark() {
		return carPark;
	}

	public void setBathroom(int bathroom) {
		this.bathroom = bathroom;
	}

	public void setBedroom(int bedroom) {
		this.bedroom = bedroom;
	}

	public void setBalcony(int balcony) {
		this.balcony = balcony;
	}

	public void setPropertySize(int propertySize) {
		this.propertySize = propertySize;
	}

	public void setCarPark(int carPark) {
		this.carPark = carPark;
	}

	public PropertyDetails(int bathroom, int bedroom, int balcony, int propertySize, int carPark) {
		super();
		this.bathroom = bathroom;
		this.bedroom = bedroom;
		this.balcony = balcony;
		this.propertySize = propertySize;
		this.carPark = carPark;
	}

}
