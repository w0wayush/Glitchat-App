import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "./Firebase";
import { toastErr, toastWarn } from "../utils/toast";
import CatchErr from "../utils/catchErr";
import { authDataType, setLoadingType, userType } from "../Types";
import { NavigateFunction } from "react-router-dom";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { defaultUser, setUser, userStorageName } from "../Redux/userSlice";
import { AppDispatch } from "../Redux/store";
import ConvertTime from "../utils/ConvertTime";
import AvatarGenerator from "../utils/avatarGenerator";

//collection names
const usersColl = "users";
const tasksColl = "tasks";
const taskListColl = "taskList";
const chatsColl = "chats";
const messagesColl = "messages";

export const BackEnd_SignUp = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void,
  navigate: NavigateFunction,
  dispatch: AppDispatch
) => {
  const { email, password, confirmPassword } = data;

  setLoading(true);

  if (email && password) {
    if (!confirmPassword) {
      toastErr("Please enter confirm password");
    } else if (password === confirmPassword) {
      //console.log({ email, password });
      createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          const imgLink = AvatarGenerator(user.email?.split("@")[0]);

          //get the user info
          const userInfo = await addUserToCollection(
            user.uid,
            user.email || "",
            user.email?.split("@")[0] || "",
            imgLink
          );

          //set the user info in store and local storage
          dispatch(setUser(userInfo));

          console.log(user);
          setLoading(false);
          reset();
          navigate("/dashboard");
        })
        .catch((error) => {
          CatchErr(error);
          setLoading(false);
        });
    } else toastErr("Passwords must match", setLoading);
  } else toastErr("Please fill all details", setLoading);
};

export const BackEnd_SignIn = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void,
  navigate: NavigateFunction,
  dispatch: AppDispatch
) => {
  setLoading(true);
  const { email, password } = data;

  signInWithEmailAndPassword(auth, email, password)
    .then(async ({ user }) => {
      //update users isOnline to true
      await updateUserInfo({ id: user.uid, isOnline: true });

      //get user info
      const userInfo = await getUserInfo(user.uid);

      //set the user in store and local storage
      dispatch(setUser(userInfo));
      // localStorage.setItem(userStorageName, JSON.stringify(userInfo));

      setLoading(false);
      reset();
      navigate("/dashboard");
    })
    .catch((error) => {
      CatchErr(error);
      setLoading(false);
    });
};

export const BackEnd_SignOut = (
  dispatch: AppDispatch,
  navigate: NavigateFunction,
  setLogoutLoading: setLoadingType
) => {
  //logout in firebase
  setLogoutLoading(true);
  signOut(auth)
    .then(async () => {
      navigate("/auth");

      await updateUserInfo({ isOffline: true });

      //set currentUser to empty user
      dispatch(setUser(defaultUser));

      //remove from localStorage
      localStorage.removeItem(userStorageName);
      setLogoutLoading(false);
    })
    .catch((err) => CatchErr(err));
};

// get user from local storage
export const getStorageUser = () => {
  const usr = localStorage.getItem(userStorageName);
  if (usr) return JSON.parse(usr);
  else return "";
};

const addUserToCollection = async (
  id: string,
  email: string,
  username: string,
  img: string
) => {
  //create user with userId
  await setDoc(doc(db, usersColl, id), {
    isOnline: true,
    img,
    username,
    email,
    creationTime: serverTimestamp(),
    lastSeen: serverTimestamp(),
    bio: `Hi! my name is ${username}, connect with me...`,
  });

  //find the data and return the user info
  return getUserInfo(id);
};

const getUserInfo = async (id: string): Promise<userType> => {
  //get user wih userId
  const userRef = doc(db, usersColl, id);
  const user = await getDoc(userRef);

  if (user.exists()) {
    const { img, isOnline, username, email, creationTime, lastSeen, bio } =
      user.data();

    //return user infor from users data
    return {
      id: user.id,
      img,
      isOnline,
      username,
      email,
      creationTime: creationTime
        ? ConvertTime(creationTime.toDate())
        : "no date yet : userinfo",
      lastSeen: lastSeen
        ? ConvertTime(lastSeen.toDate())
        : "no date yet : userinfo",
      bio,
    };
  } else {
    toastErr("getUserInfo: user not found");
    //return default user info
    return defaultUser;
  }
};

//update user info
const updateUserInfo = async ({
  id,
  username,
  img,
  isOnline,
  isOffline,
}: {
  id?: string;
  username?: string;
  img?: string;
  isOnline?: boolean;
  isOffline?: boolean;
}) => {
  if (!id) {
    id = getStorageUser().id;
  }

  if (id) {
    await updateDoc(doc(db, usersColl, id), {
      ...(username && { username }),
      ...(img && { img }),
      ...(isOnline && { isOnline }),
      ...(isOffline && { isOnline: false }),
      lastSeen: serverTimestamp(),
    });
  }
};
