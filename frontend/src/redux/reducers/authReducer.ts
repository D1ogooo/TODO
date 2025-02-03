import { createSlice } from "@reduxjs/toolkit";
import type { initialType } from "../../@types/types";

const initialState: initialType = {
	user: null,
	token: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
