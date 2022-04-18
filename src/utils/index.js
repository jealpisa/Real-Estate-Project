const jwt = require("jsonwebtoken");

const UserModel = require("../models/users.model");

function checkUser(req, res, next) {
  if (!req.headers.token) {
    res.status(403).json({ error: "No Token found" });
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      if (err) {
        res.status(403).json({ error: "Token not valid" });
      }

      UserModel.findOne(
        { email: token.email },
        { password: 0, __v: 0, createdAt: 0 }
      )
        .then((user) => {
          res.locals.user = user;
          next();
        });
    });
  }
}

function checkAdmin(req, res, next) {
  if (res.locals.user.role === "admin") {
    return next();
  }
  return res.send("Unauthorized access");
}

function checkRole(req, res, next) {
  if (
    res.locals.user.role === "admin" ||
    res.locals.user.role === "agent" 
  ) {
    return next();
  }
  return res.send("Unauthorized access");
}

function checkAgent(req, res, next) {
  if (res.locals.user.role === "admin" || res.locals.user.role === "agent") {
    return next();
  }
  return res.send("Unauthorized access");
}

module.exports = {
  checkUser,
  checkAdmin,
  checkAgent,
  checkRole
};