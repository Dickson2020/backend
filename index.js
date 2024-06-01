import express from "express";
import { createUser, getUsers, getUser } from "./app.js";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("Prisma and Supabase started..");
});

app.post("/createuser", async (req, res) => {
  const userData = req.body;
  const user = await createUser(req); 
  res.json(user);
});

app.get("/getusers", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.get("/getuser", async (req, res) => {
  const userId = req.query.userId;
  const user = await getUser(userId);
  res.json(user);
});


const port = 5000;

app.listen(port, () => console.log(`Server running on ${port}`));

