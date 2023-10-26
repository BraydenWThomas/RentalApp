package com.fdm.FlatBooking.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.fdm.FlatBooking.Model.Property;

@Repository
public interface PropertyRepository extends MongoRepository<Property, String> {

    List<Property> findByCurrentlyAvailableIsTrue();

    @Query("{'landlordId': {$regex: ?0 }})")
    List<Property> findByLandlordId(String userId);

    @Query("{'leaseeId': {$regex: ?0 }})")
    List<Property> findByLeaseeId(String userId);

    @Query("{\"details.bedroom\": {\"$gt\": ?0, \"$lt\": ?1}, \"details.bathroom\": {\"$gt\": ?2, \"$lt\": ?3}, \"rentalPrice\": {\"$gt\": ?4, \"$lt\": ?5}, \"details.carPark\": {\"$gt\": ?6, \"$lt\": ?7}, \"details.propertySize\": {\"$gt\": ?8, \"$lt\": ?9}, \"propertyType\": ?10, \"currentlyAvailable\": ?11}")
    List<Property> getPropertyWithFilters(
    		int minBed, int maxBed, 
    		int minBath, int maxBath, 
    		int minPrice, int maxPrice, 
    		int minCar, int maxCar, 
    		int minSize, int maxSize, 
    		String propertyType,
    		boolean isAvailable);

    // {"details.bathroom": {"$gt": 1, "$lt": 4}, "details.bedroom": {"$gt": 1,
    // "$lt": 4}}
    // ,
    // int minBath,
    // int maxBath,
    // int minBudget,
    // int maxBudget,
    // int minCar,
    // int maxCar,
    // int minSize,
    // int maxSize);
}
