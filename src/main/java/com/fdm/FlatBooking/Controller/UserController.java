package com.fdm.FlatBooking.Controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
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
import org.springframework.web.multipart.MultipartFile;

import com.fdm.FlatBooking.Model.Credentials;
import com.fdm.FlatBooking.Model.PropertySearch;
import com.fdm.FlatBooking.Model.User;
import com.fdm.FlatBooking.Service.UserService;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    GridFsTemplate gridFsTemplate;

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

    @PostMapping(value = "/{userId}/profilePhoto", consumes = "multipart/form-data")
    public void addProfilePhoto(@RequestParam("profilePhoto") MultipartFile photo, @PathVariable String userId)
            throws IOException {
        Optional<User> userOpt = userService.findUserById(userId);

        if (!userOpt.isPresent()) {
            System.out.println("No user (" + userId + ") to upload photo to");
            return;
        }

        User user = userOpt.get();

        // Save photo
        InputStream in = photo.getInputStream();
        DBObject metaData = new BasicDBObject();
        metaData.put("userId", userId);

        // Upload photo
        ObjectId photoId = gridFsTemplate.store(in, userId, photo.getContentType(), metaData);

        // Set photo id on user
        user.setProfilePhotoId(photoId.toHexString());
        userService.updateUser(user);
    }

    @GetMapping("/profilePhoto/{photoId}")
    public String getProfilePhoto(@PathVariable String photoId) throws IllegalStateException, IOException {
        System.out.println("Finding photo with ID: " + photoId);
        GridFSFile gridFsfile = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(photoId)));

        if (gridFsfile == null) {
            System.out.println("File is null");
            return "";
        }

        InputStream in = gridFsTemplate.getResource(gridFsfile).getInputStream();

        int length = (int) gridFsfile.getLength();
        if (length != gridFsfile.getLength()) {
            System.out.println("Image too big");
            return "";
        }

        byte[] data = new byte[length];

        in.read(data);

        return Base64.getEncoder().encodeToString(data);
    }
    
    @PostMapping("/deactivate")
    public boolean deactivateProfile(@RequestParam String userId) throws IOException {
        Optional<User> userOpt = userService.findUserById(userId);

        if (!userOpt.isPresent()) {
            System.out.println("No user (" + userId + ") to deactivate");
            return false;
        }

        User user = userOpt.get();
        user.setActive(false);
        userService.updateUser(user);
        
        return true;
    }
    
    @PostMapping("/{id}/balance")
    public User updateBalance(@PathVariable String id, @RequestParam double amount) {
    	Optional<User> optUser = this.userService.findUserById(id);
    	User user = optUser.get();
    	user.setBalance(amount);
    	this.userService.updateUser(user);
    	System.out.println(user);
    	return user;
    }
    
 // Basic login TODO: modify for security
    @GetMapping("/getname")
    public String getUserName(@RequestParam String id) {
        Optional<User> user = userService.findUserById(id);

        // Check if user is present
        if (!user.isPresent()) {
            return "";
        } 
        
        return user.get().getFirstName() + " " +  user.get().getLastName();
    }
    
    
    
}