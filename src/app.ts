import express from "express";
import PostRouter from './Routes/PotsRoutes.js'
import logger from "./Middlewares/LoggerMiddleware.js";
import errorMiddleware from "./Middlewares/errorMiddleware.js";


const app = express();
app.use(express.json());
app.use(logger);

app.use('/posts',PostRouter);


app.get('/',(req,res)=>res.send('Blog Api'));


app.use(errorMiddleware)

export default  app