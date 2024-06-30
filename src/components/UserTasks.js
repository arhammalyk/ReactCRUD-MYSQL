import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTaskModal from "./modals/EditTaskModal";
import { actionDeleteTask, isModal } from "../state";

function UserTasks() {
  const userTasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const handleDelete = (e, taskId) => {
    e.preventDefault();
    dispatch(actionDeleteTask(taskId));
  };

  const handleUpdate = (e, taskId) => {
    e.preventDefault();
    dispatch(isModal(true));
    setCurrentTaskId(taskId);
  };

  return (
    <>
      <div className="mt-4 w-full">
        <div className="w-10/12 m-auto">
          {userTasks.length === 0 ? (
            <h1 className="text-white text-2xl mt-4 text-center">
              Currently you have no tasks
            </h1>
          ) : (
            userTasks.map((item) => (
              <div className="border border-white flex md:text-2xl" key={item?.id}>
                <div className="w-3/5 text-white">
                  <p>Description : {item?.description}</p>
                </div>
                <div className="w-2/5 flex justify-end">
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className=" bg-white text-[#1868db] px-3 py-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={(e) => handleUpdate(e, item.id)}
                    className=" bg-white text-[#1868db] px-3 py-2"
                  >
                    Update
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {currentTaskId && <EditTaskModal taskId={currentTaskId} />}
    </>
  );
}

export default UserTasks;
