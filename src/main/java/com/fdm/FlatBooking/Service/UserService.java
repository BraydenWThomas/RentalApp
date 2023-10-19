package com.fdm.FlatBooking.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fdm.FlatBooking.Model.PropertySearch;
import com.fdm.FlatBooking.Model.User;
import com.fdm.FlatBooking.Repository.UserRepository;

@Service
public class UserService implements IUserService {
	@Autowired
	UserRepository userRepository;

	@Override
	public List<User> findAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public Optional<User> findUserById(String id) {
		return userRepository.findById(id);
	}

	@Override
	public Optional<User> findUserByEmail(String email) {
		return userRepository.findUserByEmail(email);
	}

	@Override
	public boolean emailExists(String email) {
		return userRepository.findUserByEmail(email).isPresent();
	}

	@Override
	public void addUser(User user) {
		userRepository.save(user);
	}

	@Override
	public void updateUser(User user) {
		userRepository.save(user);
	}

	@Override
	public void deleteUser(String userId) {
		userRepository.deleteById(userId);
	}

	@Override
	public List<PropertySearch> getPropertySearchesForUser(String userId) {
		Optional<User> userOpt = userRepository.findById(userId);

		if (!userOpt.isPresent())
			return new ArrayList<PropertySearch>();

		User user = userOpt.get();

		return user.getPropertySearchPreferences();
	}

}
