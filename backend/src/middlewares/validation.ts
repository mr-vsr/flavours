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

export const validateRestaurantRequest = [
    body("restaurantName")
        .notEmpty()
        .withMessage("Restaurant name is required!"),
    body("city")
        .notEmpty()
        .withMessage("City name is required!"),
    body("country")
        .notEmpty()
        .withMessage("Country name is required!"),
    body("deliveryPrice")
        .isFloat({ min: 0 })
        .withMessage("Delivery price must be a positive number!"),
    body("estimatedDeliveryTime")
        .isInt({ min: 0 })
        .withMessage("Estimated Delivery time must be a positive integer!"),
    body("cuisines")
        .isArray()
        .withMessage("Cuisines must be an array")
        .not()
        .isEmpty()
        .withMessage("Cuisines array cannot be empty"),
    body("menuItems")
        .isArray()
        .withMessage("Menu Items must be an array"),
    body("menuItems.*.name")
        .notEmpty()
        .withMessage("Menu Items name is required"),
    body("menuItems.*.price")
        .isFloat({min:0})
        .withMessage("Menu Items price must be a positive number"),
    handleValidationErrors
];