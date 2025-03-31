// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem('token');
    navigate('/login'); // ✅ Now `useNavigate` is inside a component
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // This is a placeholder since our current API doesn't have a profile endpoint
        // In a real app, you would create a user profile endpoint in your backend
        
        // Simulating a profile fetch for demonstration
        setTimeout(() => {
          // Mock user data for demonstration
          setUser({
            name: 'John Doe',
            username: 'johndoe',
            email: 'john@example.com',
            joinedDate: 'March 2025'
          });
          setLoading(false);
        }, 1000);
        
        // In a real app, your API call would look something like this:
        // const response = await api.get('/auth/profile');
        // setUser(response.data);
        // setLoading(false);
      } catch (err) {
        setError('Failed to load profile. Please try again later.');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#e6ded7] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md w-full">
          <p className="font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    <Header/>
    <Navbar/>
    <div className=" bg-[#e6ded7]">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5eee7] shadow-lg rounded-lg overflow-hidden">
          <div className="bg-black py-6 px-8">
            <h1 className="text-2xl font-bold text-white">My Profile</h1>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="bg-gray-300 text-black rounded-full h-24 w-24 flex items-center justify-center text-3xl font-bold">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <div className="mt-4 sm:mt-0 sm:ml-8">
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">@{user.username}</p>
                <p className="text-sm text-gray-500 mt-1">Member since {user.joinedDate}</p>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">Account Information</h3>
              
              <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                  <dd className="mt-1 text-gray-900">{user.name}</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-gray-500">Username</dt>
                  <dd className="mt-1 text-gray-900">{user.username}</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                  <dd className="mt-1 text-gray-900">{user.email}</dd>
                </div>
              </dl>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => {
                  logoutUser()
                  console.log('User logged out');
                }}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;