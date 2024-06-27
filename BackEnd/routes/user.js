const express = require("express");
const { handleSignup, handleSignin } = require("../controllers/user");
const {
  createUserValidator,
  signinValidator,
} = require("../middlewares/validators/userValidators");

const router = express.Router();

router.post("/signup", createUserValidator, handleSignup);
router.post("/signin", signinValidator, handleSignin);

module.exports = router;
