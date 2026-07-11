import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Login.css";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await API.post("/login", formData);

      alert(response.data.message);

      if (response.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Login Failed");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Login</h2>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>

          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;