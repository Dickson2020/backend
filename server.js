import express from "express";
import { createUser, getUsers, getUser } from "./app.js";
import cors from "cors";
const app = express();


app.use(cors());

app.post("/createUser", async (req, res) => {
  const userData = req.body;
  const user = await createUser(userData);
  res.json(user);
});

app.get("/getUsers", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.get("/getUser", async (req, res) => {
  const userId = req.query.userId;
  const user = await getUser(userId);
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});