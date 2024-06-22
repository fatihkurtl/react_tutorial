import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
    user: string | null;
    isAuthenticated: boolean;
}

const initialState: IAuthState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            console.log(state);
            console.log(action);
            console.log(state.user);
            if (state.user !== null && state.isAuthenticated === true) {
                localStorage.setItem("token", state.user);
                localStorage.setItem("isAuthenticated", state.isAuthenticated.toString());                
            } else {
                console.log("Login failed");
            }
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
            localStorage.removeItem("isAuthenticated");
            location.href = "/login";
        },
    },
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;