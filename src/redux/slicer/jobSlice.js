import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
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

// Function to filter jobs based on selected filters
const filterJobs = (jobs, selectedFilters) => {
  return jobs.filter((job) => {
    // Check if each filter matches the job
    for (const filterKey in selectedFilters) {
      const filterValue = selectedFilters[filterKey];
      // Skip if filter value is null or empty array
      if (
        !filterValue ||
        (Array.isArray(filterValue) && filterValue.length === 0)
      ) {
        continue;
      }
      // Special handling for arrays (e.g., jobRole, location, techStack)
      if (Array.isArray(filterValue)) {
        if (!filterValue.includes(job[filterKey])) {
          return false; // Job does not match the filter
        }
      } else {
        // Special handling for location filter
        if (filterKey === "location") {
          // Check if inOffice filter is selected
          if (filterValue.includes("inOffice")) {
            // Show jobs in specific locations other than remote
            if (job["location"].toLowerCase() !== "remote") {
              return true;
            }
          } else {
            // Regular handling for location filter
            if (job[filterKey].toLowerCase() !== filterValue.toLowerCase()) {
              return false; // Job does not match the filter
            }
          }
        } else if (filterKey === "minJdSalary") {
          // Special handling for minJdSalary filter
          if (job[filterKey] < filterValue) {
            return false; // Job does not match the filter
          }
        } else {
          // Single value filter (e.g., minExp)
          if (job[filterKey] !== filterValue) {
            return false; // Job does not match the filter
          }
        }
      }
    }
    return true; // All filters match the job
  });
};

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
    selectedFilters: {}, // Object to store selected filters
  },
  reducers: {
    updateSelectedFilters(state, action) {
      const { filterKey, selectedValues } = action.payload;
      state.selectedFilters[filterKey] = selectedValues;
      // Filter jobs based on selected filters
      state.data = filterJobs(state.data, state.selectedFilters);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, ...action.payload.jdList];
      state.totalCount = action.payload.totalCount;
      state.pagination.offset += state.pagination.limit;
      // Filter jobs based on selected filters
      state.data = filterJobs(state.data, state.selectedFilters);
    });

    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.isLoading = false;
      console.log("error fetching jobs", action.payload);
      state.isError = true;
    });
  },
});

export const { updateSelectedFilters } = jobSlice.actions;
export default jobSlice.reducer;
