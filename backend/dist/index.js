"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => {
    console.log("Database connected");
})
    .catch((error) => {
    console.error(error.message);
}); // Here as string is used to typecast the  environment variable to string
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Routes Handler
const user_routes_1 = __importDefault(require("./routes/user.routes"));
app.get("/health", (req, res) => {
    res.send({ message: "Health OK!" });
});
app.use("/api/v1/user", user_routes_1.default);
app.listen(7000, () => {
    console.log("Server started on port 7000");
});
