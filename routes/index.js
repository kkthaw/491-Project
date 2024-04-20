var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createuser', async function(req, res, next) {
  let createduser = await userModel.create({
    username: "john",
    password: "john",
    posts: [],
    email: "john@male.com",
    fullName: "John Doe",
  });
  res.send(createduser);
});

module.exports = router;
