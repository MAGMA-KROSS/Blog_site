import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./sign.css";

function Register() {
  const { setUser } = useContext(AuthContext); // Store user in AuthContext
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        name: formData.name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      setUser(res.data.user); // Store user in context
      localStorage.setItem("token", res.data.token); // Save token to local storage
      console.log("Registration successful:", res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] rounded-2xl shadow-[0_0_20px_5px_rgba(0,0,0,0.2)]">
        <h1 className="text-center text-4xl mt-3">Register</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="flex flex-col p-5" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className="p-3 rounded-lg border-2 border-amber-400 mt-5"/>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} className="p-3 rounded-lg border-2 border-amber-400 mt-5"/>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="p-3 rounded-lg border-2 border-amber-400 mt-5"/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="p-3 rounded-lg border-2 border-amber-400 mt-5"/>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="p-3 rounded-lg border-2 border-amber-400 mt-5"/>
          <button type="submit" disabled={loading} className="bg-amber-600 cursor-pointer hover:scale-101 text-white p-3 rounded-lg mt-5">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
