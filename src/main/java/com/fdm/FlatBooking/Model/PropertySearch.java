package com.fdm.FlatBooking.Model;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

public class PropertySearch {


	private PropertyTypes propertyTypes;
	private DetailFilters detailFilters;
	private String[] locationFilters;
	
	public PropertySearch(PropertyTypes propertyTypes, DetailFilters detailFilters, String[] locationFilters) {
		super();
		this.propertyTypes = propertyTypes;
		this.detailFilters = detailFilters;
		this.locationFilters = locationFilters;
	}
	public PropertyTypes getPropertyTypes() {
		return propertyTypes;
	}
	public void setPropertyTypes(PropertyTypes propertyTypes) {
		this.propertyTypes = propertyTypes;
	}
	public DetailFilters getDetailFilters() {
		return detailFilters;
	}
	public void setDetailFilters(DetailFilters detailFilters) {
		this.detailFilters = detailFilters;
	}
	public String[] getLocationFilters() {
		return locationFilters;
	}
	public void setLocationFilters(String[] locationFilters) {
		this.locationFilters = locationFilters;
	}
	@Override
	public String toString() {
		return "PropertySearch [propertyTypes=" + propertyTypes + ", detailFilters=" + detailFilters
				+ ", locationFilters=" + Arrays.toString(locationFilters) + "]";
	}
	
	
	
}
