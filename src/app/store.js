import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../components/taskSlice/taskSlice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
