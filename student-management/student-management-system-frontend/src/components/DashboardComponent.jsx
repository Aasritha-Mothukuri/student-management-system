import { useEffect, useState } from "react";
import {
    getStudentCount,
    getCourseStats,
    listStudents
} from "../services/StudentService";

function DashboardComponent() {

    const [studentCount, setStudentCount] = useState(0);
    const [courseStats, setCourseStats] = useState([]);
    const [recentStudents, setRecentStudents] = useState([]);

    useEffect(() => {

        getStudentCount()
            .then((response) => {
                setStudentCount(response.data);
            })
            .catch((error) => {
                console.error(error);
            });


        getCourseStats()
            .then((response) => {
                setCourseStats(response.data);
            })
            .catch((error) => {
                console.error(error);
            });


        listStudents()
            .then((response) => {

                const students = response.data;

                setRecentStudents(
                    students.slice(-5).reverse()
                );

            })
            .catch((error) => {
                console.error(error);
            });

    }, []);


    return (

        <div className="container">

            {/* Dashboard Header */}

            <div className="mt-4 mb-4">

                <h2>Dashboard</h2>

                <p className="text-muted">
                    Overview of the Student Management System
                </p>

            </div>


            {/* Total Students */}

            <div className="row mb-4">

                <div className="col-md-4">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h5 className="card-title">
                                Total Students
                            </h5>

                            <h2>
                                {studentCount}
                            </h2>

                            <p className="text-muted mb-0">
                                Students currently registered
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* Course Statistics */}

            <div className="card shadow-sm mb-4">

                <div className="card-body">

                    <h4 className="mb-3">
                        Students by Course
                    </h4>

                    {courseStats.length > 0 ? (

                        <table className="table table-bordered text-center">

                            <thead className="table-dark">

                                <tr>
                                    <th>Course</th>
                                    <th>Number of Students</th>
                                </tr>

                            </thead>

                            <tbody>

                                {courseStats.map((course) => (

                                    <tr key={course.course}>

                                        <td>
                                            {course.course}
                                        </td>

                                        <td>
                                            {course.studentCount}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    ) : (

                        <div className="alert alert-info mb-0">
                            No course data available.
                        </div>

                    )}

                </div>

            </div>


            {/* Recent Students */}

            <div className="card shadow-sm mb-4">

                <div className="card-body">

                    <h4 className="mb-3">
                        Recent Students
                    </h4>

                    {recentStudents.length > 0 ? (

                        <table className="table table-hover">

                            <thead className="table-dark">

                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Course</th>
                                </tr>

                            </thead>

                            <tbody>

                                {recentStudents.map(student => (

                                    <tr key={student.id}>

                                        <td>
                                            {student.id}
                                        </td>

                                        <td>
                                            {student.firstName} {student.lastName}
                                        </td>

                                        <td>
                                            {student.email}
                                        </td>

                                        <td>
                                            {student.course}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    ) : (

                        <div className="alert alert-info mb-0">
                            No students found.
                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default DashboardComponent;