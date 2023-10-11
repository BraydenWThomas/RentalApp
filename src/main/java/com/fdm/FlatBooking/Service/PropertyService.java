package com.fdm.FlatBooking.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.fdm.FlatBooking.Model.Property;
import com.fdm.FlatBooking.Repository.PropertyRepository;

public class PropertyService implements IPropertyService {
	@Autowired
	PropertyRepository propertyRepository;

	@Override
	public List<Property> getAllProperties() {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'getAllProperties'");
	}

	@Override
	public List<Property> getAllAvailableProperties() {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'getAllAvailableProperties'");
	}

	@Override
	public List<Property> getAllPropertiesForLeaser(String userId) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'getAllPropertiesForLeaser'");
	}

	@Override
	public List<Property> getAllPropertiesForLeasee(String userId) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'getAllPropertiesForLeasee'");
	}

	@Override
	public Property getPropertyById(String id) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'getPropertyById'");
	}
}
