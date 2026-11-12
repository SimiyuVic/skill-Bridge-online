import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const createEmployer = async(req, res) => {
    try 
    {
        const { fullname, email, phone, location, password } = req.body;

        //form validation
        if(!fullname || !email || !phone || !location || !password)
        {
            return res.status(400).json({
                success: false,
                message: "All Fields are Required!"
            });
        }

        const normalizedEmail = email.toLowerCase().trim();

        //check if user email already exists.
        const existingUser = await User.findOne({ email: normalizedEmail });

        if(existingUser)
        {
            return res.status(409).json({
                success: false,
                message: "Company with this email already Exists!"
            });
        }

        //check password and hash it or encrypt it
        if(password.length < 8)
        {
            return res.status(400).json({
                success: false,
                message: "Password has to be atleast 8 characters"
            });
        } 

        const hashedPassword = await bcrypt.hash(password, 12);

        //save the user to the database
        const newEmployer = new User({
            fullname,
            email: normalizedEmail,
            phone,
            location,
            password: hashedPassword,
            role: "employer"
        })

        await newEmployer.save(); //saves the new employer permanantly to the database.

        return res.status(201).json({
            success: true,
            message: `Company with name ${fullname} created`
        });

    }
    catch (error) 
    {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}

