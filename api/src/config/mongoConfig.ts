import mongoose from "mongoose";
import { envKeys } from "../interfaces";

export function connectDB() {
    mongoose.connect(process.env[envKeys.MONGODB_URL] || envKeys.MONGODB_URL);
    mongoose.connection.on('connected', () => console.log('Connected to database'));
    mongoose.connection.on('error', () => console.error('An error occure while connecting to database'));
    mongoose.connection.on('disconnected', () => console.error('disconnected for database'));    
}
