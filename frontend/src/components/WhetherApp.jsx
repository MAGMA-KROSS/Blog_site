import { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWeather, setShowWeather] = useState(false);
  const [CITY, setCity] = useState('Delhi');

  const API_KEY = '80c8f101a04796cd5dec9db73b5621b8'; 
 

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        return response.json();
      })
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [CITY]);

  return (
    <div className='bg-[#eceae5] cursor-pointer p-4 rounded-lg shadow-md'>
      <div className="flex items-center w-[300px] justify-between border-b-1 mb-4">
        <div className="flex items-center mr-2">
          <svg className="cursor-pointer" width="40" height="50" viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="35" fontFamily="sans-serif" fontSize="30" fontWeight="bold" fill="orange">M</text>
          </svg>
          <h2 className='text-xl'>WEATHER</h2>
        </div>
        <div className="relative ">
          <div onClick={() => { setShowWeather(!showWeather) }} className="no-underline font-serif flex gap-0 mr-5 text-md text-black cursor-pointer hover:text-blue-500 transition-colors"><p>Cities</p>
            <svg className='hover:text-blue-500' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          {showWeather && <div className="absolute left-1/2 z-10 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm bg-gray-700 text-white rounded-md  shadow-lg">

            <div  className="flex flex-col text-lg">
              {[
                "New York",
                "London",
                "Tokyo",
                "Delhi",
                "Shanghai",
                "São Paulo",
                "Mumbai",
                "Mexico City",
                "Beijing",
                "Cairo",
                "Los Angeles",
                "Bangkok",
                "Moscow",
                "Paris",
                "Istanbul"
              ].map((city, index) => (
                <div
                  key={index}
                  onClick={() => { setCity(city); setShowWeather(false); setLoading(true); setWeather(null); }}
                  className="hover:text-gray-300 cursor-pointer transition duration-200"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>}
        </div>
      </div>
      {loading && (
      <div className="h-[300px] bg-[#e6ded7] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading...</p>
        </div>
      </div>
    )}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {weather && (
        <>
          <div className="flex items-center flex-col gap-0.5 border-b-1 justify-center mb-4 pb-4 text-2xl w-[300px]">
            <h2>{weather.main.temp}°C</h2>
            <h2 className='text-xl'>{weather.name}</h2>
          </div>
          <div className='flex flex-col gap-2 text-lg font-serif ml-4'>
            
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherApp;
