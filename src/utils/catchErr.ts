import { toastErr, toastInfo } from "./toast";

const CatchErr = (err: { code?: string }) => {
  const { code } = err;
  if (code === "auth/invalid-email") toastErr("Invalid Email");
  else if (code === "auth/weak-password")
    toastErr("Password should be atleast 6 characters");
  else if (code === "auth/user-not-found") toastErr("User not found");
  else if (code === "auth/email-already-in-use")
    toastErr("Email already exists");
  else if (code === "auth/wrong-password") toastErr("Wrong Password");
  else if (code === "auth/requires-recent-login")
    toastInfo("Logout and Login before updating profile");
  else toastErr("Error Occured");
  console.log(err);
};

export default CatchErr;
