
import express from "express";

import createGroupController from "../controllers/createGroupController.js"

const router = express.Router();

router.post("/create", createGroupController);

export default router;