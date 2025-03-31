// src/pages/Login.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { loginUser } from '../services/api';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Check for success message from register page
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Clean up the state to avoid showing the message after refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear specific error when user starts typing again
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username or Email is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      setServerError('');
      setSuccessMessage('');
      
      try {
        // Check if input is email or username
        const isEmail = /\S+@\S+\.\S+/.test(formData.username);
        const loginData = isEmail 
          ? { email: formData.username, password: formData.password }
          : { username: formData.username, password: formData.password };
        
        await loginUser(loginData);
        navigate('/home');
      } catch (error) {
        setServerError(error.message || 'Login failed. Please check your credentials.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#e6ded7] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-[#f5eee7] rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Create an account
            </Link>
          </p>
        </div>
        
        {successMessage && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {successMessage}
          </div>
        )}
        
        {serverError && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {serverError}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Username or Email"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            error={errors.username}
          />
          
          <FormInput
            label="Password"
            name="password"
            type={showPassword?"text":"password"}
            value={formData.password}
            onChange={handleChange}
            required
            error={errors.password}
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              
              <input
                onChange={() => setShowPassword(!showPassword)}
                id="show_password"
                name="show_password"
                type="checkbox"
                className="h-4 w-4 text-blue-600 bg-[#f5eee7] focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                show password
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;