const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../dataBase/connectDb");

const handleSignup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const addUserQuery = "INSERT INTO users (email, password) VALUES (?, ?)";
    db.query(addUserQuery, [email, hash], (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Internal server error", error: err.message });
      }
      return res.json({ success: true });
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const handleSignin = async (req, res) => {
  try {
    const { password } = req.body;
    const passwordcompare = await bcrypt.compare(password, req.user.password);
    if (!passwordcompare) {
      return res.status(400).json({
        message: "Please try to login with correct Credentials",
        success: false,
      });
    }
    const tokenData = {
      user: {
        id: req.user.id,
        email: req.user.email,
      },
    };
    const options = {
      expiresIn: "2h",
    };
    //generating a token
    const authJwtToken = jwt.sign(tokenData, process.env.JWT_SECRET, options);
    return res.json({ success: true, authJwtToken });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};

const handleCreateTable = (req, res) => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );
    `;

    db.query(createTableQuery, (err, results) => {
      if (err) {
        return res.json({ error: err.message, success: false });
      }
      return res.json({
        message: "users table created successfully",
        success: true,
      });
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};

module.exports = { handleSignup, handleSignin, handleCreateTable };
