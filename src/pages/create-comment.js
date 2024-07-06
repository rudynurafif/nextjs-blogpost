import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const CreateComment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || body === '') {
      setError('All fields are required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return;
    }

    router.push('/dashboard');
  };

  return (
    <div className='container mt-5'>
      <h2>Create Comment</h2>
      {error && <p className='text-danger'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label' Name></label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label' Name></label>
          <input
            type='email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label' Name></label>
          <textarea
            className='form-control'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
