


import axios from 'axios';

// Action types
export const fetchMindmap = createAsyncThunk(
  'mindmap/fetchMindmap',
  async (mindmapId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/mindmap/${mindmapId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createMindmap = createAsyncThunk(
  'mindmap/createMindmap',
  async (mindmapData, thunkAPI) => {
    try {
      const response = await axios.post('/api/mindmap', mindmapData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateMindmap = createAsyncThunk(
  'mindmap/updateMindmap',
  async ({ mindmapId, mindmapData }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/mindmap/${mindmapId}`, mindmapData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteMindmap = createAsyncThunk(
  'mindmap/deleteMindmap',
  async (mindmapId, thunkAPI) => {
    try {
      await axios.delete(`/api/mindmap/${mindmapId}`);
      return mindmapId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



