package com.fdm.FlatBooking.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.fdm.FlatBooking.Model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    // @Query("{name:'?0'}")
    // User findItemByName(String name);

    // @Query(value="{category:'?0'}", fields="{'name' : 1, 'age' : 1}")
    // List<User> findAll(String category);

    // public long count();

    @Query("{\"credentials.email\" : ?0}")
    Optional<User> findUserByEmail(String email);

}
