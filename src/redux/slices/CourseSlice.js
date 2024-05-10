import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosIntances from "../../helpers/axiosinstance";

const initialState = {
  courseData: [],
};
export const getAllCourses = createAsyncThunk("/course/get", async () => {
  try {
    const res = axiosIntances.get("/courses");
    toast.promise(res, {
      loading: "loading course data... ",
      success: "course loadad successfully",
      error: "Failed to get course",
    });
    return (await res).data.courses;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const createNewCourse = createAsyncThunk(
  "/course/create",
  async (data) => {
    try {
      let formData = new FormData();
      formData.append("title", data?.title);
      formData.append("description", data?.description);
      formData.append("category", data?.category);
      formData.append("createdBy", data?.createdBy);
      formData.append("thumbnail", data?.thumbnail);

      const response = axiosIntances.post("/courses", formData);
      toast.promise(response, {
        loading: "Creating new course",
        success: "Course created successfully",
        error: "Failed to create course",
      });

      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if (action.payload) {
        state.courseData = [...action.payload];
      }
    });
  },
});

export default courseSlice.reducer;
