import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //form validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All Fields are Required!"
            });
        }

        const normalizedEmail = email.toLowerCase().trim();
        //cehck if user exists
        const user = await User.findOne({ email: normalizedEmail }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            });
        }

        //compared typed user password to the hashed one.
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            });
        }

        //create a token
        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2d"
            }
        );

        res.cookie("skillBridgeOnline", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: "/",
            maxAge: 2 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: `Welcome back ${user.fullname}`,
            user: user.role
        });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

//check cookie
export const checkCookie = async (req, res) => {
    try {
        const readCookie = req.cookies.skillBridgeOnline;
        if (readCookie) {
            return res.status(200).json({
                message: true
            })
        }
        return res.status(200).json({
            message: false
        });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
};

//fetch user details
export const getUserDetails = async (req, res) => {
    try {
        const { user } = req;

        res.status(200).json({
            success: true,
            user
        });
    }
    catch (error) {
        //console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
};

//logout the user
export const logoutUser = async (req, res) => {
    try {
        res.clearCookie("skillBridgeOnline", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: "/",
        });

        return res.status(200).json({
            success: true,
            message: "You have Logged out!"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};