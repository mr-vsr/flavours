import{Router} from "express";
import { createCurrentUser } from "../controllers/user.controllers";

const router = Router();

router.post("/", createCurrentUser);

export default router