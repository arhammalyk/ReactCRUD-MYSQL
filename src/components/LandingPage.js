import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionAddNewTask,
  actionDeleteTask,
  getUserTasks,
  isModal,
} from "../state";
import { useNavigate } from "react-router-dom";
import UserTasks from "./UserTasks";

function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionAddNewTask(task));
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
      <div className="mt-28 w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto">
        {!localStorage.getItem("token") ? (
          <div className="w-9/12 m-auto">
            <h1 className="text-white text-3xl">
              Manage tasks efficiently, it allow user to create assign and
              monitor tasks enhancing productivity and ensuring timely project
              completion.
            </h1>
            <hr className="my-4 w-full h-0.5 bg-gray-300" />
            <h2 className="text-white text-xl">Signup to add tasks</h2>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className=" bg-white text-[#1868db] px-3 py-2 rounded-3xl mt-4"
            >
              signup
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-x-2 mx-auto w-1/2">
              <h1 className="text-white text-3xl text-center">Add new task</h1>

              <input
                className="w-full pl-2 border border-[#1868db] rounded-3xl h-10 mt-2"
                id="description"
                name="description"
                value={task.description}
                onChange={onChange}
                type="text"
                required
                placeholder="type here"
              />
              <div>
                <button
                  type="submit"
                  className=" bg-white font-semibold text-[#1868db] px-3 py-2 rounded-3xl mt-4"
                >
                  Add task
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      {/* tasks fields */}
      {localStorage.getItem("token") && <UserTasks />}
    </>
  );
}

export default LandingPage;
