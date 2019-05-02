const express = require("express");
const router = express.Router();

const {
  registerUser,
  checkForLogin,
  loginUser
} = require(`${__dirname}/../controllers/authController`);

router.post("/register", registerUser);
router.get("/me", checkForLogin);
router.post("/login", loginUser);

module.exports = router;
