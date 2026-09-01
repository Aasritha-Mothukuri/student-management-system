import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    createStudent,
    getStudent,
    updateStudent
} from "../services/StudentService";

function StudentComponent() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        course: ""
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [serverError, setServerError] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();


    // Load student details when editing
    useEffect(() => {

        if (id) {

            getStudent(id)
                .then((response) => {

                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmail(response.data.email);
                    setCourse(response.data.course);

                })
                .catch(error => {
                    console.error(error);
                    setServerError("Unable to load student details.");
                });
        }

    }, [id]);


    // Form validation
    function validateForm() {

        let valid = true;

        const errorsCopy = {
            firstName: "",
            lastName: "",
            email: "",
            course: ""
        };


        // First Name
        if (firstName.trim()) {

            errorsCopy.firstName = "";

        } else {

            errorsCopy.firstName = "First Name is required";
            valid = false;

        }


        // Last Name
        if (lastName.trim()) {

            errorsCopy.lastName = "";

        } else {

            errorsCopy.lastName = "Last Name is required";
            valid = false;

        }


        // Email
        if (!email.trim()) {

            errorsCopy.email = "Email is required";
            valid = false;

        }
        else if (!/\S+@\S+\.\S+/.test(email)) {

            errorsCopy.email = "Enter a valid email";
            valid = false;

        }
        else {

            errorsCopy.email = "";

        }


        // Course
        if (course.trim()) {

            errorsCopy.course = "";

        } else {

            errorsCopy.course = "Course is required";
            valid = false;

        }


        setErrors(errorsCopy);

        return valid;
    }


    // Handle input changes
    function handleInputChange(e) {

        const { name, value } = e.target;

        switch (name) {

            case "firstName":
                setFirstName(value);
                break;

            case "lastName":
                setLastName(value);
                break;

            case "email":
                setEmail(value);
                break;

            case "course":
                setCourse(value);
                break;

            default:
                break;
        }


        // Clear validation error when user starts typing
        if (value.trim()) {

            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ""
            }));

        }
    }


    // Cancel button
    function cancel() {

        navigate("/students");

    }


    // Save student
    function saveStudent(e) {

        e.preventDefault();

        // Clear previous messages
        setSuccessMessage("");
        setServerError("");

        const student = {
            firstName,
            lastName,
            email,
            course
        };


        // Validate form
        if (!validateForm()) {
            return;
        }


        // Update existing student
        if (id) {

            updateStudent(id, student)

                .then((response) => {

                    console.log(response.data);

                    setSuccessMessage(
                        "Student record updated successfully!"
                    );

                    // Navigate after a short delay so user can see message
                    setTimeout(() => {
                        navigate("/students");
                    }, 1500);

                })

                .catch(error => {

                    console.error(error);

                    if (
                        error.response &&
                        error.response.status === 409
                    ) {

                        setErrors(prevErrors => ({
                            ...prevErrors,
                            email: "Email already exists. Please use a different email."
                        }));

                    } else {

                        setServerError(
                            "Unable to update student record. Please try again."
                        );

                    }

                });


        } else {

            // Create new student
            createStudent(student)

                .then((response) => {

                    console.log(response.data);

                    setSuccessMessage(
                        "Student record created successfully!"
                    );

                    // Navigate after a short delay
                    setTimeout(() => {
                        navigate("/students");
                    }, 1500);

                })

                .catch(error => {

                    console.error(error);

                    if (
                        error.response &&
                        error.response.status === 409
                    ) {

                        setErrors(prevErrors => ({
                            ...prevErrors,
                            email: "Email already exists. Please use a different email."
                        }));

                    } else {

                        setServerError(
                            "Unable to create student record. Please try again."
                        );

                    }

                });
        }
    }


    return (

        <div className="container">

            <div className="row">

                <div className="card col-md-6 offset-md-3">

                    <h2 className="text-center mt-3">

                        {id
                            ? "Update Student"
                            : "Add Student"
                        }

                    </h2>


                    <div className="card-body">


                        {/* Success Message */}

                        {successMessage && (

                            <div className="alert alert-success text-center">

                                {successMessage}

                            </div>

                        )}


                        {/* Server Error */}

                        {serverError && (

                            <div className="alert alert-danger text-center">

                                {serverError}

                            </div>

                        )}


                        <form onSubmit={saveStudent}>


                            {/* First Name */}

                            <div className="form-group mb-3">

                                <label className="form-label">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    name="firstName"
                                    className={`form-control ${
                                        errors.firstName
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    value={firstName}
                                    onChange={handleInputChange}
                                />

                                {errors.firstName && (

                                    <div className="invalid-feedback">

                                        {errors.firstName}

                                    </div>

                                )}

                            </div>


                            {/* Last Name */}

                            <div className="form-group mb-3">

                                <label className="form-label">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    name="lastName"
                                    className={`form-control ${
                                        errors.lastName
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    value={lastName}
                                    onChange={handleInputChange}
                                />

                                {errors.lastName && (

                                    <div className="invalid-feedback">

                                        {errors.lastName}

                                    </div>

                                )}

                            </div>


                            {/* Email */}

                            <div className="form-group mb-3">

                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    name="email"
                                    className={`form-control ${
                                        errors.email
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    value={email}
                                    onChange={handleInputChange}
                                />

                                {errors.email && (

                                    <div className="invalid-feedback">

                                        {errors.email}

                                    </div>

                                )}

                            </div>


                            {/* Course */}

                            <div className="form-group mb-3">

                                <label className="form-label">
                                    Course
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter Course"
                                    name="course"
                                    className={`form-control ${
                                        errors.course
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    value={course}
                                    onChange={handleInputChange}
                                />

                                {errors.course && (

                                    <div className="invalid-feedback">

                                        {errors.course}

                                    </div>

                                )}

                            </div>


                            {/* Buttons */}

                            <div className="d-flex gap-2">

                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    {id
                                        ? "Update Student"
                                        : "Save Student"
                                    }
                                </button>


                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={cancel}
                                >
                                    Cancel
                                </button>

                            </div>


                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default StudentComponent;


