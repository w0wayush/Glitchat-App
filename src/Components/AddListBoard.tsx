import React from "react";
import Button from "./Button";
import { MdAdd } from "react-icons/md";
import Icon from "./Icon";

const AddListBoard = () => {
  return (
    <>
      <Button text="Add New ListBoard" secondary className="hidden md:flex " />
      <Icon IconName={MdAdd} className="block md:hidden" />
    </>
  );
};

export default AddListBoard;
