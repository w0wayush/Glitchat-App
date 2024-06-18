import React, { useState } from "react";
import Button from "./Button";
import { MdAdd } from "react-icons/md";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { BE_addTaskList } from "../Backend/Queries";
import { AppDispatch } from "../Redux/store";

const AddListBoard = () => {
  const [addLoading, setAddLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTaskList = () => {
    BE_addTaskList(dispatch, setAddLoading);
  };

  return (
    <>
      <Button
        text="Add New ListBoard"
        secondary
        className="hidden md:flex "
        onClick={handleAddTaskList}
        loading={addLoading}
      />
      <Icon
        IconName={MdAdd}
        className="block md:hidden"
        onClick={handleAddTaskList}
        loading={addLoading}
        reduceOpacityOnHover={false}
      />
    </>
  );
};

export default AddListBoard;
