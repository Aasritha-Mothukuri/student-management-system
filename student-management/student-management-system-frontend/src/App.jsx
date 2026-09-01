import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeComponent from "./components/Home";
import DashboardComponent from "./components/DashboardComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import StudentComponent from "./components/StudentComponent";
import Footer from "./components/Footer";
import LoginComponent from "./components/LoginComponent";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomeComponent />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardComponent />
              </ProtectedRoute>
            }
          />
          <Route path="/students" element={<ProtectedRoute>
            <ListStudentComponent />
          </ProtectedRoute>} />
          <Route path="/add-student" element={<ProtectedRoute>
            <StudentComponent />
          </ProtectedRoute>} />
          <Route
            path="/edit-student/:id"
            element={<ProtectedRoute>
              <StudentComponent />
            </ProtectedRoute>}
          />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </div>
      <Footer />

    </BrowserRouter>
  );
}

export default App;