import * as TodoModel from "../model/todo.model.js";



export async function getAllTodos(request, response) {

    let todos = await TodoModel.getAll();

    response.send(todos);
}