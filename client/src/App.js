import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import { ConfigProvider } from "antd";
import UserBookings from "./pages/UserBookings";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";
import AdminHome from "./pages/AdminHome";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <ConfigProvider>
      <div className="App">
        <Router>
          <Routes>
            {/* Protecting Home and BookingCar routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/booking/:carid"
              element={
                <ProtectedRoute>
                  <BookingCar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Userbookings/"
              element={
                <ProtectedRoute>
                  <UserBookings />
                </ProtectedRoute>
              }
            />

            <Route
              path="/Addcar/"
              element={
                <ProtectedRoute>
                  <AddCar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editcar/:carid"
              element={
                <ProtectedRoute>
                  <EditCar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Admin/"
              element={
                <ProtectedRoute>
                  <AdminHome />
                </ProtectedRoute>
              }
            />

            {/* Public routes */}
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </ConfigProvider>
  );
}

// ProtectedRoute component
function ProtectedRoute({ children }) {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
