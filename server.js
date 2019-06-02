const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const uuidv4 = require("uuid/v4");
const knex = require("knex");
const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");
const { config } = require("./config");

const db = knex({
  client: config.client,
  connection: {
    host: "127.0.0.1",
    user: config.user,
    password: config.password,
    database: config.dbase
  }
});

const database = {
  users: [
    {
      name: "",
      email: "",
      joined: new Date()
    }
  ]
};

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(database.users);
});

app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});
app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.put("/image", (req, res) => {
  image.handleImage(req, res, db, bcrypt);
});

app.post("/imageurl", (req, res) => {
  image.handleAPI(req, res);
});

const port = 5000;

app.listen(port, () => {
  console.log(`Connected:${port}`);
});
