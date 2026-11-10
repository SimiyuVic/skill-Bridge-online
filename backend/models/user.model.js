import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true, //VICTOR@GMAIL.COM =>> victor@gmail.com
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true, // try trim later
        select: false //when the user data will be fetched , password will not be among it
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "employer", "jobseeker"],
        default: "jobseeker"
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema); //users

export default User;