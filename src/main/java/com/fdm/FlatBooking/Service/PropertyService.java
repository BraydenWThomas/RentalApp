package com.fdm.FlatBooking.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fdm.FlatBooking.Model.Property;
import com.fdm.FlatBooking.Model.User;
import com.fdm.FlatBooking.Repository.PropertyRepository;
import com.fdm.FlatBooking.Repository.UserRepository;

@Service
public class PropertyService implements IPropertyService {
	@Autowired
	PropertyRepository propertyRepository;

	@Autowired
	UserRepository userRepository;

	@Override
	public List<Property> getAllProperties() {
		return propertyRepository.findAll();
	}

	@Override
	public List<Property> getAllAvailableProperties() {
		return propertyRepository.findByCurrentlyAvailableIsTrue();
	}

	@Override
	public List<Property> getRecentListings() {
		List<Property> props = propertyRepository.findByCurrentlyAvailableIsTrue();
		props.sort((Property p1, Property p2) -> p1.getLatestUpdate().compareTo(p2.getLatestUpdate()));

		if (props.size() < 5)
			return props;
		return props.subList(0, 4);

	}

	@Override
	public List<Property> getAllPropertiesForLeaser(String userId) {
		return propertyRepository.findByLandlordId(userId);
	}

	@Override
	public List<Property> getAllPropertiesForLeasee(String userId) {
		return propertyRepository.findByLeaseeId(userId);
	}

	@Override
	public Optional<Property> getPropertyById(String id) {
		return propertyRepository.findById(id);

	}

	@Override
	public List<Property> getPropertyWithFilters(String searchTxt, int minBed, int maxBed, int minBath, int maxBath,
			int minBudget, int maxBudget, int minCar, int maxCar, int minSize, int maxSize, String propertyType,
			boolean isAvailable) {

		List<Property> filteredResult = propertyRepository.getPropertyWithFilters(minBed, maxBed, minBath,
				maxBath, minBudget, maxBudget, minCar,
				maxCar, minSize, maxSize, propertyType, isAvailable);

		List<Property> result = new ArrayList<>();

		for (Property p : filteredResult) {
			if (p.getPropertyDescription().toLowerCase().contains(searchTxt.toLowerCase()))
				result.add(p);
		}

		return result;
	}

	@Override
	public void addProperty(Property property) {
		propertyRepository.save(property);
	}

	@Override
	public List<Property> getSavedPropertiesForUser(String userId) {
		Optional<User> userOpt = userRepository.findById(userId);

		if (!userOpt.isPresent())
			return new ArrayList<Property>();
		User user = userOpt.get();

		return propertyRepository.findAllById(user.getBookmarkedProperties());
	}
}
