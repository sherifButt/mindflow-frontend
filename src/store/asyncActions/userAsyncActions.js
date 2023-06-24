


import axios from 'axios';

// Async action to register a new user
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/register', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async action to login a user
export const loginUser = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/login', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async action to reset a user's password
export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (resetData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/resetPassword', resetData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);





