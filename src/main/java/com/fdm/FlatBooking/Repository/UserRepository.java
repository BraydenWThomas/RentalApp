package com.fdm.FlatBooking.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.fdm.FlatBooking.Model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
	
}
