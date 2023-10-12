package com.fdm.FlatBooking.Service;

import java.util.List;
import java.util.Optional;

import com.fdm.FlatBooking.Model.User;

public interface IUserService {

	/**
	 * Gets all users in the database
	 * 
	 * @return A list of all users
	 */
	List<User> findAllUsers();

	/**
	 * Gets the user with the corresponding ID, or empty if non exist
	 * 
	 * @param id The ID to search for
	 * @return The corresponding user
	 */
	Optional<User> findUserById(String id);

	/**
	 * Adds the given user to the database
	 * 
	 * @param user
	 */
	void addUser(User user);

	/**
	 * Updates the given user object
	 * 
	 * @param user
	 */
	void updateUser(User user);

	/**
	 * Removes the given user
	 * 
	 * @param userId The ID of the user to remove
	 */
	void deleteUser(String userId);

	/**
	 * Checks of a user with the given email address exists in the database
	 * 
	 * @param email Email to check
	 * @return True if it exists, false otherwise
	 */
	boolean emailExists(String email);

	/**
	 * Gets the user with the corresponding email address
	 * 
	 * @param email The email of the user to get
	 * @return The corresponding user if they exist, empty if otherwise
	 */
	Optional<User> findUserByEmail(String email);
}