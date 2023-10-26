package com.fdm.FlatBooking.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

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
     * @param propType 
     * @return
     */

    List<Property> getRecentListings();

    void addProperty(Property property);

    List<Property> getSavedPropertiesForUser(String userId);

    void addPropertyPhoto(String propertyId, MultipartFile photo) throws IOException;

    List<String> getPropertyPhotos(String propertyId) throws IllegalStateException, IOException;

    String getPropertyPhoto(String propertyId) throws IllegalStateException, IOException;

    List<Property> getAllOwnProperties(String userId);

	List<Property> getPropertyWithFilters(String searchTxt, int minBed, int maxBed, int minBath, int maxBath,
			int minPrice, int maxPrice, int minCar, int maxCar, int minSize, int maxSize, String type,
			boolean isAvailable, List<String> propType);

}
