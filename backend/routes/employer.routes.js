import express from "express";
import { createEmployer } from "../controller/employer.controller.js";

const router = express.Router();

//register employer
router.post("/register", createEmployer);

export default router;