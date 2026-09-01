import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listStudents, deleteStudent, searchStudents } from "../services/StudentService";

function ListStudentComponent() {

    const [students, setStudents] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        getAllStudents();
    }, []);

    const navigate = useNavigate();


    //search


    function handleSearch() {

        if (!keyword.trim()) {
            getAllStudents();
            return;
        }

        searchStudents(keyword)
            .then((response) => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }


    function handleClearSearch() {

        setKeyword("");
        getAllStudents();
    }


    //search end

    function addNewStudent() {
        navigate("/add-student");
    }

    function updateStudent(id) {
        navigate(`/edit-student/${id}`);
    }

    function removeStudent(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        deleteStudent(id)
            .then(() => {
                getAllStudents();
            })
            .catch(error => {
                console.error(error);
            });

    }

    function getAllStudents() {
        listStudents()
            .then((response) => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }



    return (
        <div className="container-fluid px-5">
            <br></br>
            <button
                className="btn btn-primary mb-3 float-start"
                onClick={addNewStudent}
            >
                Add Student
            </button>
            <br></br>
            <h3 className="text-center mt-4">List of Students</h3>

            <div className="row mb-4">

                <div className="col-md-6">

                    <div className="input-group">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name or email"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                        />

                        <button
                            className="btn btn-primary"
                            onClick={handleSearch}
                        >
                            Search
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={handleClearSearch}
                        >
                            Clear
                        </button>

                    </div>

                </div>

            </div>

            {
                students.length > 0 ? (

                    <table className="table table-bordered table-hover text-center">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Course</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                students.map(student => (
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.email}</td>
                                        <td>{student.course}</td>

                                        <td>
                                            <button
                                                className="btn btn-info btn-sm me-2"
                                                onClick={() => updateStudent(student.id)}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => removeStudent(student.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                ) : (

                    <div className="alert alert-info text-center">
                        No students found.
                    </div>

                )
            }

            <div className="card mb-3 col-3">

                <div className="card-body d-flex align-items-center">

                    <h5 className="mb-0 me-2">
                        Total Students:
                    </h5>

                    <h4 className="mb-0">
                        {students.length}
                    </h4>

                </div>

            </div>
        </div>
    );
}

export default ListStudentComponent;