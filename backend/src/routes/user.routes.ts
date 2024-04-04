import{Router} from "express";
import {
    createCurrentUser,
    updateCurrentUser
} from "../controllers/user.controllers";
import {
    jwtCheck,
    jwtParse
} from "../middlewares/auth.middleware";

const router = Router();

router
    .post("/", jwtCheck, createCurrentUser)
    .put("/", jwtCheck,jwtParse, updateCurrentUser);

export default router