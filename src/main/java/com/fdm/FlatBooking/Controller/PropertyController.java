package com.fdm.FlatBooking.Controller;

import java.io.IOException;
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

    @GetMapping("search")
    public List<Property> searchProperties(@RequestBody PropertySearch propertySearch){

    	System.out.println("test");
    
    //#TODO needs to be fixed later in future (static right now)
        return propertyService.getPropertyWithFilters(
        		"",
        		propertySearch.getDetailFilters().getMinBedrooms(),
            	propertySearch.getDetailFilters().getMaxBedrooms(),
            	propertySearch.getDetailFilters().getMinBathrooms(),
            	propertySearch.getDetailFilters().getMaxBathrooms(),
            	propertySearch.getDetailFilters().getMinPrice(),
            	propertySearch.getDetailFilters().getMaxPrice(),
            	propertySearch.getDetailFilters().getMinCars(),
            	propertySearch.getDetailFilters().getMaxCars(),
            	0,
            	1000000,
            	"house",
            	true);
    }
    
    @PostMapping("search")
    public void testSearch(@RequestBody PropertySearch propertySearch) {
    	System.out.println(propertySearch);
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