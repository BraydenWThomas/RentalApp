package com.fdm.FlatBooking.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.apache.commons.io.IOUtils;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import com.fdm.FlatBooking.Model.PropertySearch;
import com.fdm.FlatBooking.Model.User;
import com.fdm.FlatBooking.Repository.UserRepository;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;

@Service
public class UserService implements IUserService {

	@Autowired
	GridFsTemplate gridFsTemplate;

	@Autowired
	UserRepository userRepository;

	@Autowired
	GridFsOperations operations;

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

	@Override
	public String getUserPhoto(String photoId) throws IllegalStateException, IOException {
		System.out.println("Finding photo with ID: " + photoId);
		GridFSFile gridFsfile = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(photoId)));

		if (gridFsfile == null) {
			System.out.println("File is null");
			return "";
		}

		// Read photo to byte array
		byte[] data = IOUtils.toByteArray(operations.getResource(gridFsfile).getInputStream());

		// Convert to base 64 string
		return Base64.getEncoder().encodeToString(data);
	}

	@Override
	public void setUserPhoto(MultipartFile photo, String userId) throws IOException {
		// Get user
		Optional<User> userOpt = userRepository.findById(userId);

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
		updateUser(user);
	}

}
