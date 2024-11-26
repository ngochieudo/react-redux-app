import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../app/features/posts/postSlice';

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
