import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CreateComment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    body: false,
  });

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

    // Simulate submission (replace with actual submission logic if needed)
    console.log('Submitting comment:', { name, email, body });

    // Redirect to dashboard after successful submission
    router.push('/dashboard');
  };

  const handleCancel = () => {
    // Redirect to dashboard without submitting
    router.push('/dashboard');
  };

  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  const isNameValid = name !== '';
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isBodyValid = body !== '';

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='w-4/5 bg-white rounded-lg shadow-md p-8'>
        <h2 className='text-2xl font-bold mb-4'>Create Comment</h2>
        {error && <p className='text-red-500'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input
              type='text'
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                touched.name && !isNameValid ? 'border-red-500' : 'border-gray-300'
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur('name')}
            />
            {touched.name && !isNameValid && (
              <p className='text-red-500'>Name is required</p>
            )}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                touched.email && !isEmailValid ? 'border-red-500' : 'border-gray-300'
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur('email')}
            />
            {touched.email && !isEmailValid && (
              <p className='text-red-500'>Email is invalid</p>
            )}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Comment</label>
            <textarea
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                touched.body && !isBodyValid ? 'border-red-500' : 'border-gray-300'
              }`}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              onBlur={() => handleBlur('body')}
            ></textarea>
            {touched.body && !isBodyValid && (
              <p className='text-red-500'>Comment is required</p>
            )}
          </div>
          <div className='flex'>
            <button
              type='submit'
              className={`py-2 mr-3 px-4 rounded-md ${
                isNameValid && isEmailValid && isBodyValid
                  ? 'bg-blue-500 text-white hover:bg-blue-700'
                  : 'bg-gray-400 text-white cursor-not-allowed'
              }`}
              disabled={!isNameValid || !isEmailValid || !isBodyValid}
            >
              Submit
            </button>
            <button
              type='button'
              className='py-2 px-4 bg-red-400 text-white rounded-md hover:bg-red-500'
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateComment;
