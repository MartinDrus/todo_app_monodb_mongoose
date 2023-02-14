import express from 'express';
import cors from 'cors';
import { todosRouter } from './src/routes/todos.route.js';
import * as dotenv from 'dotenv'
dotenv.config()

let PORT;

//Initialising express
const app = express();
app.use(express.json());
app.use(cors());

// ------------------ROUTES------------------

app.use('/todos', todosRouter)

process.env.STATUS === 'development'
    ? (PORT = process.env.DEV_PORT)
    : (PORT = process.env.PROD_PORT);


app.listen(PORT, () => {
    console.log(`Server in ${process.env.STATUS} mode, listening on *:${PORT}`);
})