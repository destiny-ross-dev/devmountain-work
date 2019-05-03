const express = require("express");
const router = express.Router();

const {
  registerUser,
  checkForLogin,
  loginUser,
  logoutUser
} = require(`${__dirname}/../controllers/authController`);

router.post("/register", registerUser);
router.get("/me", checkForLogin);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;
