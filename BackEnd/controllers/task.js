const db = require("../dataBase/connectDb");

const handleAddNewTask = (req, res) => {
  try {
    const { description } = req.body;
    const userId = req.user.id;
    console.log(description, userId);
    const insertTaskQuery =
      "INSERT INTO tasks (description, user_id ) VALUES (?, ?);";
    db.query(insertTaskQuery, [description, userId], (err, result) => {
      if (err) {
        return res.json({ message: err.message, success: false });
      }
      return res.json({ message: "task added successfully", success: true });
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};

const handleGetUserTasks = (req, res) => {
  try {
    const userId = req.user.id;
    const getUserAllTasksQuery = `SELECT description FROM tasks WHERE user_id = ?`;
    db.query(getUserAllTasksQuery, [userId], (err, result) => {
      if (err) {
        return res.json({ message: err.message, success: false });
      }
      if (result.length === 0) {
        return res
          .status(404)
          .json({ message: "No tasks found for this user", success: false });
      }
      return res.json({ result, success: true });
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};

const handleCreateTasksTable = (req, res) => {
  try {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
    )`;
    db.query(createTableQuery, async (err, result) => {
      if (err) {
        return res.json({ message: err.message, success: false });
      }
      return res.json({
        message: "tasks table created successfully",
        success: true,
      });
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};

const handleUpdateUserTask = (req, res) => {
  try {
    const userId = req.user.id;
    const { description } = req.body;
    const taskId = req.params.id;

    // Check if the task with this ID exists
    const findTaskQuery = `SELECT * FROM tasks WHERE id=? AND user_id=?`;
    db.query(findTaskQuery, [taskId, userId], (err, result) => {
      if (err) {
        return res.json({ message: err.message, success: false });
      }
      if (result.length === 0) {
        return res.json({ message: "No task found", success: false });
      }

      // Update the task if found
      const updateTaskQuery = `UPDATE tasks SET description = ? WHERE id=? AND user_id=?`;
      db.query(
        updateTaskQuery,
        [description, taskId, userId],
        (err, result) => {
          if (err) {
            return res.json({ message: err.message, success: false });
          }
          return res.json({
            message: "Task updated successfully",
            success: true,
          });
        }
      );
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const handleDeleteUserTask = (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.user.id;

    // Check if the task with this ID exists
    const findTaskQuery = `SELECT * FROM tasks WHERE user_id=? AND id=?`;
    db.query(findTaskQuery, [userId, taskId], (err, result) => {
      if (err) {
        return res.json({ message: err.message, success: false });
      }
      if (result.length === 0) {
        return res.json({ message: "No task found", success: false });
      }
      // Update the task if found
      const deleteTaskQuery = `DELETE FROM tasks WHERE user_id=? AND id=?`;
      db.query(deleteTaskQuery, [userId, taskId], (err, result) => {
        if (err) {
          return res.json({ message: err.message, success: false });
        }
        return res.json({
          message: "Task deleted successfully",
          success: true,
        });
      });
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
  handleAddNewTask,
  handleCreateTasksTable,
  handleGetUserTasks,
  handleUpdateUserTask,
  handleDeleteUserTask,
};
