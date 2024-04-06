import{Router} from "express";
import {
    createCurrentUser,
    updateCurrentUser,
    getCurrentUser
} from "../controllers/user.controllers";
import {
    jwtCheck,
    jwtParse
} from "../middlewares/auth.middleware";
import { validateUserRequest } from "../middlewares/validation";

const router = Router();


router
    .post("/", jwtCheck, createCurrentUser)
    .put("/", jwtCheck, jwtParse, validateUserRequest, updateCurrentUser)
    .get("/",jwtCheck,jwtParse,getCurrentUser);

export default router