package com.fdm.FlatBooking.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;

import com.fdm.FlatBooking.Model.Property;
import com.fdm.FlatBooking.Repository.PropertyRepository;

public class PropertyService implements IPropertyService {
	@Autowired
	PropertyRepository propertyRepository;

	@Override
	public List<Property> getAllProperties() {
		return propertyRepository.findAll();
	}

	@Override
	public List<Property> getAllAvailableProperties() {
		// TODO Auto-generated method stub
		return propertyRepository.findByCurrentlyAvailableIsTrue();
	}

	@Override
	public List<Property> getAllPropertiesForLeaser(String userId) {
		// TODO Auto-generated method stub
		return propertyRepository.findByLandlordId(userId);
	}

	@Override
	public List<Property> getAllPropertiesForLeasee(String userId) {
		// TODO Auto-generated method stub
		return propertyRepository.findByLeaseeId(userId);
	}

	@Override
	public Optional<Property> getPropertyById(String id) {
		return propertyRepository.findById(id);

	}

	@Override
	public List<Property> getPropertyWithFilters(int minBed, int maxBed, int minBath, int maxBath, int minBudget,
			int maxBudget, int minCar, int maxCar, int minSize, int maxSize) {
		List<Property> tempList = new ArrayList<Property>();
		return tempList;
	}
}
