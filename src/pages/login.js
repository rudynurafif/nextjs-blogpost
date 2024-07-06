import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Field is required');
      return;
    }
    router.push('/dashboard');
  };

  return (
    <div className='container mt-5'>
      <h2>Login Page</h2>
      {error && <p className='text-danger'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='mt-5 mb-3'>
          <label className='form-label'>Username</label>
          <input
            type='text'
            className='form-control'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div mb-3>
          <label className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary mt-3'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
