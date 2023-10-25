package com.fdm.FlatBooking.Controller;

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

    
    //Get Properties by filter
    //#TODO Needs to be updated to include all filters in front end
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
            @RequestParam boolean isAvailable) {
        System.out.println("Search text: " + searchTxt);
        System.out.println("minBed: " + minBed);
        System.out.println("maxBed: " + maxBed);
        System.out.println("minBath: " + minBath);
        System.out.println("maxBath: " + maxBath);
        System.out.println("minPrice: " + minPrice);
        System.out.println("maxPrice: " + maxPrice);
        System.out.println("minCar: " + minCar);
        System.out.println("maxCar: " + maxCar);
        System.out.println("minSize: " + minSize);
        System.out.println("maxSize: " + maxSize);
        System.out.println("type: " + type);
        System.out.println("isAvailable: " + isAvailable);
        return propertyService.getPropertyWithFilters(searchTxt, minBed, maxBed, minBath,
                maxBath, minPrice, maxPrice, minCar,
                maxCar, minSize, maxSize, type, isAvailable);
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

}