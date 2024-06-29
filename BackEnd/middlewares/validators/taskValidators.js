const { body, validationResult } = require("express-validator");

//check body data and return from here if any validator failed to validate
const createTaskValidator = [
  body("description", "Description must be at least 5 characters").isLength({
    min: 5,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array(), success: false });
    }
    next();
  },
];

module.exports = { createTaskValidator };
