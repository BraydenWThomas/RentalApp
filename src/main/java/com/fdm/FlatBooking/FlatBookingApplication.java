package com.fdm.FlatBooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class FlatBookingApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlatBookingApplication.class, args);
	}

}
