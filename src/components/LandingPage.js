import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAddNewTask } from "../state";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const isSignin = useSelector((state) => state.isSignin.value);
  console.log(isSignin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    descripton: "",
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
  return (
    <>
      <div className="mt-20">
        {!isSignin ? (
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
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="newTask">Add task</label>
              <input
                id="descripton"
                name="descripton"
                value={task.descripton}
                onChange={onChange}
                type="text"
                required
              />
              <button type="submit" className="p-2 bg-black text-white">
                Add task
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default LandingPage;
