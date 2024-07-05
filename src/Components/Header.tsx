import React, { useEffect, useState } from "react";
import { BsFillChatFill } from "react-icons/bs";
import { FiList } from "react-icons/fi";
import AddListBoard from "./AddListBoard";
import Icon from "./Icon";
import UserHeaderProfile from "./UserHeaderProfile";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { useNavigate } from "react-router-dom";
import { BackEnd_SignOut } from "../Backend/Queries";
import Spinner from "./Spinner";

const logo = require("../assets/logo2.png");
type Props = {};

const Header = (props: Props) => {
  const [logoutLoading, setLogoutLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  // console.log("Current User - ", currentUser);

  useEffect(() => {
    if (!currentUser?.id) {
      navigate("/auth");
    }
  }, [navigate, currentUser]);

  const handleGoToPage = (page: string) => {
    navigate("/dashboard/" + page);
    if (page) setCurrentPage(page);
    else setCurrentPage("list");
  };

  const handleSignOut = () => {
    BackEnd_SignOut(dispatch, navigate, setLogoutLoading);
  };

  const setCurrentPage = (page: string) => {
    localStorage.setItem("current-page", page);
  };

  const getCurrentPage = () => {
    return localStorage.getItem("current-page");
  };

  return (
    <div
      className="flex flex-wrap sm:flex-row gap-5 items-center justify-between 
drop-shadow-md bg-gradient-to-r from-myBlue to-myPink px-5 py-5 md:py-2 text-white"
    >
      <img
        className="w-[70px] drop-shadow-md cursor-pointer"
        src={logo}
        alt="logo"
      />
      <div className="flex flex-row-reverse md:flex-row items-center justify-center gap-5 flex-wrap">
        {getCurrentPage() === "chat" ? (
          <Icon
            IconName={FiList}
            onClick={() => handleGoToPage("")}
            reduceOpacityOnHover={false}
          />
        ) : getCurrentPage() === "profile" ? (
          <div className="flex gap-3">
            <Icon
              IconName={FiList}
              onClick={() => handleGoToPage("")}
              reduceOpacityOnHover={false}
            />
            <Icon
              IconName={BsFillChatFill}
              ping={true}
              onClick={() => handleGoToPage("chat")}
              reduceOpacityOnHover={false}
            />
          </div>
        ) : (
          <div className="flex gap-3">
            <AddListBoard />
            <Icon
              IconName={BsFillChatFill}
              ping={true}
              onClick={() => handleGoToPage("chat")}
              reduceOpacityOnHover={false}
            />
          </div>
        )}

        <div className="group relative">
          <UserHeaderProfile user={currentUser} />
          <div className="absolute pt-6 hidden group-hover:block w-full min-w-max">
            <ul className="w-full  bg-white overflow-hidden cursor-pointer rounded-md shadow-md  text-gray-700 pt-1">
              <p
                onClick={() => handleGoToPage("profile")}
                className="hover:bg-gray-200 py-2 px-4 block"
              >
                Profile
              </p>
              <p
                onClick={() => !logoutLoading && handleSignOut()}
                // to="/auth"
                className="hover:bg-gray-200 py-2 px-4 fleax items-center gap-4"
              >
                Logout
                {logoutLoading && <Spinner />}
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
