import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Action
// export const fetchJobs = createAsyncThunk("fetchJobs", async (_, thunkAPI) => {
//   // We don't need requestData here
//   const requestData = { limit: 947, offset: 0 }; // Constructing the request body
//   try {
//     const response = await fetch(
//       "https://api.weekday.technology/adhoc/getSampleJdJSON",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestData),
//       }
//     );

//     if (!response.ok) {
//       // If the response is not OK (e.g., status code 4xx or 5xx), throw an error
//       throw new Error("Failed to fetch jobs");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     // Return the rejected promise with the error message
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// const jobSlice = createSlice({
//   name: "job",
//   initialState: {
//     isLoading: false,
//     data: null,
//     isError: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchJobs.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchJobs.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchJobs.rejected, (state, action) => {
//       console.log("error fetching jobs", action.payload);
//       state.isError = true;
//     });
//   },
// });

// export default jobSlice.reducer;

// Redux slice
export const fetchJobs = createAsyncThunk(
    "fetchJobs",
    async ({ limit, offset }, thunkAPI) => {
      const requestData = { limit, offset }; // Constructing the request body
      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          }
        );
  
        if (!response.ok) {
          // If the response is not OK (e.g., status code 4xx or 5xx), throw an error
          throw new Error("Failed to fetch jobs");
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        // Return the rejected promise with the error message
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  const jobSlice = createSlice({
    name: "job",
    initialState: {
      isLoading: false,
      data: [],
      isError: false,
      totalCount: 0,
      pagination: {
        limit: 12,
        offset: 0,
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchJobs.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = [...state.data, ...action.payload.jdList]; // Append new data to existing data
        state.totalCount = action.payload.totalCount;
        // Increment offset for next pagination
        state.pagination.offset += state.pagination.limit;
      });
      builder.addCase(fetchJobs.rejected, (state, action) => {
        console.log("error fetching jobs", action.payload);
        state.isError = true;
      });
    },
  });
  
  export default jobSlice.reducer;
  
