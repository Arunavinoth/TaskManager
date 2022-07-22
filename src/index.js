require("./db/mongoose");
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");

const routes = require("./routes");

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.use(express.static(publicDirPath));
app.set("view engine", "hbs");
// app.engine('hbs', hbs({helpers: require("../public/js/helper.js")}));
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/reg', function (req, res) {
  res.render('reg')
})

app.get('/', function (req, res) {
  res.render('Login')
})

routes.apiRoutes(app);



app.listen(4000, function () {
  console.log("The is up on 4000 port");
})