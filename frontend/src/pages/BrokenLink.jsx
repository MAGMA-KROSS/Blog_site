import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.sin(Date.now() / 1000) * 5,
        y: Math.cos(Date.now() / 1000) * 5
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-6" style={{ backgroundColor: '#e6ded7' }}>
      <div className="max-w-md w-full text-center">
        <div className="relative mb-8">
          <h1 
            className="text-9xl font-bold text-gray-800 opacity-90"
            style={{ 
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          >
            404
          </h1>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-10">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="60" fill="#000000" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-3xl font-medium mb-4 text-gray-800">Page Not Found</h2>
        
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-block cursor-pointer">
        <button 
          
          className="px-6 py-3 cursor-pointer bg-gray-800 text-white rounded-md font-medium transition-all duration-300 shadow-md"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            transform: isHovering ? 'translateY(-3px)' : 'translateY(0)',
            boxShadow: isHovering ? '0 10px 25px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
            
          Back to Home
        </button>
        </Link>
        
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="#333" strokeWidth="2" strokeDasharray="8 8" className="animate-spin" style={{ animationDuration: '20s' }} />
              <circle cx="70" cy="80" r="10" fill="#333" />
              <circle cx="130" cy="80" r="10" fill="#333" />
              <path d="M70 130 Q100 150 130 130" stroke="#333" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;