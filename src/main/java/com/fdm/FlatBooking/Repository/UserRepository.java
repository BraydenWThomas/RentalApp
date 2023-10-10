package com.fdm.FlatBooking.Repository;

<<<<<<< HEAD
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.fdm.FlatBooking.Model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
	
=======
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.fdm.FlatBooking.Model.User;


public interface UserRepository extends MongoRepository<User, String>  {

	@Query("{name:'?0'}")
    User findItemByName(String name);
    
    @Query(value="{category:'?0'}", fields="{'name' : 1, 'age' : 1}")
    List<User> findAll(String category);
    
    public long count();

>>>>>>> f97281d0433187c709bc22d36c1ac875fcaa6491
}
