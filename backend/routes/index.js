import express from "express";
const router = express.Router();

// middlewares
import { CheckToken } from "../middlewares/CheckToken.js";

// controllers
import { usersController } from "../controllers/usersController.js";
import { todoController } from "../controllers/todoController.js";

const TodosControllers = new todoController();
const UsersControllers = new usersController();

// Authenticação
router.post("/users/session", UsersControllers.singIn);
router.post("/users/create", UsersControllers.singUp);

// Todo
router.post("/todo/create", CheckToken, TodosControllers.create);
router.delete("/todo/delete", CheckToken, TodosControllers.delete);
router.put("/todo/edit", CheckToken, TodosControllers.edit);

export { router };
