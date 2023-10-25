package com.fdm.FlatBooking.Model;

import java.util.Date;
import java.util.List;

public class PropertyTypes {
	
	private boolean house;
	private boolean apartment;
	private boolean townhouse;
	private boolean grannyflat;
	private boolean room;
	private boolean unit;
	
	public PropertyTypes(boolean house, boolean apartment, boolean townhouse, boolean grannyflat, boolean room,
			boolean unit) {
		super();
		this.house = house;
		this.apartment = apartment;
		this.townhouse = townhouse;
		this.grannyflat = grannyflat;
		this.room = room;
		this.unit = unit;
	}
	public boolean isHouse() {
		return house;
	}
	public void setHouse(boolean house) {
		this.house = house;
	}
	public boolean isApartment() {
		return apartment;
	}
	public void setApartment(boolean apartment) {
		this.apartment = apartment;
	}
	public boolean isTownhouse() {
		return townhouse;
	}
	public void setTownhouse(boolean townhouse) {
		this.townhouse = townhouse;
	}
	public boolean isGrannyflat() {
		return grannyflat;
	}
	public void setGrannyflat(boolean grannyflat) {
		this.grannyflat = grannyflat;
	}
	public boolean isRoom() {
		return room;
	}
	public void setRoom(boolean room) {
		this.room = room;
	}
	public boolean isUnit() {
		return unit;
	}
	public void setUnit(boolean unit) {
		this.unit = unit;
	}
	@Override
	public String toString() {
		return "PropertyTypes [house=" + house + ", apartment=" + apartment + ", townhouse=" + townhouse
				+ ", grannyflat=" + grannyflat + ", room=" + room + ", unit=" + unit + "]";
	}
	
	
	
}
