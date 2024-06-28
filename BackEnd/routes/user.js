const express = require("express");

const {
  handleSignup,
  handleSignin,
  handleCreateTable,
} = require("../controllers/user");

const {
  isUserExist,
  isExistsLogin,
} = require("../middlewares/userMiddleware/user");

const {
  createUserValidator,
  signinValidator,
} = require("../middlewares/validators/userValidators");

const router = express.Router();

router.post("/signup", isUserExist, createUserValidator, handleSignup);
router.post("/signin", isExistsLogin, signinValidator, handleSignin);

router.post("/createUsersTable", handleCreateTable);

module.exports = router;
