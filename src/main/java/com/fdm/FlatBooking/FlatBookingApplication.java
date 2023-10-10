package com.fdm.FlatBooking;

import java.util.ArrayList;
import java.util.List;

import org.bson.BsonDateTime;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.fdm.FlatBooking.Model.Address;
import com.fdm.FlatBooking.Model.ContactInformation;
import com.fdm.FlatBooking.Model.DigitalWallet;
import com.fdm.FlatBooking.Model.GeoLocation;
import com.fdm.FlatBooking.Model.Property;
import com.fdm.FlatBooking.Model.PropertyDetails;
import com.fdm.FlatBooking.Model.PropertySearch;
import com.fdm.FlatBooking.Model.User;
import com.fdm.FlatBooking.Repository.PropertyRepository;
import com.fdm.FlatBooking.Repository.UserRepository;
import com.fdm.FlatBooking.Model.Transaction;

@SpringBootApplication
@EnableMongoRepositories
public class FlatBookingApplication implements CommandLineRunner{
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PropertyRepository propertyRepository;

	public static void main(String[] args) {
		SpringApplication.run(FlatBookingApplication.class, args);
	}

	public void run(String... args) {
        System.out.println("-----CREATE User ITEMS-----\n");
        createUser();
        System.out.println("\n-----USER CREATED-----\n");
    }

	private void createUser() {
//        userRepository.save(new User("sjer", "samantha jermyn", 20, "manager"));
//		User user = new User("Samantha", "Jermyn", "password", "Female", new BsonDateTime(20000000), "Manager", "123 Road Street", true, new ArrayList<Property>() , new ArrayList<Transaction>(), new DigitalWallet("398761", 1000000), new ContactInformation(012375983, "sam@jermyn.com"), new ArrayList<PropertySearch>());
		User user = new User("Samantha", "Jerrmyn", "password", "Female", new BsonDateTime(20000000), "Manager", "123 Road Street", true, new ArrayList<Property>(), new ArrayList<Transaction>(), new DigitalWallet("123", 1_000_000), new ContactInformation(123123123, "sam@jermyn.com"), new ArrayList<PropertySearch>());
		Address addr = new Address("1", "Road", "Town", "State", "1234", new GeoLocation(123f, 123f));
		PropertyDetails pd = new PropertyDetails(2, 2, 2, 23000, 2);
		Property prop = new Property("House", 500, 2000, user, user, addr, "Descriptiuo", pd, new ArrayList<Binary>(), new ArrayList<String>(), new BsonDateTime(123090129), true);
		
		userRepository.save(user);
		propertyRepository.save(prop);
	}

}
