import { showAlert } from "../alert/alertActions";
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
        dispatch(showAlert("Task added", "success", true));
        setTimeout(() => {
          dispatch(showAlert("", "", false));
        }, 4000);
        dispatch(getUserTasks());
      } else {
        dispatch(
          showAlert("Must contain atleast 5 characters", "failure", true)
        );
        setTimeout(() => {
          dispatch(showAlert("", "", false));
        }, 4000);
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
        dispatch(getUserTasks());
        dispatch(userTasks([]));
        dispatch(showAlert("Task deleted", "success", true));
        setTimeout(() => {
          dispatch(showAlert("", "", false));
        }, 4000);
      } else {
        dispatch(showAlert("internal server error", "failure", true));
        setTimeout(() => {
          dispatch(showAlert("", "", false));
        }, 4000);
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
        dispatch(showAlert("Task updated", "success", true));
        setTimeout(() => {
          dispatch(showAlert("", "", false));
        }, 4000);
        dispatch(getUserTasks());
      } else {
        dispatch(showAlert("internal server error", "failure", true));
        setTimeout(() => {
          dispatch(showAlert("", "", false));
        }, 4000);
      }
    } catch (error) {
      console.error(error);
    }
  };
};
