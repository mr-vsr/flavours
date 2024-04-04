import{Router} from "express";
import { createCurrentUser } from "../controllers/user.controllers";
import { jwtCheck } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", jwtCheck,createCurrentUser);

export default router