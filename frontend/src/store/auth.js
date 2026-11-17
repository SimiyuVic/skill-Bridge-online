import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",

    initialState: {
        isLoggedIn: false, //Checks whether someone is logged in.
        user: null, //Stores the actual user's information.
        isInitialized: false //Checks whether the initial authentication check has completed.
    },

    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload; //Whenever you dispatch an action and pass information to it, that information becomes the payload.
            state.isInitialized = true;
        }, 

        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.isInitialized = true;
        },

        setInitialized: (state) => {
            state.isInitialized = true;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;