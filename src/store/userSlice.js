import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage on app start
const storedUser = JSON.parse(localStorage.getItem("user")) || null;
const storedToken = localStorage.getItem("token") || null;

const initialState = storedUser
  ? { user: storedUser, token: storedToken }
  : { user: null, token: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("Redux user updated:", action.payload);

      const { user, token } = action.payload;

      // Save to Redux
      state.user = user;
      state.token = token;

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    },

    removeUser: (state) => {
      state.user = null;
      state.token = null;

      // Clear localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    updateuser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;

    }
  },
});

export const { addUser, removeUser ,updateuser} = userSlice.actions;
export default userSlice.reducer;
