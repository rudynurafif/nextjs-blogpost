import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  if (typeof window === 'undefined') {
    return [];
  }
  const storedComments = localStorage.getItem('comments');
  return storedComments ? JSON.parse(storedComments) : [];
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: getInitialState(),
  initialState: [],
  reducers: {
    setComments: (state, action) => {
      localStorage.setItem('comments', JSON.stringify(action.payload));
      return action.payload;
    },
    addComment: (state, action) => {
      state.unshift(action.payload);
      localStorage.setItem('comments', JSON.stringify(state));
    },
    deleteComment: (state, action) => {
      const newState = state.filter((comment) => comment.id !== action.payload);
      localStorage.setItem('comments', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { setComments, addComment, deleteComment } = commentsSlice.actions;

export default commentsSlice.reducer;
