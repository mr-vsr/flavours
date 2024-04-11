import { Router } from "express";
import multer from "multer";
import { 
    createMyRestaurant
} from "../controllers/resturant.controllers";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

// /api/v1/resturanat

router.post("/", upload.single("imageFile"), createMyRestaurant);

export default router;