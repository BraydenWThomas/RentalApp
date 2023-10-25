package com.fdm.FlatBooking.Service;

import java.util.List;
import java.util.Optional;

import com.fdm.FlatBooking.Model.Property;

public interface IPropertyService {

    /**
     * Gets all properties
     * 
     * @return
     */
    List<Property> getAllProperties();

    /**
     * Gets all properties with available = true
     * 
     * @return
     */
    List<Property> getAllAvailableProperties();

    /**
     * Gets all properties where the leaser is the user with the given ID
     * 
     * @param userId The leaser's user ID
     * @return All properties for that leaser
     */
    List<Property> getAllPropertiesForLeaser(String userId);

    /**
     * Gets all properties where the leasee is the user with the given ID
     * 
     * @param userId The leasee's user ID
     * @return All the properties linked to the leasee
     */
    List<Property> getAllPropertiesForLeasee(String userId);

    /**
     * Gets the property with the given ID or null if it doesn't exist
     * 
     * @param id
     * @return
     */
    Optional<Property> getPropertyById(String id);

    /**
     * 
     * @param minBed
     * @param maxBed
     * @param minBath
     * @param maxBath
     * @param minBudget
     * @param maxBudget
     * @param minCar
     * @param maxCar
     * @param minSize
     * @param maxSize
     * @return
     */
    List<Property> getPropertyWithFilters(String searchTxt, int minBed, int maxBed, int minBath, int maxBath,
            int minBudget, int maxBudget, int minCar, int maxCar, int minSize, int maxSize, String propertyType,
            boolean isAvailable);

    List<Property> getRecentListings();

    void addProperty(Property property);

    List<Property> getSavedPropertiesForUser(String userId);

	List<Property> getAllOwnProperties(String userId);

}
