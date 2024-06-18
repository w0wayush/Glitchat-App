import React from "react";
import Icon from "./Icon";
import { MdDelete, MdEdit } from "react-icons/md";

type Props = {};

const Task = (props: Props) => {
  return (
    <div className="p-2 mb-2 bg-white rounded-md drop-shadow-sm hover:drop-shadow-md">
      <div>
        <p className="cursor-pointer">Task Title Here</p>
      </div>
      <div>
        <hr />
        <div>
          <p>Some Description Here</p>
          <div className="flex justify-end">
            <Icon IconName={MdEdit} />
            <Icon IconName={MdDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
