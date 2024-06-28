const express = require("express");
const {
  handleAddNewTask,
  handleCreateTasksTable,
} = require("../controllers/task");

const { authenticateUser } = require("../middlewares/tasksMiddleware/tasks");

const router = express.Router();

router.post("/addNewTask", authenticateUser, handleAddNewTask);

router.get("/createTasksTable", handleCreateTasksTable);

module.exports = router;
