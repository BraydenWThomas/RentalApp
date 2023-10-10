package com.fdm.FlatBooking.Service;

import org.springframework.beans.factory.annotation.Autowired;

import com.fdm.FlatBooking.Repository.PropertyRepository;

public class PropertyService implements IPropertyService {
	@Autowired
	PropertyRepository propertyRepository;
}
