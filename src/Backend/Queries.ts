import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { toast } from "react-toastify";

export const BackEnd_SignUp = (data: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const { email, password, confirmPassword } = data;

  if (email && password) {
    if (!confirmPassword) {
      toast.error("Please enter confirm password");
    } else if (password === confirmPassword) {
      //console.log({ email, password });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          console.log(userCred);
        })
        .catch((error) => console.log(error));
    } else toast.warn("Passwords must match");
  } else toast.error("Please fill all details");
};
