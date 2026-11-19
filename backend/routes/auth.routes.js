import express from "express";
import { 
    avatarChange,
    checkCookie, 
    getUserDetails, 
    loginUser, 
    logoutUser } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import upload from "../middleware/image.middleware.js";

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

//update avatar
router.patch("/change-avatar", 
    authMiddleware.verifyToken,
    upload.single("profile"),
    avatarChange);

export default router;