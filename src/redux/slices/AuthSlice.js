import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    isLoggedIn: localStorage.getItem("isLoggedIn") ||false,
    role: localStorage.getItem("role") || "",
    data:localStorage.getItem("data") || {}
}

const authSlices = createSlice({
    name:"auth",
    initialstate,
    reducers:{},
});

export const {} = authSlices.actions;
export default authSlices.reducer;