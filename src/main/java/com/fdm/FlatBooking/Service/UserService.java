package com.fdm.FlatBooking.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fdm.FlatBooking.Repository.UserRepository;

@Service
public class UserService implements IUserServer {
	@Autowired
	UserRepository userRepository;
	
}
