'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '@/store/commentsSlice';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

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

  const dispatch = useDispatch();
  const router = useRouter();
  const comments = useSelector((state) => state.comments);

  const isNameValid = name !== '';
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isBodyValid = body !== '';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNameValid || !isEmailValid || !isBodyValid) {
      setError('Fields are required');
      return;
    }

    const newComment = {
      id: uuidv4(),
      name,
      email,
      body,
    };

    dispatch(addComment(newComment));

    router.push('/dashboard');
  };

  const handleCancel = () => {
    router.push('/dashboard');
  };

  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

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
              className={`input-form ${
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
              autoComplete='off'
              className={`input-form ${
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
              className={`input-form ${
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
