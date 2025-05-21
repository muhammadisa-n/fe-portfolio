import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  expire: number | null;
  userName: string | null;
  userRole: string | null;
}

const initialState: AuthState = {
  token: null,
  expire: null,
  userName: null,
  userRole: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.expire = action.payload.expire;
      state.userName = action.payload.userName;
      state.userRole = action.payload.userRole;
    },
    clearAuth: (state) => {
      state.token = null;
      state.expire = null;
      state.userName = null;
      state.userRole = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
