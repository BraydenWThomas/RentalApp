package com.fdm.FlatBooking;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.security.core.context.SecurityContextHolder;

import com.fdm.FlatBooking.Model.Address;
import com.fdm.FlatBooking.Model.Credentials;
import com.fdm.FlatBooking.Model.DetailFilters;
import com.fdm.FlatBooking.Model.Gender;
import com.fdm.FlatBooking.Model.GeoLocation;
import com.fdm.FlatBooking.Model.Property;
import com.fdm.FlatBooking.Model.PropertyDetails;
import com.fdm.FlatBooking.Model.PropertySearch;
import com.fdm.FlatBooking.Model.PropertyTypes;
import com.fdm.FlatBooking.Model.User;
import com.fdm.FlatBooking.Repository.PropertyRepository;
import com.fdm.FlatBooking.Repository.TransactionRepository;
import com.fdm.FlatBooking.Repository.UserRepository;
import com.fdm.FlatBooking.Model.Transaction;

@SpringBootApplication
@EnableMongoRepositories
public class FlatBookingApplication implements CommandLineRunner {

	@Autowired
	UserRepository userRepository;

	@Autowired
	PropertyRepository propertyRepository;

	@Autowired
	TransactionRepository transactionRepository;

	@Autowired
	GridFsTemplate gridFsTemplate;

	public static void main(String[] args) {
		SpringApplication.run(FlatBookingApplication.class, args);

		SecurityContextHolder.setStrategyName(SecurityContextHolder.MODE_GLOBAL);
	}

	public void run(String... args) throws Exception {

		// generates mock data
		System.out.println("----- Generate Mock Data -----\n");
		generateMockData();
		System.out.println("\n----------- Done -----------\n");

		// queryTests();

		// Image test
		// InputStream in = new FileInputStream("src/main/resources/images/cat1.jpg");
		// DBObject metaData = new BasicDBObject();
		// metaData.put("userId", "1234");
		// gridFsTemplate.store(in, "test_filename", "image/jpg", metaData);
	}

	public String uploadImage(String filename, String propertyId) throws Exception {
		InputStream in = new FileInputStream("src/main/resources/images/" + filename);
		DBObject metaData = new BasicDBObject();
		metaData.put("propertyId", propertyId);
		return gridFsTemplate.store(in, propertyId + filename, "image/jpg", metaData).toHexString();

	}

	public static byte[] LoadImage(String fileName) throws Exception {
		String filePath = "src/main/resources/images/";
		File file = new File(filePath + fileName);
		int size = (int) file.length();
		byte[] buffer = new byte[size];
		FileInputStream in = new FileInputStream(file);
		in.read(buffer);
		in.close();
		return buffer;
	}

	private void queryTests() {
		List<User> users = userRepository.findAll();
		List<Property> properties = propertyRepository.findByCurrentlyAvailableIsTrue();

		System.out.println(" GET ALL AVAILABLE");
		for (Property property : properties) {
			System.out.println(property.getAddress().getStreet());
		}

		properties = propertyRepository.findByLandlordId(users.get(4).getId());

		System.out.println(" GET ALL WITH LANDLORD " + users.get(4).getFirstName());
		for (Property property : properties) {
			System.out.println(property.getAddress().getStreet());
		}
		
		ArrayList propType = new ArrayList();
		propType.add("House");
		propType.add("Apartment");
		propType.add("Townhouse");
		propType.add("Grannyflat");
		propType.add("Room");
		propType.add("Unit");
		
		properties = propertyRepository.getPropertyWithFilters(0, 3, 0, 3, 0, 501, 0, 3, 0, 30000, "Apartment",
				true, propType);

		System.out.println(" GET WITH FILTERS ");
		for (Property property : properties) {
			System.out.println(property.getAddress().getStreet());
		}

		System.out.println("Get user with email: sam@jermyn.com");
		Optional<User> sam = userRepository.findUserByEmail("sam@jermyn.com");
		if (sam.isPresent())
			System.out.println(sam.get().getFirstName() + " " + sam.get().getLastName());
		else
			System.out.println("User not present");

	}

	private void createUsers() {
		ArrayList<PropertySearch> searches = new ArrayList<>();
		searches.add(new PropertySearch(
				new PropertyTypes(false, false, false, false, false, false),
				new DetailFilters(1, 2, 3, 4, 5, 6, 7, 8
				// , new Date(20000000), new Date(20000000)
				),
				new String[5]));

		// userRepository.save(new User("sjer", "samantha jermyn", 20, "manager"));
		User user1 = new User("Samantha", "Jermyn", 12345678, Gender.FEMALE, new Date(2000000000),
				"Cat Cafe Enthusiast", "1 Smith Street", true, new ArrayList<String>(), new ArrayList<String>(),
				1_000_000, new Credentials("samantha.jermyn", "sam@jermyn.com"), searches);
		User user2 = new User("Shuyun", "Huang", 12345678, Gender.FEMALE, new Date(2000000000), "COO", "2 Jess Street",
				true, new ArrayList<String>(), new ArrayList<String>(), 1_000_00,
				new Credentials("shuyun.huang", "shuyun@huang.com"), new ArrayList<PropertySearch>());
		User user3 = new User("Alyssa", "Chin", 12345678, Gender.FEMALE, new Date(2000000000), "Astronaut",
				"3 Dave Street", true, new ArrayList<String>(), new ArrayList<String>(), 1_000_00,
				new Credentials("alyssa.chin", "alyssa@chin.com"), new ArrayList<PropertySearch>());
		User user4 = new User("Yaness", "Yeung", 12345678, Gender.FEMALE, new Date(20000000), "CEO", "4 Market Street",
				true, new ArrayList<String>(), new ArrayList<String>(), 1_000_00,
				new Credentials("yaness.yeung", "yaness@yeung.com"), new ArrayList<PropertySearch>());
		User user5 = new User("Brayden", "Thomas", 12345678, Gender.MALE, new Date(20000000), "Engineer",
				"5 John Street", true, new ArrayList<String>(), new ArrayList<String>(), 1_000_001,
				new Credentials("brayden.thomas", "brayden@thomas.com"), new ArrayList<PropertySearch>());
		User user6 = new User("Oscar", "Jose", 12345678, Gender.MALE, new Date(20000000), "Doctor", "6 Pike Street",
				true, new ArrayList<String>(), new ArrayList<String>(), 1_000_00,
				new Credentials("oscar.jose", "oscar@jose.com"), new ArrayList<PropertySearch>());
		User user7 = new User("Jack", "Allie", 12345678, Gender.MALE, new Date(20000000), "Homeless", "7 High Street",
				true, new ArrayList<String>(), new ArrayList<String>(), 1_000_000_0,
				new Credentials("jack.allie", "jack@allie.com"), new ArrayList<PropertySearch>());

		userRepository.save(user1);
		userRepository.save(user2);
		userRepository.save(user3);
		userRepository.save(user4);
		userRepository.save(user5);
		userRepository.save(user6);
		userRepository.save(user7);
	}

	private void createProperties() throws Exception {
		ArrayList<Address> addrs = new ArrayList<>();
		addrs.add(new Address("1", "Boardwalk", "London", "England", "1234", new GeoLocation(123f, 123f)));
		addrs.add(new Address("2", "Mayfair", "London", "England", "1234", new GeoLocation(123f, 123f)));
		addrs.add(new Address("3", "Pall Mall", "London", "England", "1234", new GeoLocation(123f, 123f)));
		addrs.add(new Address("4", "Strand", "London", "England", "1234", new GeoLocation(123f, 123f)));
		addrs.add(new Address("5", "Trafalgar Square", "London", "England", "1234", new GeoLocation(123f, 123f)));
		addrs.add(new Address("6", "Leicester Square", "London", "England", "1234", new GeoLocation(123f, 123f)));
		addrs.add(new Address("7", "Vine Street", "London", "England", "1234", new GeoLocation(123f, 123f)));
		addrs.add(new Address("8", "Old Kent Road", "London", "England", "1234", new GeoLocation(123f, 123f)));
		addrs.add(new Address("9", "Whitehall", "London", "England", "1234", new GeoLocation(123f, 123f)));
		addrs.add(new Address("10", "Park Lane", "London", "England", "1234", new GeoLocation(123f, 123f)));
		addrs.add(new Address("11", "Picadilly", "London", "England", "1234", new GeoLocation(123f, 123f)));
		addrs.add(new Address("12", "Bond Street", "London", "England", "1234", new GeoLocation(123f, 123f)));

		ArrayList<PropertyDetails> pds = new ArrayList<>();
		pds.add(new PropertyDetails(1, 2, 2, 23000, 2));
		pds.add(new PropertyDetails(4, 2, 2, 23000, 2));
		pds.add(new PropertyDetails(6, 12, 8, 50000, 2));
		pds.add(new PropertyDetails(3, 2, 2, 23000, 2));
		pds.add(new PropertyDetails(1, 1, 0, 23000, 2));
		pds.add(new PropertyDetails(1, 2, 0, 23000, 2));
		pds.add(new PropertyDetails(2, 3, 1, 23000, 2));
		pds.add(new PropertyDetails(2, 1, 1, 23000, 2));
		pds.add(new PropertyDetails(3, 1, 1, 23000, 2));
		pds.add(new PropertyDetails(4, 2, 2, 23000, 2));
		pds.add(new PropertyDetails(1, 1, 1, 23000, 2));
		pds.add(new PropertyDetails(2, 2, 1, 23000, 2));

		List<User> users = userRepository.findAll();

		ArrayList<String> imageNames = new ArrayList<>();
		imageNames.add("cat1.jpg");
		imageNames.add("cat2.jpg");
		imageNames.add("cat3.jpg");
		imageNames.add("cat4.jpg");
		imageNames.add("cat5.jpg");
		imageNames.add("cat6.jpg");

		ArrayList<Boolean> features = new ArrayList<Boolean>();
		ArrayList<Property> properties = new ArrayList<>();
		properties.add(new Property("House", 500, 2000, users.get(0).getId(), null, addrs.get(0), "1 Red Hotel",
				pds.get(0), features, new Date(20000000), true));
		properties.add(new Property("Apartment", 500, 2000, users.get(0).getId(), null, addrs.get(1), "1 Green House",
				pds.get(1), features, new Date(20000000), true));
		properties.add(new Property("Townhouse", 500, 2000, users.get(1).getId(), null, addrs.get(2), "2 Green Houses",
				pds.get(2), features, new Date(20000000), true));
		properties.add(new Property("Grannyflat", 500, 2000, users.get(2).getId(), null, addrs.get(3), "3 Green Houses",
				pds.get(3), features, new Date(20000000), true));
		properties.add(new Property("Room", 500, 2000, users.get(3).getId(), null, addrs.get(4), "1 Red Hotel",
				pds.get(4), features, new Date(20000000), true));
		properties.add(new Property("Unit", 500, 2000, users.get(4).getId(), null, addrs.get(5), "4 Green Houses",
				pds.get(5), features, new Date(20000000), true));
		properties.add(new Property("House", 500, 2000, users.get(4).getId(), null, addrs.get(6), "3 Green Houses",
				pds.get(6), features, new Date(20000000), true));
		properties.add(new Property("Apartment", 500, 2000, users.get(6).getId(), null, addrs.get(7), "1 Red Hotel",
				pds.get(7), features, new Date(20000000), true));
		properties.add(new Property("Townhouse", 500, 2000, users.get(5).getId(), null, addrs.get(8), "1 Red Hotel",
				pds.get(8), features, new Date(20000000), true));
		properties.add(new Property("Grannyflat", 500, 2000, users.get(6).getId(), null, addrs.get(9), "1 Green House",
				pds.get(9), features, new Date(20000000), true));
		properties.add(new Property("Room", 500, 2000, users.get(6).getId(), null, addrs.get(10), "2 Green Houses",
				pds.get(10), features, new Date(20000000), true));
		properties.add(new Property("Unit", 500, 2000, users.get(3).getId(), null, addrs.get(11), "4 Green Houses",
				pds.get(11), features, new Date(20000000), true));

		propertyRepository.saveAll(properties);

		// add saved property
		users.get(0).getBookmarkedProperties().add(properties.get(5).getPropertyId());
		userRepository.save(users.get(0));

		// add images to properties
		for (int i = 0; i < properties.size(); i++) {
			Property property = properties.get(i);
			System.out.println("Adding images for property " + property.getAddress().getStreet());
			for (int j = 0; j < imageNames.size(); j++) {
				String image = imageNames.get((i + j) % imageNames.size());
				System.out.println("\tAdding image " + image);
				String id = uploadImage(image, property.getPropertyId());
				property.addImageId(id);
			}
		}

		propertyRepository.saveAll(properties);
	}

	private void createTransactions() {
		List<User> users = userRepository.findAll();
		ArrayList<Transaction> transactions = new ArrayList<Transaction>();
		transactions.add(
				new Transaction(users.get(0).getId(), users.get(1).getId(), new Date(20000000), 1000, "ref1"));
		transactions.add(
				new Transaction(users.get(1).getId(), users.get(2).getId(), new Date(20000000), 400, "ref2"));
		transactions.add(
				new Transaction(users.get(2).getId(), users.get(3).getId(), new Date(20000000), 350, "ref3"));
		transactions.add(
				new Transaction(users.get(3).getId(), users.get(4).getId(), new Date(20000000), 750, "ref4"));
		transactions.add(
				new Transaction(users.get(4).getId(), users.get(5).getId(), new Date(20000000), 150, "ref5"));
		transactions.add(
				new Transaction(users.get(5).getId(), users.get(6).getId(), new Date(20000000), 263, "ref6"));
		transactions.add(
				new Transaction(users.get(6).getId(), users.get(0).getId(), new Date(20000000), 320, "ref7"));

		transactionRepository.saveAll(transactions);
	}

	private void generateMockData() throws Exception {
		userRepository.deleteAll();
		propertyRepository.deleteAll();
		transactionRepository.deleteAll();
		gridFsTemplate.delete(new Query(Criteria.where("_id").exists(true)));

		System.out.print("Generating users...");
		createUsers();
		System.out.println("Done!");
		System.out.print("Generating Properties...");
		createProperties();
		System.out.println("Done!");
		System.out.print("Generating transactions...");
		createTransactions();
		System.out.println("Done!");
	}

}
