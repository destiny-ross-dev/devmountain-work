const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  console.log("registerUser");
  const db = req.app.get("db");
  const { username, password } = req.body;

  try {
    let hashPass = await bcrypt.hash(password, 10);
    try {
      console.log(username, password);
      let user = await db.auth.register_user(username, hashPass);
      console.log(user[0]);
      req.session.userid = user[0].user_id;

      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
  console.log("session:", req.session);
};

const loginUser = async (req, res) => {
  console.log("logginUser");
  const db = req.app.get("db");
  const { username, password } = req.body;

  try {
    let user = await db.auth.login_user(username);
    console.log(user[0]);
    try {
      let valid = await bcrypt.compare(password, user[0].password);
      if (valid) {
        delete user[0].password;
        req.session.userid = user[0].user_id;
        res.status(200).json(user[0]);
      } else {
        res.status(401).json("Login attempt failed. Please try again.");
      }
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

const checkForLogin = async (req, res) => {
  console.log("checklogin with session", req.session);

  if (req.session.userid) {
    try {
      let userObj = await db.login_user_with_session(req.session.userid);
      res.status(200).json(userObj);
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(400).json("No session object");
  }
};

const logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/");
  });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  checkForLogin
};
