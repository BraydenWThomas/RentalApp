package com.fdm.FlatBooking.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.fdm.FlatBooking.Model.PropertySearch;
import com.fdm.FlatBooking.Model.User;
import com.fdm.FlatBooking.Service.UserService;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/{userId}/recentSearches")
    public List<PropertySearch> getRecentSearchesForUser(@PathVariable String userId) {
        return userService.getPropertySearchesForUser(userId);
    }

    @GetMapping("/userdetails")
    public User getLoggedInUser() {
        System.out.println("Get user");
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication auth = context.getAuthentication();

        if (auth == null) {
            // return error
            return null;
        }

        String email = auth.getName();

        System.out.println(context.getAuthentication().isAuthenticated());
        System.out.println(email);

        Optional<User> user = userService.findUserByEmail(email);

        if (user.isPresent())
            return user.get();
        else
            return null;
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        userService.addUser(user);
        return user;
    }

    // Basic login TODO: modify for security
    @GetMapping("/signin")
    public boolean verifyUser(@RequestParam String email, @RequestParam String password) {
        Optional<User> user = userService.findUserByEmail(email);

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

        return true;
    }

    @GetMapping("/signout")
    public boolean signoutUser() {
        SecurityContextHolder.clearContext();
        return true;
    }
}