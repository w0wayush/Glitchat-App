import React from "react";
import Login from "../Components/Login";

const LoginPage = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center p-10">
      <Login />
      {/* Gradient nahi aara h bhai */}
      {/* bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] */}
      <div className="h-full w-full bg-gradient-to-r from-myBlue to-myPink opacity-70 absolute top-0 -z-10" />
      <div className="h-full w-full bg-pattern absolute top-0 -z-20 " />
    </div>
  );
};

export default LoginPage;
