import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BE_getChats, BE_signOut, getStorageUser } from "../../Backend/Queries";
import UserHeaderProfile from "../UserHeaderProfile";
import Spinner from "../Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
const logo = require("../../Assets/Vector3.png");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [logoutLoading, setLogoutLoading] = useState(false);
  const navbarContent = [
    { name: "Features", id: "#features" },
    { name: "Customers", id: "#" },
    { name: "Pricing", id: "#" },
  ];
  const dispatch = useDispatch();
  const user = getStorageUser();
  const [currPage, setCurrPage] = useState("");

  // console.log("user", user);

  const getCurrentPage = () => {
    const page = localStorage.getItem("superhero-page");
    return page !== null ? page : "";
  };

  useEffect(() => {
    localStorage.setItem("superhero-page", "home");

    const curr = getCurrentPage();
    setCurrPage(curr);
  }, []);

  const handleGoToPage = (page: string) => {
    navigate("/dashboard/" + page);
    setCurrentPage(page);
  };

  const handleSignOut = async () => {
    BE_signOut(dispatch, navigate, setLogoutLoading);
  };

  const setCurrentPage = (page: string) => {
    localStorage.setItem("superhero-page", page);
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      {/* Navbar content */}
      <div className="relative h-14 max-w-[90rem] mx-auto px-4 md:px-6">
        <div className="h-full bg-black/80 backdrop-blur-md rounded-2xl border-2 border-pink-300/20 px-6 shadow-lg">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="logo" className="h-8 w-8" />
              <span className="font-bold text-lg tracking-wider text-white">
                GLITCH
              </span>
            </a>

            {/* Primary Navigation for larger screens */}
            <nav className="hidden md:flex items-center gap-8">
              {navbarContent.map((item, index) => (
                <a
                  key={index}
                  href={item.id}
                  className="text-sm text-white hover:text-pink-300 hover:font-normal transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Auth buttons for larger screens */}
            {!user ? (
              <div className="hidden md:flex items-center gap-4">
                <Link to={"/auth"}>
                  <button className="text-sm font-medium text-white hover:text-pink-300 transition-colors duration-200">
                    Log in
                  </button>
                </Link>
                <Link to={"/auth"}>
                  <button className="text-sm px-5 py-2 rounded-xl bg-white/20 hover:bg-gray-800 text-white transition-all duration-200 shadow-lg shadow-black/10 hover:shadow-black/20">
                    Sign up
                  </button>
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4">
                <div onClick={() => handleGoToPage("chat")}>
                  <button className="text-sm px-5 py-2 flex gap-2 rounded-xl bg-white/20 hover:bg-pink-400/80 text-white transition-all duration-200 shadow-lg shadow-black/10 hover:shadow-black/20">
                    Dashboard
                    <div>
                      <svg
                        className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="group relative">
                  <UserHeaderProfile user={user} page={currPage} />
                  <div className="absolute pt-5 hidden group-hover:block w-full min-w-max">
                    <ul className="w-full bg-white overflow-hidden rounded-md shadow-md text-gray-700 pt-1">
                      <p
                        onClick={() => handleGoToPage("profile")}
                        className="hover:bg-gray-200 py-2 px-4 block cursor-pointer"
                      >
                        Profile
                      </p>
                      <button
                        onClick={() => !logoutLoading && handleSignOut()}
                        className={`hover:bg-gray-200 w-full py-2 px-4 cursor-pointer flex items-center gap-4`}
                      >
                        Logout
                        {logoutLoading && <Spinner />}
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Hamburger Icon for mobile screens */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-black/90 rounded-b-2xl shadow-lg border-t border-white/10 mt-2 p-4 w-48 justify-self-end mr-5">
            <nav className="flex flex-col gap-4">
              {["Features", "Customers", "Pricing"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm flex justify-center text-white hover:text-pink-500 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <button className="text-sm text-white hover:text-pink-500 transition-colors duration-200">
                Log in
              </button>
              <button className="text-sm text-white hover:text-pink-500 transition-colors duration-200">
                Sign up
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
