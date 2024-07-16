import express from 'express';
import morgan from 'morgan';
import '../dbConnection/dbConnection.js';
import cors from 'cors';
import userRoutes from "../routes/user.routes.js";


export const ADMIN_KEY = process.env.ADMIN_KEY;
export const USER_KEY = process.env.USER_KEY;
export const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'https://fronttemplete.netlify.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Estamos escuchando el puerto ${PORT}`);
});