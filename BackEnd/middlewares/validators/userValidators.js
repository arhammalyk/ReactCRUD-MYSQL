const { body, validationResult } = require("express-validator");

const createUserValidator = [
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password must be at least 5 characters strong").isLength({
    min: 5,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), success: false });
    }
    next();
  },
];

const signinValidator = [
  body("email", "Enter a valid email").isEmail(),
  body("password", "passowrd must contains at least 5 characters").isLength({
    min: 5,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), success: false });
    }
    next();
  },
];

module.exports = { createUserValidator, signinValidator };
