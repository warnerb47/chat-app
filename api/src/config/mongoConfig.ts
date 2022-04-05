import mongoose from "mongoose";

mongoose.connect(process.env['MONGODB_URL'] || 'MONGODB_URL');

mongoose.connection.on('connected', () => console.log('Connected to database'));
mongoose.connection.on('error', () => console.error('An error occure while connecting to database'));
mongoose.connection.on('disconnected', () => console.error('disconnected for database'));

export function connectDB() {
    mongoose.connect(process.env['MONGODB_URL'] || 'MONGODB_URL');
    mongoose.connection.on('connected', () => console.log('Connected to database'));
    mongoose.connection.on('error', () => console.error('An error occure while connecting to database'));
    mongoose.connection.on('disconnected', () => console.error('disconnected for database'));    
}
