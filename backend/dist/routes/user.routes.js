"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validation_1 = require("../middlewares/validation");
const router = (0, express_1.Router)();
router
    .post("/", auth_middleware_1.jwtCheck, user_controllers_1.createCurrentUser)
    .put("/", auth_middleware_1.jwtCheck, auth_middleware_1.jwtParse, validation_1.validateUserRequest, user_controllers_1.updateCurrentUser)
    .get("/", auth_middleware_1.jwtCheck, auth_middleware_1.jwtParse, user_controllers_1.getCurrentUser);
exports.default = router;
