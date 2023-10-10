package com.fdm.FlatBooking.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("user")
public class User {
	@Id
    private String id;

    private String name;
    private int age;
    private String role;
    
	public String getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public int getAge() {
		return age;
	}
	public String getRole() {
		return role;
	}
	public void setId(String id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	public User(String id, String name, int age, String role) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.role = role;
	}
}
