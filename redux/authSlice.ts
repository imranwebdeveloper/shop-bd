import { User } from "@/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Auth {
  access_token: string | null;
  user: User | null;
}

const initialState: Auth = {
  user: null,
  access_token: null,
};

export const authSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Auth>) => {
      state.access_token = action.payload.access_token;
      state.user = action.payload.user;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
