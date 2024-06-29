import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionAddNewTask,
  actionDeleteTask,
  getUserTasks,
  isModal,
} from "../state";
import { useNavigate } from "react-router-dom";
import EditTaskModal from "./modals/EditTaskModal";

function LandingPage() {
  const userTasks = useSelector((state) => state.tasks.tasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    description: "",
  });
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionAddNewTask(task));
  };
  const handleDelete = (e, taskId) => {
    e.preventDefault();
    dispatch(actionDeleteTask(taskId));
  };
  const handleUpdate = (e, taskId) => {
    dispatch(isModal(true));
    setCurrentTaskId(taskId);
  };
  const onChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getUserTasks());
  }, []);
  return (
    <>
      <div className="mt-20">
        {!localStorage.getItem("token") ? (
          <div>
            <h1>Signup to add tasks</h1>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="bg-black text-white p-2"
            >
              signup
            </button>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="newTask">Add task</label>
                <input
                  id="description"
                  name="description"
                  value={task.description}
                  onChange={onChange}
                  type="text"
                  required
                />
                <button type="submit" className="p-2 bg-black text-white">
                  Add task
                </button>
              </div>
            </form>
            <div>
              {userTasks?.map((item) => (
                <div className="border border-black" key={item?.id}>
                  <h1>{item?.description}</h1>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="p-2 bg-black text-white"
                  >
                    Delete
                  </button>
                  <button
                    onClick={(e) => {
                      handleUpdate(e, item.id);
                    }}
                    className="p-2 bg-black text-white"
                  >
                    update
                  </button>
                  <EditTaskModal taskId={currentTaskId} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LandingPage;
