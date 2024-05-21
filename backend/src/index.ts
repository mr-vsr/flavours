import express, {Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => {
    console.log("Database connected")
})
.catch((error) => {
    console.error(error.message);
}); // Here as string is used to typecast the  environment variable to string

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(express.json());
app.use(cors());

//Routes Handler
import userRoute from "./routes/user.routes";
import restaurantRoutes from "./routes/restaurant.routes";
import { arrayBuffer } from "stream/consumers";

app.get("/health", (req: Request, res: Response) => {
    res
        .status(200)
        .send({ message: "Health OK!" });
});
app.use("/api/v1/user", userRoute);
app.use("/api/v1/restaurant", restaurantRoutes);

app.listen(7000, () => {
    console.log("Server started on port 7000");
})