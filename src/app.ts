import express from "express";
import cors from "cors";
import PostRouter from './Routes/PotsRoutes.js'
import logger from "./Middlewares/LoggerMiddleware.js";
import errorMiddleware from "./Middlewares/errorMiddleware.js";


const app = express();

// Configuration CORS pour permettre les requêtes depuis le frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());
app.use(logger);

app.use('/posts',PostRouter);


app.get('/',(req,res)=>res.send('Blog Api'));


app.use(errorMiddleware)

export default  app