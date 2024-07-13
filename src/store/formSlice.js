import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  isSubmitting: true,
  isSubmitted: false,
  error: null,
  popform:false
};

// Create the async thunk for form submission
export const submitForm = createAsyncThunk(
  'form/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        // Log detailed error message
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      return true;
    } catch (error) {
      console.error('Catch block error:', error);
      return rejectWithValue(error.message);
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    resetFormState: (state) => {
      state.isSubmitting = false;
      state.isSubmitted = false;
      state.error = null;
      state.popform = false;
    },
    popForm:(state,action)=>{
      state.popform = action.payload
      console.log(state.popform);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.isSubmitting = true;
        state.isSubmitted = false;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.isSubmitting = false;
        state.isSubmitted = true;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.isSubmitting = false;
        state.isSubmitted = false;
        state.error = action.payload;
      });
  },
});

export const { resetFormState, popForm } = formSlice.actions;

export default formSlice.reducer;
