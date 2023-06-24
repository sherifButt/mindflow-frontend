


import { api } from '../utils/api';

// Async action to fetch a mind map
export const fetchMindMap = createAsyncThunk(
  'mindmap/fetchMindMap',
  async (mindMapId) => {
    const response = await api.get(`/mindmaps/${mindMapId}`);
    return response.data;
  }
);

// Async action to create a new mind map
export const createMindMap = createAsyncThunk(
  'mindmap/createMindMap',
  async (mindMapData) => {
    const response = await api.post('/mindmaps', mindMapData);
    return response.data;
  }
);

const mindmapSlice = createSlice({
  name: 'mindmap',
  initialState: {
    mindMap: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMindMap.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMindMap.fulfilled, (state, action) => {
        state.loading = false;
        state.mindMap = action.payload;
      })
      .addCase(fetchMindMap.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createMindMap.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMindMap.fulfilled, (state, action) => {
        state.loading = false;
        state.mindMap = action.payload;
      })
      .addCase(createMindMap.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mindmapSlice.reducer;



