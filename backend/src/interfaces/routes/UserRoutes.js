import express from "express";

import UserController from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/registration", (req, res) =>
  UserController.createUser(req, res)
);

userRoutes.get("/registration", (req, res) =>
  UserController.getAllUsers(req, res)
);

export default userRoutes;
