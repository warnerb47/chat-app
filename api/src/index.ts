import dotenv from "dotenv";
dotenv.config();
import { startServer } from './rest';
import { connectDB } from './config/mongoConfig';

connectDB();
startServer();
