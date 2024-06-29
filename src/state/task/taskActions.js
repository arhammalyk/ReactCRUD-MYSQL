import { USER_TASKS } from "./taskTypes";

//action to store user tasks
export const userTasks = (tasks) => {
  return {
    type: USER_TASKS,
    payload: tasks,
  };
};

//add user new task API call
export const actionAddNewTask = (task) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL}/task/addNewTask`,
        {
          method: "POST",
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: task.description,
          }),
        }
      );
      const responseData = await response.json();
      if (responseData.success === true) {
        alert(responseData.message);
        dispatch(getUserTasks());
      } else {
        alert("Must be at least 5 characters long");
      }
    } catch (error) {
      console.error(error);
    }
  };
};

//fetch user all tasks
export const getUserTasks = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL}/task/getUserTasks`,
        {
          method: "GET",
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      const responseData = await response.json(response);
      if (responseData.success === true) {
        dispatch(userTasks(responseData.result));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

// delete user api call
export const actionDeleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL}/task/deleteUserTask/${taskId}`,
        {
          method: "DELETE",
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      const responseData = await response.json();
      if (responseData.success === true) {
        alert("deleted successfully");
        dispatch(getUserTasks());
      }
    } catch (error) {
      console.error(error);
    }
  };
};

//update user task api call
export const actionUpdateTask = (task, taskId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL}/task/updateUserTask/${taskId}`,
        {
          method: "PUT",
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: task.updatedTask,
          }),
        }
      );
      const responseData = await response.json();
      if (responseData.success === true) {
        alert("updated successfully");
        dispatch(getUserTasks());
      }
    } catch (error) {
      console.error(error);
    }
  };
};
