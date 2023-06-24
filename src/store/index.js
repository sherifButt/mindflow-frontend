


import { useDispatch } from 'react-redux';
import mindmapReducer from './slice/mindmapSlice';
import userReducer from './slice/userSlice';

const store = configureStore({
  reducer: {
    mindmap: mindmapReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();









