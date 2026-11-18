import express from "express";
import { 
    checkCookie, 
    getUserDetails, 
    loginUser, 
    logoutUser } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();
//process login
router.post("/login", loginUser);

//check coookie
router.get("/check-cookie", checkCookie);

//get user details
router.get("/user-details", 
    authMiddleware.verifyToken, 
    getUserDetails);

//logout users
router.post("/logout", logoutUser);

export default router;