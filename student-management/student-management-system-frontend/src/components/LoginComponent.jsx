import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/AuthService";

function LoginComponent() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin(e) {

        e.preventDefault();

        const loginData = {
            username,
            password
        };

        login(loginData)
            .then((response) => {

                if (response.data) {

                    localStorage.setItem("authenticated", "true");
                    localStorage.setItem("username", username);
                    navigate("/home");

                } else {

                    alert("Invalid Username or Password");

                }

            })
            .catch(error => {
                console.error(error);
                alert("Login Failed");
            });

    }

    useEffect(() => {
        const isAuthenticated =
            localStorage.getItem("authenticated") === "true";

        if (isAuthenticated) {
            navigate("/home");
        }
    }, [navigate]);

    return (

        <div className="container">

            <h1> Welcome! Please Login</h1>

            <div className="row justify-content-center">

                <div className="card col-md-4 mt-5">

                    <h2 className="text-center mt-3">
                        Admin Login
                    </h2>

                    <div className="card-body">

                        <form onSubmit={handleLogin}>

                            <div className="mb-3">

                                <label className="form-label">
                                    Username
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Login
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default LoginComponent;