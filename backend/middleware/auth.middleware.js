import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

export const authMiddleware = {
    verifyToken: async (req, res, next) => {
        const token = req.cookies.skillBridgeOnline;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Login session expired"
            });
        }
        try {
            //extract user id from token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //find the user as per the id in the decoded token
            const user = await User.findById(decoded.userId);

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "No user found"
                });
            }

            //make the user data available to all other controllers
            req.user = user;
            next();
        }
        catch (error) {
            //console.log(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong"
            });
        }
    },
    authorizeRole: async (role) => {
        return (req, res, next) => {
            if (req.user.role !== role) {
                return res.status(403).json({
                    success: false,
                    message: "Unauthorised Operation"
                });
            }
            next();
        }
    }
}