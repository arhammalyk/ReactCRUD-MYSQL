const db = require("../../dataBase/connectDb");

//sign up middleware : if a user already exist with this email return from here no neend to call api
const isUserExist = async (req, res, next) => {
  const { email } = req.body;
  try {
    const checkUserQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkUserQuery, [email], async (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Internal server error", error: err.message });
      }

      if (results.length > 0) {
        return res.status(400).json({
          message: "user with this account already exists",
          success: false,
        });
      }
      next();
    });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

// signin middleware : if user not found with this email then no need to call ai return from here
const isExistsLogin = async (req, res, next) => {
  const { email } = req.body;
  try {
    const checkUserQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkUserQuery, [email], async (err, result) => {
      if (err) {
        return res.json({
          message: "internal server error",
          error: err.message,
        });
      }
      if (result.length == 0) {
        return res.status(400).json({
          message: "Sign in with corrrect credentials",
          success: false,
        });
      }

      req.user = result[0];
      next();
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
    console.error(error.message);
  }
};

module.exports = { isUserExist, isExistsLogin };
