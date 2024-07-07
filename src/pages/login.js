import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({
    username: false,
    password: false,
  });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      return;
    }
    router.push('/dashboard');
  };

  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  const isUsernameValid = username !== '';
  const isPasswordValid = password !== '';

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='max-w-2xl sm:w-4/5 bg-white rounded-lg shadow-md p-8'>
        <h2 className='text-2xl font-bold mb-4'>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700'>Username</label>
            <input
              type='text'
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                touched.username && !isUsernameValid
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => handleBlur('username')}
            />
            {touched.username && !isUsernameValid && (
              <p className='text-red-500'>Username is required</p>
            )}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Password</label>
            <input
              type='password'
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                touched.password && !isPasswordValid
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleBlur('password')}
            />
            {touched.password && !isPasswordValid && (
              <p className='text-red-500'>Password is required</p>
            )}
          </div>
          <button
            type='submit'
            className={`w-full py-2 px-4 text-white font-bold rounded-md ${
              isUsernameValid && isPasswordValid
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isUsernameValid || !isPasswordValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
