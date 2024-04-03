import express, {Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => {
    console.log("Database connected")
})
.catch((error) => {
    console.error(error.message);
}); // Here as string is used to typecast the  environment variable to string

const app = express();

app.use(express.json());
app.use(cors());

//Routes Handler
import userRoute from "./routes/user.routes"

app.use("/api/v1/user", userRoute);

app.listen(7000, () => {
    console.log("Server started on port 7000");
})