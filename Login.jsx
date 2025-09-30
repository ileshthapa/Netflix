import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'netflix' && password === '1234') {
      navigate('/home'); 
    } else {
      setError('Invalid username or password');
    }
  };
 
  return (
    <div className="relative h-screen w-screen overflow-hidden">
     <div className="relative h-screen w-screen">
  <img
    src="/assets/background_banner.jpg"
    alt="lamook voo"
    className="h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-opacity-50"></div>
</div>

      <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
        <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg text-white w-96 shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              className="w-full mb-4 p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition"
            >
              Sign In
            </button>
            {error && (
              <p className="text-red-500 text-sm text-center mt-3">{error}</p>
            )}
          </form>
          <p className="text-gray-400 text-sm mt-6 text-center">
            New to Netflix?{' '}
            <span className="text-white hover:underline cursor-pointer">
              Sign up now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
