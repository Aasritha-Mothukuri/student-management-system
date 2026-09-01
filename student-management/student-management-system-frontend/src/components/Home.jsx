

function HomeComponent() {

    return (
        <div className="container mt-5">

            <div className="text-center">

                <h1 className="display-4">
                    Welcome to Student Management System
                </h1>

                <p className="lead mt-3">
                    A simple web application for managing student records
                    efficiently.
                </p>

            </div>

            <div className="row mt-5">

                <div className="col-md-6 mb-4">

                    <div className="card h-100 shadow-sm">

                        <div className="card-body">

                            <h3 className="card-title">
                                Student Management
                            </h3>

                            <p className="card-text mt-3">
                                Manage student information in one place.
                                You can add new students, view existing
                                records, update student details, and remove
                                student records when required.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-6 mb-4">

                    <div className="card h-100 shadow-sm">

                        <div className="card-body">

                            <h3 className="card-title">
                                What You Can Do
                            </h3>

                            <ul className="mt-3">
                                <li>View all students</li>
                                <li>Add new students</li>
                                <li>Edit student information</li>
                                <li>Delete student records</li>
                                <li>View total number of students</li>
                            </ul>

                        </div>

                    </div>

                </div>

            </div>

            <div className="text-center mt-3">

                <p>
                    Use the navigation above to manage student records.
                </p>

            </div>

        </div>
    );
}

export default HomeComponent;