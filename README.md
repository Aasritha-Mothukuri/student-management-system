# Student Management System

A simple Student Management System built using Spring Boot, Thymeleaf, Spring MVC, Spring Data JPA, Hibernate, and H2 Database.

This project is being developed version by version to learn full-stack Java backend development using the Spring ecosystem.

---

# Current Version

## Version 1.0 Features

- Add Student
- View Student Records
- H2 In-Memory Database
- Spring Boot MVC Architecture
- Thymeleaf Frontend
- Bootstrap UI

> Note:
> Currently the project uses an H2 in-memory database (`jdbc:h2:mem:testdb`).
> Data is stored temporarily and will be cleared when the application stops or restarts.

---

# Screenshots
  ## Home Page
<img width="1919" height="1013" alt="image" src="https://github.com/user-attachments/assets/7a0e3dff-3021-4cab-a8fb-cbe47da57d28" />

  ## Add Student Form
<img width="1915" height="886" alt="image" src="https://github.com/user-attachments/assets/74d24425-2d17-47b7-8896-61a0571e09ca" />

  ## Student Records Table
  <img width="1919" height="777" alt="image" src="https://github.com/user-attachments/assets/32fe98df-9f3e-44ff-9c79-f0d1b86f7d8b" />

<img width="1878" height="873" alt="image" src="https://github.com/user-attachments/assets/bd2ad283-6ef6-4390-a272-649f43b54387" />



# Technologies Used

| Technology | Purpose |
|------------|---------|
| Java | Programming Language |
| Spring Boot | Backend Framework |
| Spring MVC | Web Layer |
| Spring Data JPA | Database Operations |
| Hibernate | ORM Framework |
| Thymeleaf | Template Engine |
| H2 Database | Temporary In-Memory Database |
| Bootstrap 5 | Frontend Styling |
| Maven | Dependency Management |

---

# Project Structure

```text
src
 └── main
     ├── java
     │    └── com.example.student_management
     │          ├── controller
     │          ├── entity
     │          ├── repository
     │          └── StudentManagementApplication.java
     │
     └── resources
           ├── templates
           └── application.properties
```

---

# How to Run the Project

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/student-management-system.git
```

---

## 2. Open Project

Open the project in:

- IntelliJ IDEA
- Spring Tool Suite
- VS Code

---

## 3. Run Application

Run:

```text
StudentManagementApplication.java
```

---

## 4. Open Browser

```text
http://localhost:8080
```

---

# Current CRUD Status

| Operation | Status |
|-----------|--------|
| Create Student | Completed |
| Read Students | Completed |
| Update Student | Planned |
| Delete Student | Planned |

---

# Planned Future Versions

## Version 2.0
- Update Student
- Delete Student

## Version 3.0
- MySQL Database Integration
- Permanent Data Storage

## Version 4.0
- Form Validation
- Error Handling

## Version 5.0
- Search Functionality
- Pagination

## Version 6.0
- Spring Security Authentication
- Login System

## Version 7.0
- REST API Development
- React Frontend Integration

---

# Learning Outcomes

This project helps in understanding:

- Spring Boot MVC Architecture
- CRUD Operations
- Thymeleaf Templating
- Spring Data JPA
- Hibernate ORM
- Frontend + Backend Integration
- Maven Project Structure
- Git & GitHub Workflow

---

# License

This project is developed for learning and educational purposes.
