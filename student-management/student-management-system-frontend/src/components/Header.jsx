import { useNavigate, useLocation, NavLink } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    const username = localStorage.getItem("username");

    function logout() {
        localStorage.clear();
        navigate("/login");
    }

    const isLoginPage =
        location.pathname === "/" || location.pathname === "/login";

    return (
        <header>

            <nav className="navbar navbar-dark bg-dark">

                <div className="container">

                    <span className="navbar-brand">
                        Student Management System
                    </span>

                    {!isLoginPage &&
                        <div className="d-flex align-items-center">

                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    `text-decoration-none me-3 ${isActive ? 'text-warning fw-bold' : 'text-white text-hover'}`
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `text-decoration-none me-3 ${isActive ? 'text-warning fw-bold' : 'text-white text-hover'}`
                                }
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                to="/students"
                                className={({ isActive }) =>
                                    `text-decoration-none me-3 ${isActive ? 'text-warning fw-bold' : 'text-white text-hover'}`
                                }
                            >
                                Students
                            </NavLink>

                            {/* <NavLink
                                to="/students"
                                className="text-white text-decoration-none me-3"
                            >
                                Students
                            </NavLink> */}

                            <span className="text-white me-3">
                                Welcome, {username}
                            </span>

                            <button
                                className="btn btn-outline-light"
                                onClick={logout}
                            >
                                Logout
                            </button>

                        </div>
                    }

                </div>

            </nav>

        </header>
    );
}

export default Header;