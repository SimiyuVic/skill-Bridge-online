import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

//register a job seeker
export const registerJobSeeker = async (req, res) => {
  try {
    const { fullname, email, phone, password } = req.body;

    //form validation
    if (!fullname || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Required!",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    //check if user email already exists.
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already Exists!",
      });
    }

    //check phone number
    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.status(409).json({
        success: false,
        message: "Phone number already taken",
      });
    }

    //check password and hash it or encrypt it
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password has to be atleast 9 characters",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    //save the job seeker details
    const newJobSeeker = User({
        fullname,
        email: normalizedEmail,
        phone,
        password: hashedPassword,
    });

    await newJobSeeker.save(); //permanently save the user to the database
    res.status(201).json({
        success: true,
        message: `User with name ${fullname} created`
    });


  } catch (error) {
    //console.log(error)
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};



