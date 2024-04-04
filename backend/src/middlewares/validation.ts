import {
    NextFunction,
    Request,
    Response
} from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (req: Request, res: Response,next:NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({
                errors: errors.array()
            });
    }
    next();
}

export const validateUserRequest = [
    body("name")
        .isString()
        .notEmpty()
        .withMessage("Name must be a string and must not be left empty"),
    body("addressLine1")
        .isString()
        .notEmpty()
        .withMessage("Address Line ! must be a string and must not be left empty"),
    body("city")
        .isString()
        .notEmpty()
        .withMessage("City must be  a string and must not be left empty"),
    body("country")
        .isString()
        .notEmpty()
        .withMessage("Country must be  a string and must not be left empty"),
    handleValidationErrors,
];