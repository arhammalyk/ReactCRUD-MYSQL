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

// create a user using POST "/user/signup/".
router.post("/signup", isUserExist, createUserValidator, handleSignup);

// signin a user using POST "/user/signin/".
router.post("/signin", isExistsLogin, signinValidator, handleSignin);

router.post("/createUsersTable", handleCreateTable);

module.exports = router;
