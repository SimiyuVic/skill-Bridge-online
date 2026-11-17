import express from "express";
import { checkCookie, getUserDetails, loginUser } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();
//process login
router.post("/login", loginUser);
//check coookier
router.get("/check-cookie", checkCookie);
//get user details
router.get("/user-details", 
    authMiddleware.verifyToken, 
    getUserDetails);

export default router;