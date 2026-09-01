package com.sms.entity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "students")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "First Name is required")
	private String firstName;

	@NotBlank(message = "Last Name is required")
	private String lastName;

	@Email(message = "Invalid Email")
	@NotBlank(message = "Email is required")
	@Column(unique = true)
	private String email;

	@NotBlank(message = "Course is required")
	private String course;
}