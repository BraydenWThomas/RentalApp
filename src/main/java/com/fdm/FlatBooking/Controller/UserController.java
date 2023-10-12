package com.fdm.FlatBooking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdm.FlatBooking.Model.User;
import com.fdm.FlatBooking.Repository.PropertyRepository;
import com.fdm.FlatBooking.Repository.TransactionRepository;
import com.fdm.FlatBooking.Repository.UserRepository;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserRepository userRepository;

    // Get all users
    @GetMapping("")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get specific user
    @GetMapping("{userId}")
    public User getUserbyId(@PathVariable String userId) {
        return userRepository.findById(userId)
                // #TODO need proper or else throws -> i cant figure it out
                .orElseThrow();
    }

}