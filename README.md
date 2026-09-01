# Student Management System

A full-stack Student Management System built using Spring Boot, React, MySQL, and Bootstrap. The application provides an admin interface for managing student records through RESTful APIs.

## Features

### Admin Authentication
- Admin login
- Protected application routes
- Logout functionality
- Displays the logged-in admin username

### Home
- Separate home page introducing the application
- Navigation to the dashboard and student management features

### Dashboard
- Total number of students
- Course-wise student statistics
- Overview of student data

### Student Management
- Add new students
- View all students
- View individual student details
- Update student records
- Delete student records
- Search students by name or email
- Total student count

### Validation and Error Handling
- Required field validation
- Email format validation
- Duplicate email prevention
- Student not found handling
- Global exception handling
- Appropriate HTTP status codes for API errors
- Success messages after creating and updating student records
- Confirmation before deleting a student

## Technology Stack

### Backend
- Java 17
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate
- MySQL
- Maven
- Bean Validation
- Lombok

### Frontend
- React
- JavaScript
- React Router
- Axios
- Bootstrap
- Vite

## Architecture

The application follows a layered architecture:

```text
React Frontend
       |
       | HTTP / REST API
       v
Controller Layer
       |
       v
Service Layer
       |
       v
Repository Layer
       |
       v
JPA / Hibernate
       |
       v
MySQL Database
```

### Backend Layers

**Controller Layer**
- Handles HTTP requests and responses
- Defines REST API endpoints
- Receives request data from the frontend

**Service Layer**
- Contains business logic
- Handles operations such as duplicate email validation
- Coordinates between controllers and repositories

**Repository Layer**
- Uses Spring Data JPA
- Performs database operations
- Uses custom queries for student search and course statistics

**Entity Layer**
- Represents database entities using JPA annotations
- Includes `Student` and `Admin` entities

**DTO Layer**
- Used for transferring specific data between the frontend and backend
- Includes login and course statistics DTOs

**Exception Layer**
- Provides centralized exception handling for API errors

## REST API

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/login` | Authenticate admin |

### Student APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Retrieve all students |
| GET | `/students/{id}` | Retrieve a student by ID |
| GET | `/students/count` | Retrieve total student count |
| GET | `/students/course-stats` | Retrieve course-wise student statistics |
| GET | `/students/search?keyword=` | Search students |
| POST | `/students` | Create a new student |
| PUT | `/students/{id}` | Update an existing student |
| DELETE | `/students/{id}` | Delete a student |

## Database

The application uses MySQL for persistent data storage.

### Student Entity

| Field | Description |
|-------|-------------|
| `id` | Unique student identifier |
| `firstName` | Student first name |
| `lastName` | Student last name |
| `email` | Unique student email |
| `course` | Student course |

### Admin Entity

| Field | Description |
|-------|-------------|
| `id` | Unique admin identifier |
| `username` | Admin username |
| `password` | Admin password |

## Project Structure

```text
student-management-system/
│
├── student-management-system-backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/sms/
│   │   │   │       ├── controller/
│   │   │   │       ├── dto/
│   │   │   │       ├── entity/
│   │   │   │       ├── exception/
│   │   │   │       ├── repository/
│   │   │   │       └── service/
│   │   │   │
│   │   │   └── resources/
│   │   │
│   │   └── test/
│   │
│   └── pom.xml
│
├── student-management-system-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Application Flow

```text
Admin Login
     |
     v
Home
     |
     ├── Dashboard
     │     ├── Total Students
     │     └── Course Statistics
     │
     └── Student Management
           ├── View Students
           ├── Search Students
           ├── Add Student
           ├── Edit Student
           └── Delete Student
```

## Key Implementation Details

- Constructor-based dependency injection is used throughout the backend.
- Spring Data JPA is used for database persistence.
- Hibernate is used as the JPA implementation.
- REST APIs provide communication between the React frontend and Spring Boot backend.
- Axios is used by React for API communication.
- React Router is used for navigation and protected routes.
- Bean Validation is used to validate student input.
- Student email is enforced as unique at the database level.
- Service-level validation prevents duplicate email entries.
- JPQL queries are used for student search and course-wise statistics.
- A global exception handler provides centralized API error handling.
- The frontend displays appropriate success and error messages to the user.

## Getting Started

### Prerequisites

Make sure the following are installed:

- Java 17 or later
- Maven
- Node.js
- MySQL
- Git

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd student-management-system
```

### 2. Configure MySQL

Create the database:

```sql
CREATE DATABASE student_management_system;
```

Configure the database connection in:

```text
student-management-system-backend/src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_management_system
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Replace `YOUR_USERNAME` and `YOUR_PASSWORD` with your local MySQL credentials.

### 3. Run the Backend

Open a terminal in the backend directory:

```bash
cd student-management-system-backend
```

Run:

```bash
mvn spring-boot:run 
```

or if you are using STS then select the project folder and right click to find Run As option -> Spring Boot App.

The backend runs on:

```text
http://localhost:8080
```

### 4. Run the Frontend

Open another terminal:

```bash
cd student-management-system-frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Future Improvements

Possible future enhancements include:

- Server-side pagination
- Advanced filtering and sorting
- Role-based authorization
- Separate course management
- Unit and integration testing
- Improved API response models
- Cloud deployment
- Production-ready authentication and authorization

## Learning Outcomes

Through this project, I gained practical experience with:

- Building RESTful APIs using Spring Boot
- Developing a React frontend
- Connecting React with Spring Boot APIs
- Database persistence using Spring Data JPA and Hibernate
- MySQL database integration
- Layered backend architecture
- CRUD operations
- Input validation and exception handling
- Frontend routing and protected routes
- API integration using Axios
- Git and GitHub version control

## Author

**Aasritha**

Java Full Stack Learning Project
