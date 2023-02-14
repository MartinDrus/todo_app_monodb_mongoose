import mongoose from "mongoose";
import { getDbConnection } from "../service/db.js";

const todoSchema = new mongoose.Schema({
    todoText: String,
    completed: Boolean,
    timestamp: {type: Date, default: Date.now}
});

const conn = await getDbConnection();
const Todo = conn.model('Todo', todoSchema);

export async function getAll(){
    let todos = await Todo.find({})
    return todos;
}

