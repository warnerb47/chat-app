import dotenv from "dotenv";
dotenv.config();
import { startServer } from './api';
import { connectDB } from './config/mongoConfig';

connectDB();
startServer();
