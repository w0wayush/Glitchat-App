import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../Types";

export const userStorageName = "chat_user";

export const defaultUser: userType = {
  id: "",
  username: "",
  email: "",
  isOnline: false,
  img: "",
  creationTime: "",
  lastSeen: "",
  bio: "",
};

/* 
const initialUserData = localStorage.getItem(userStorageName);
export const defaultUser: userType = initialUserData
  ? JSON.parse(initialUserData)
  : {
      id: "",
      username: "",
      email: "",
      isOnline: false,
      img: "",
      creationTime: "",
      lastSeen: "",
      bio: "",
    };
*/

const initialState = {
  // user: [],
  currentUser: defaultUser,
  // currentSelectedUser: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userType>) => {
      const user = action.payload;
      localStorage.setItem(userStorageName, JSON.stringify(user));
      //set logged in user
      state.currentUser = user;
    },
    setUsers: (state, action: PayloadAction<userType>) => {
      //set all users
    },
  },
});

export const { setUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
