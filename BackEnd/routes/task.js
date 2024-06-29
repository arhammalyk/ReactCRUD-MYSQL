const express = require("express");
const {
  handleAddNewTask,
  handleCreateTasksTable,
  handleGetUserTasks,
  handleUpdateUserTask,
  handleDeleteUserTask,
} = require("../controllers/task");

const { authenticateUser } = require("../middlewares/tasksMiddleware/tasks");

const router = express.Router();

router.post("/addNewTask", authenticateUser, handleAddNewTask);

router.get("/getUserTasks", authenticateUser, handleGetUserTasks);

router.get("/updateUserTask/:id", authenticateUser, handleUpdateUserTask);

router.delete("/deleteUserTask/:id", authenticateUser, handleDeleteUserTask);

router.get("/createTasksTable", handleCreateTasksTable);

module.exports = router;
