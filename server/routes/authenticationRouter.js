
import express from "express";

import loginController from "../controllers/loginController.js";
import registrationController from "../controllers/registrationController.js"

const router = express.Router();

router.post("/register", registrationController);
router.post("/login", loginController);

export default router;