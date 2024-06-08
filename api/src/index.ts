import express, { Application } from 'express';
import cookiesParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import adminRoutes from "./Routes/admin";

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cookiesParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

mongoose.connect(process.env.CLUSTER_URI as string).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error(err);
});

app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
})