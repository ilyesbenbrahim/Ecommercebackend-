const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ error: "Access denied. Token is required." });
  }
  const token = authHeader.split(" ")[1];
  try {
    jwt.verify(token, process.env.SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token." });
  }
};
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    register(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;