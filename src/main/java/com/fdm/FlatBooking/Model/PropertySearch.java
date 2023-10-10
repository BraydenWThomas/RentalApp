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
}
