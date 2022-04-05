import dotenv from "dotenv";
// dotenv.config({
//     path: "C:/env/mini-blog/backEnd/restService/.env"
// });
dotenv.config();
import { startServer } from './rest';
import { connectDB } from './config/mongoConfig';

connectDB();
startServer();
