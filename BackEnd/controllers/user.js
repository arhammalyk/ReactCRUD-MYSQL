const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const handleSignup = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    // const salt = await bcrypt.genSaltSync(10);
    // const hash = await bcrypt.hashSync(password, salt);

    return res.json({ message: "signup" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};
const handleSignin = (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, "backend");
    return res.send("signin");
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};

module.exports = { handleSignup, handleSignin };
