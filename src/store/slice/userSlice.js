


import axios from 'axios';

// Async action to fetch user data
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  try {
    const response = await axios.get('/api/user');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Async action to update user data
export const updateUser = createAsyncThunk('user/updateUser', async (userData) => {
  try {
    const response = await axios.put('/api/user', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;





