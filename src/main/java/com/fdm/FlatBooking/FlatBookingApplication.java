package com.fdm.FlatBooking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.fdm.FlatBooking.Model.User;
import com.fdm.FlatBooking.Repository.UserRepository;

@SpringBootApplication
@EnableMongoRepositories
public class FlatBookingApplication implements CommandLineRunner{
	
	@Autowired
	UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(FlatBookingApplication.class, args);
	}

	public void run(String... args) {
        System.out.println("-----CREATE User ITEMS-----\n");
        createUser();
        System.out.println("\n-----USER CREATED-----\n");
    }

	private void createUser() {
        userRepository.save(new User("sjer", "samantha jermyn", 20, "manager"));

		
	}

}
