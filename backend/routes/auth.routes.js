import express from "express";
import { checkCookie, loginUser } from "../controller/auth.controller.js";

const router = express.Router();
//process login
router.post("/login", loginUser);
//check coookier
router.get("/check-cookie", checkCookie);

export default router;