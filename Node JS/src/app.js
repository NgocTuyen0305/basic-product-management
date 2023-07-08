import express from "express";
import productRouter from "./router/products";
import authRouter from './router/auth';
import categoryRouter from './router/category'
import imageRouter from './router/upload'
import mongoose from "mongoose";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api",productRouter);
app.use("/api",authRouter);
app.use("/api",categoryRouter);
app.use("/api",imageRouter);
mongoose.connect('mongodb://localhost:27017/tuyenln')
export const viteNodeApp = app;
