package com.fdm.FlatBooking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fdm.FlatBooking.Model.Property;
import com.fdm.FlatBooking.Repository.PropertyRepository;
import com.fdm.FlatBooking.Repository.TransactionRepository;
import com.fdm.FlatBooking.Repository.UserRepository;

@RestController
@RequestMapping("property")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserRepository userRepository;

    // Get all properties
    @GetMapping("")
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    // Get specific property
    @GetMapping("{propertyId}")
    public Property getPropertybyId(@PathVariable String propertyId) {
        return propertyRepository.findById(propertyId)
                // #TODO need proper or else throws -> i cant figure it out
                .orElseThrow();
    }

    // Create Property
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Property createProperty(@RequestBody Property property) {
        return propertyRepository.save(property);
    }

}