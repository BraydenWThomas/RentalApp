package com.fdm.FlatBooking.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.fdm.FlatBooking.Model.Property;

@Repository
public interface PropertyRepository extends MongoRepository<Property, Integer> {

}
