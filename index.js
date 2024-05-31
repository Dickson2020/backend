import express from "express";
import { createUser, getUsers, getUser } from "./app.js";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});


app.post("/createuser", async (req, res) => {
  const userData = req.body;
  const user = await createUser(userData);
  res.send(user);
});

app.get("/getusers", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

app.get("/getuser", async (req, res) => {
  const userId = req.query.userId;
  const user = await getUser(userId);
  res.send(user);
});


const port = 5000;

app.listen(port, () => console.log(`Server running on ${port}`));


module.exports = app;
