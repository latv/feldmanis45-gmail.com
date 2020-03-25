var jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  // console.log("tokens, ",req.body.x-access-token)
  // console.log(jwt.decode(req.body.x-access-token, config.secret))
  let token = req.headers["x-access-token"];
  token = jwt.decode(token, config.secret);
  User.findOne({ where: { id: token.id } }).then(result => {
    let tokenUserName = result.username;
    console.log(result.username)
    // token= JSON.parse(token);

    console.log(tokenUserName);
    console.log("Token , ", token.id);

    // token2  = JSON.stringify( token['id'] );
    res.status(200).send({ username: tokenUserName }
      // username: jwt.decode(req.body.x-access-token, config.secret)
    );
  });
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.profile = (req, res) => {
  res.status(200).send({ username: jwt.decode(token, config.secret) });
};