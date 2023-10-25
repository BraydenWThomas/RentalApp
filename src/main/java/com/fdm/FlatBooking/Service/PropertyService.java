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
import org.springframework.web.multipart.MultipartFile;

import com.fdm.FlatBooking.Model.Property;
import com.fdm.FlatBooking.Model.User;
import com.fdm.FlatBooking.Repository.PropertyRepository;
import com.fdm.FlatBooking.Repository.UserRepository;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.GridFSFindIterable;
import com.mongodb.client.gridfs.model.GridFSFile;

@Service
public class PropertyService implements IPropertyService {
	@Autowired
	PropertyRepository propertyRepository;

	@Autowired
	GridFsTemplate gridFsTemplate;

	@Autowired
	UserRepository userRepository;

	@Autowired
	GridFsOperations operations;

	@Override
	public List<Property> getAllProperties() {
		return propertyRepository.findAll();
	}

	@Override
	public List<Property> getAllAvailableProperties() {
		return propertyRepository.findByCurrentlyAvailableIsTrue();
	}

	@Override
	public List<Property> getRecentListings() {
		List<Property> props = propertyRepository.findByCurrentlyAvailableIsTrue();
		props.sort((Property p1, Property p2) -> p1.getLatestUpdate().compareTo(p2.getLatestUpdate()));

		if (props.size() < 5)
			return props;
		return props.subList(0, 4);

	}

	@Override
	public List<Property> getAllPropertiesForLeaser(String userId) {
		return propertyRepository.findByLandlordId(userId);
	}

	@Override
	public List<Property> getAllPropertiesForLeasee(String userId) {
		return propertyRepository.findByLeaseeId(userId);
	}

	@Override
	public Optional<Property> getPropertyById(String id) {
		return propertyRepository.findById(id);

	}

	@Override
	public List<Property> getPropertyWithFilters(String searchTxt, int minBed, int maxBed, int minBath, int maxBath,
			int minBudget, int maxBudget, int minCar, int maxCar, int minSize, int maxSize, String propertyType,
			boolean isAvailable) {

		List<Property> filteredResult = propertyRepository.getPropertyWithFilters(minBed, maxBed, minBath,
				maxBath, minBudget, maxBudget, minCar,
				maxCar, minSize, maxSize, propertyType, isAvailable);

		List<Property> result = new ArrayList<>();

		for (Property p : filteredResult) {
			if (p.getPropertyDescription().toLowerCase().contains(searchTxt.toLowerCase()))
				result.add(p);
		}

		return result;
	}

	@Override
	public void addProperty(Property property) {
		propertyRepository.save(property);
	}

	@Override
	public List<Property> getSavedPropertiesForUser(String userId) {
		Optional<User> userOpt = userRepository.findById(userId);

		if (!userOpt.isPresent())
			return new ArrayList<Property>();
		User user = userOpt.get();

		return propertyRepository.findAllById(user.getBookmarkedProperties());
	}

	@Override
	public void addPropertyPhoto(String propertyId, MultipartFile photo) throws IOException {
		Optional<Property> propertyOpt = propertyRepository.findById(propertyId);

		if (!propertyOpt.isPresent()) {
			System.out.println("No user (" + propertyId + ") to upload photo to");
			return;
		}

		Property property = propertyOpt.get();

		// Save photo
		InputStream in = photo.getInputStream();
		DBObject metaData = new BasicDBObject();
		metaData.put("propertyId", propertyId);

		// Upload photo
		ObjectId photoId = gridFsTemplate.store(in, propertyId + "photo=" + photo.getOriginalFilename(),
				photo.getContentType(), metaData);

		// Add photo id to property
		property.addImageId(photoId.toHexString());
		propertyRepository.save(property);
	}

	@Override
	public List<String> getPropertyPhotos(String propertyId) throws IllegalStateException, IOException {
		// Get associated photos
		List<GridFSFile> fileList = new ArrayList<>();
		gridFsTemplate.find(new Query(Criteria.where("metadata.propertyId").is(propertyId))).into(fileList);

		// Load data from photos
		List<String> res = new ArrayList<>();

		for (GridFSFile gridFsFile : fileList) {
			if (gridFsFile == null) {
				System.out.println("File is null");
				return null;
			}

			byte[] data = IOUtils.toByteArray(operations.getResource(gridFsFile).getInputStream());

			res.add(Base64.getEncoder().encodeToString(data));
		}

		return res;
	}

	@Override
	public String getPropertyPhoto(String propertyId) throws IllegalStateException, IOException {
		// Get first photo
		GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("metadata.propertyId").is(propertyId)));

		// Load data from photo
		if (file == null) {
			System.out.println("File is null");
			return null;
		}
		byte[] data = IOUtils.toByteArray(operations.getResource(file).getInputStream());

		return Base64.getEncoder().encodeToString(data);
	}

	public List<Property> getAllOwnProperties(String userId) {
		return propertyRepository.findByLandlordId(userId);
	}
}
