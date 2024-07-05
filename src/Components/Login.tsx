import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import {
  BackEnd_SignIn,
  BackEnd_SignUp,
  getStorageUser,
} from "../Backend/Queries";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";
import { authDataType } from "../Types";
import { setUser } from "../Redux/userSlice";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);
  const usr = getStorageUser();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (usr?.id) {
      dispatch(setUser(usr));
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  }, []);

  const handleSignUp = () => {
    const data = { email, password, confirmPassword };
    // BackEnd_SignUp(data, setSignUpLoading, reset, navigate, dispatch);
    auth(data, BackEnd_SignUp, setSignUpLoading);
    // console.log(data);
  };

  const handleSignIn = () => {
    const data = { email, password };
    // BackEnd_SignIn(data, setSignInLoading, reset, navigate, dispatch);
    auth(data, BackEnd_SignIn, setSignInLoading);
  };

  const auth = (
    data: authDataType,
    func: any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    func(data, setLoading, reset, navigate, dispatch);
  };

  const reset = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="w-full md:w-[450px]">
      <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
        {login ? "Login" : "Register"}
      </h1>
      <div className="flex flex-col gap-3 bg-white p-6 min-h-[150px] rounded-xl drop-shadow-xl">
        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!login && (
          <Input
            name="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        {login ? (
          <>
            <Button
              text="Login"
              onClick={handleSignIn}
              loading={signInLoading}
            />
            <Button onClick={() => setLogin(false)} text="Register" secondary />
          </>
        ) : (
          <>
            <Button
              text="Register"
              onClick={handleSignUp}
              loading={signUpLoading}
            />
            <Button onClick={() => setLogin(true)} text="Login" secondary />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
