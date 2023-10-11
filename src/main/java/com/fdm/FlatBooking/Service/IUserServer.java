package com.fdm.FlatBooking.Service;

import java.util.List;

import com.fdm.FlatBooking.Model.User;

public interface IUserServer {
	
	/**
	 * Gets all users in the database
	 * @return A list of all users
	 */
	List<User> findAllUsers();
	
	/**
	 * Gets the user with the corresponding ID, or null if non exist
	 * @param id The ID to search for
	 * @return The corresponding user
	 */
	User findUserById(String id);
	
	/**
	 * Adds the given user to the database
	 * @param user
	 */
	void addUser(User user);
	
	/**
	 * Updates
	 * @param user
	 */
	void updateUser(User user);
	
	void deleteUser(User user);

}
