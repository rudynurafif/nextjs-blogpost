import { createSlice } from '@reduxjs/toolkit';

// const updateCommentsData = (state) => {
//   localStorage.setItem('comments', JSON.stringify(state));

//   return state;
// };

// const initialState =
//   typeof window !== 'undefined'
//     ? localStorage.getItem('comments')
//       ? JSON.parse(localStorage.getItem('comments'))
//       : []
//     : false;

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    setComments: (state, action) => {
      // return updateCommentsData(action.payload);
      return action.payload;
    },
    addComment: (state, action) => {
      // updateCommentsData(state.unshift(action.payload));
      state.unshift(action.payload);
    },
    deleteComment: (state, action) => {
      return state.filter((comment) => comment.id !== action.payload);

      // return updateCommentsData(state);
    },
  },
});

export const { setComments, addComment, deleteComment } = commentsSlice.actions;

export default commentsSlice.reducer;
