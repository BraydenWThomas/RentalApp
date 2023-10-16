package com.fdm.FlatBooking.Controller;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.security.authentication.TestingAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fdm.FlatBooking.Model.Credentials;
import com.fdm.FlatBooking.Model.User;
import com.fdm.FlatBooking.Repository.PropertyRepository;
import com.fdm.FlatBooking.Repository.TransactionRepository;
import com.fdm.FlatBooking.Repository.UserRepository;

@RestController
@RequestMapping("/api/v1/users")
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
    @GetMapping("/user/{userId}")
    public User getUserbyId(@PathVariable String userId) {
        return userRepository.findById(userId)
                // #TODO need proper or else throws -> i cant figure it out
                .orElseThrow();
    }

    // Create User #TODO this will need to be replaced when security added
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // Basic login TODO: modify for security
    @GetMapping("/signin")
    public boolean verifyUser(@RequestParam String email, @RequestParam String password) {
        Optional<User> user = userRepository.findUserByEmail(email);

        // Check if user is present
        if (!user.isPresent()) {
            return false;
        } else {
            // Check password
            Credentials creds = user.get().getCredentials();
            if (!creds.getPassword().equals(password))
                return false;
        }

        SecurityContext context = SecurityContextHolder.createEmptyContext();

        Authentication auth = new UsernamePasswordAuthenticationToken(email, password);
        context.setAuthentication(auth);

        SecurityContextHolder.setContext(context);

        // getting secuirty context:

        // SecurityContext getContext = SecurityContextHolder.getContext();
        // Authentication authentication = context.getAuthentication();
        // String username = authentication.getName();
        // Object principal = authentication.getPrincipal();
        // Object pword = authentication.getCredentials();

        // System.out.println(username);
        // System.out.println(pword);
        return true;
    }
}