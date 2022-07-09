require('../db/mongoose');
const express = require('express');
const path = require("path");
const app = express();
const hbs = require("hbs");
var bodyParser = require('body-parser');

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

const Users = require('../models/users');

app.use(express.static(publicDirPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//CRUD operation for user table
app.get('/api/users', function (req, res) {
  Users.find().then(function (users) {
    res.status(200).send(users);
  }).catch(function (error) {
    res.status(500).send("internal server error");
  })

})

app.post('/api/users', function (req, res) {
  console.log("request.body", req.body)
  var users = new Users(req.body)
  users.save().then(function (user) {
    res.status(201).send('Users saved succesfully');
  }).catch(function (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  })
})

app.put('/api/users/:id', function (req, res) {
  console.log("request param", req.params.id);
  console.log("request body", req.body);
  Users.findByIdAndUpdate(req.params.id, req.boby).then(function(user) {
    res.status(201).send('Users updated Sucessfully');
  }).catch(function(error) {
    res.status(500).send('internal server error');
  })
})

app.delete('/api/users/:id', function (req, res) {
  Users.findByIdAndDelete(req.params.id).then(function(user){
    res.status(200).send(' Users Deleted sucessfully');
  }).catch(function(error){
    res.status(500).send('internal server error');
  })
})

app.get('/users/add', function (req, res) {
  res.render('addUser');
})


app.get('/users', function (req, res) {
  res.render('users');
})

app.get('/tasks/add', function (req, res) {
  res.render('addTask');
})

app.get('/tasks', function (req, res) {
  res.render('tasks');
})

app.get('/reg', function (req, res) {
  res.render('reg')
})

app.get('/', function (req, res) {
  res.render('Login')
})

app.listen(3000, function () {
  console.log("The is up on 3000 port");
})