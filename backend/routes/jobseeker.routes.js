import express from "express";
import { registerJobSeeker } from "../controller/jobseeker.controller.js";


const router = express.Router();
//register
router.post("/register", registerJobSeeker);

export default router;