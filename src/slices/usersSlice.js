import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  isSucces: false,
  hasError: "",
};

const usersSlice = createSlice({
  name: "usersSlce",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isLoading = true;
    },
    setUsersSucces: (state, { payload }) => {
      state.users = payload;
      state.isLoading = false;
      state.isSucces = true;
      state.hasError = "";
    },

    setUsersFail: (state, { payload }) => {
      state.hasError = payload;
      state.isLoading = false;
      state.isSucces = false;
    },
  },
});

export const { getUsers, setUsersSucces, setUsersFail } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

// -------------------- THUNK FUNCTION ---------------------

export const userFetch = () => async (dispatch, getState) => {
  dispatch(getUsers);
  try {
    //sleep(1000);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    console.log(`${baseUrl}/users`);

    const res = await fetch(`${baseUrl}/users`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const users = await res.json();

    console.log(users);
    dispatch(setUsersSucces(users));
  } catch (error) {
    dispatch(setUsersFail(error.message));
  }
};

const sleep = (ms) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms || 1000);
  });
};
