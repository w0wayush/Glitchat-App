import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";
import { toastErr, toastWarn } from "../utils/toast";
import CatchErr from "../utils/catchErr";
import { authDataType, setLoadingType } from "../Types";
import { NavigateFunction } from "react-router-dom";

export const BackEnd_SignUp = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void,
  goTo: NavigateFunction
) => {
  const { email, password, confirmPassword } = data;

  setLoading(true);
  if (email && password) {
    if (!confirmPassword) {
      toastErr("Please enter confirm password");
    } else if (password === confirmPassword) {
      //console.log({ email, password });
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
          setLoading(false);
          reset();
          goTo("/dashboard");
        })
        .catch((error) => {
          CatchErr(error);
          setLoading(false);
        });
    } else toastWarn("Passwords must match");
  } else toastErr("Please fill all details");
};

export const BackEnd_SignIn = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void,
  goTo: NavigateFunction
) => {
  setLoading(true);
  const { email, password } = data;

  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
      setLoading(false);
      reset();
      goTo("/dashboard");
    })
    .catch((error) => {
      CatchErr(error);
      setLoading(false);
    });
};
