import express from 'express';
import cors from 'cors';
import { todosRouter } from './src/routes/todos.route.js';
import config from './src/service/config.js'

import { connectDB } from './src/service/db.js';

import * as dotenv from 'dotenv'
dotenv.config()


let PORT = 8080;

//Initialising express
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// ------------------ROUTES------------------

app.use('/todos', todosRouter)


process.env.STATUS === 'development'
    ? (PORT = process.env.DEV_PORT)
    : (PORT = process.env.PROD_PORT);


app.listen(PORT, () => {
    // console.log(`Server in ${'development'} mode, listening on *:${PORT}`);

    console.log(`Server in ${process.env.STATUS} mode, listening on *:${PORT}`);
})