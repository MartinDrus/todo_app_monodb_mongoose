import { Router } from "express";
import { getAllTodos } from '../controller/todos.controller.js'

export const todosRouter = new Router();


todosRouter.route('/')
    .get(getAllTodos);


todosRouter.route('/:id')
    .get();

