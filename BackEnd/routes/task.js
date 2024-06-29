const express = require("express");
const {
  handleAddNewTask,
  handleCreateTasksTable,
  handleGetUserTasks,
  handleUpdateUserTask,
  handleDeleteUserTask,
} = require("../controllers/task");

const {
  createTaskValidator,
} = require("../middlewares/validators/taskValidators");

const { authenticateUser } = require("../middlewares/tasksMiddleware/tasks");

const router = express.Router();

// Add and save user new task POST "/task/addNewTask/". login required
router.post(
  "/addNewTask",
  createTaskValidator,
  authenticateUser,
  handleAddNewTask
);

// Get user all tasks using GET "/task/getUserTasks/". login required
router.get("/getUserTasks", authenticateUser, handleGetUserTasks);

// Update user existing task using PUT "/task/updateUserTask/:id". login required
router.put("/updateUserTask/:id", authenticateUser, handleUpdateUserTask);

// delete user existing tasks using PUT "/task//deleteUserTask/:id". login required
router.delete("/deleteUserTask/:id", authenticateUser, handleDeleteUserTask);

router.get("/createTasksTable", handleCreateTasksTable);

module.exports = router;
