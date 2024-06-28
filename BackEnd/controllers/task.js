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

module.exports = { handleAddNewTask, handleCreateTasksTable };
