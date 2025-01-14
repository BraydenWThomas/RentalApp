package com.fdm.FlatBooking.Controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fdm.FlatBooking.Model.Property;
import com.fdm.FlatBooking.Model.PropertySearch;
import com.fdm.FlatBooking.Service.IPropertyService;

@RestController
@RequestMapping("/api/v1/properties")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PropertyController {

    @Autowired
    private IPropertyService propertyService;

    @GetMapping("recentListings")
    public List<Property> getRecentListings() {
        return propertyService.getRecentListings();
    }

    // Create Property
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Property createProperty(@RequestBody Property property) {
        propertyService.addProperty(property);
        return property;
    }

    @GetMapping("forUser")
    public List<Property> getPropertiesForUser(@RequestParam String userId) {
        return propertyService.getAllPropertiesForLeaser(userId);
    }

    @GetMapping("ownProperties")
    public List<Property> getAllOwnProperties(@RequestParam String userId) throws IOException {
        return propertyService.getAllOwnProperties(userId);
    }

    // Get Properties by filter
    // #TODO Needs to be updated to include all filters in front end
    @GetMapping("search")
    public List<Property> searchProperties(
            @RequestParam String searchTxt,
            @RequestParam int minBed,
            @RequestParam int maxBed,
            @RequestParam int minBath,
            @RequestParam int maxBath,
            @RequestParam int minPrice,
            @RequestParam int maxPrice,
            @RequestParam int minCar,
            @RequestParam int maxCar,
            @RequestParam int minSize,
            @RequestParam int maxSize,
            @RequestParam String type,
            @RequestParam boolean isAvailable,
            
            @RequestParam boolean isHouse,
            @RequestParam boolean isApartment,
            @RequestParam boolean isTownhouse,
            @RequestParam boolean isGrannyflat,
            @RequestParam boolean isRoom,
            @RequestParam boolean isUnit
            
    		) {
//        System.out.println("Search text: " + searchTxt);
//        System.out.println("minBed: " + minBed);
//        System.out.println("maxBed: " + maxBed);
//        System.out.println("minBath: " + minBath);
//        System.out.println("maxBath: " + maxBath);
//        System.out.println("minPrice: " + minPrice);
//        System.out.println("maxPrice: " + maxPrice);
//        System.out.println("minCar: " + minCar);
//        System.out.println("maxCar: " + maxCar);
//        System.out.println("minSize: " + minSize);
//        System.out.println("maxSize: " + maxSize);
//        System.out.println("type: " + type);
//        System.out.println("isAvailable: " + isAvailable);
//    		System.out.println("isHouse: " + isHouse);
//    		System.out.println("isApartment: " + isApartment);
//    		System.out.println("isTownhouse: " + isTownhouse);
//    		System.out.println("isGrannyflat: " + isGrannyflat);
//    		System.out.println("isRoom: " + isRoom);
//    		System.out.println("isUnit: " + isUnit);
    		
    		List<String> propType = new ArrayList<String>();
    		
    		if (isHouse == true) {propType.add("House");}
    		if (isApartment == true) {propType.add("Apartment");}
    		if (isTownhouse == true) {propType.add("Townhouse");}
    		if (isGrannyflat == true) {propType.add("Grannyflat");}
    		if (isRoom == true) {propType.add("Room");}
    		if (isUnit == true) {propType.add("Unit");}
    		
    		//Maybe redundant?
    		if (propType.size()== 0) {
    			propType.add("House");
    			propType.add("Apartment");
    			propType.add("Townhouse");
    			propType.add("Grannyflat");
    			propType.add("Room");
    			propType.add("Unit");
    		}
    		
    		System.out.println("array: " + propType);
    		System.out.println("array: " + propType.size());
    		
    		
    	
    	
    	
        return propertyService.getPropertyWithFilters(searchTxt, minBed, maxBed, minBath,
                maxBath, minPrice, maxPrice, minCar,
                maxCar, minSize, maxSize, type, isAvailable, propType);
    }

    @GetMapping("/{propertyId}")
    public Property getPropertyById(@PathVariable String propertyId) {
        Optional<Property> prop = propertyService.getPropertyById(propertyId);

        if (prop.isPresent()) {
            return prop.get();
        } else {
            // error message?
            return null;
        }
    }

    @GetMapping("/saved/{userId}")
    public List<Property> getSavedPropertiesForUser(@PathVariable String userId) {
        return propertyService.getSavedPropertiesForUser(userId);
    }

    // Update Property
    @PostMapping("updateProperty")
    public List<Property> updateProperty(@RequestBody Property property) {
        propertyService.addProperty(property);
        return propertyService.getAllOwnProperties(property.getLandlord());
    }

    @PostMapping(value = "/{propertyId}/photos", consumes = "multipart/form-data")
    public void addPropertyPhoto(@RequestParam("photo") MultipartFile photo, @PathVariable String propertyId)
            throws IOException {
        propertyService.addPropertyPhoto(propertyId, photo);
    }

    @GetMapping("/{propertyId}/photos")
    public List<String> getPropertyPhotos(@PathVariable String propertyId) throws IllegalStateException, IOException {
        return propertyService.getPropertyPhotos(propertyId);
    }

    @GetMapping("/{propertyId}/photo")
    public String getPropertyPhoto(@PathVariable String propertyId) throws IllegalStateException, IOException {
        String res = propertyService.getPropertyPhoto(propertyId);
        return res;
    }

}