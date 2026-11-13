import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/config.js";
import employerRoutes from "./routes/employer.routes.js";
import authRoutes from "./routes/auth.routes.js";
import jobSeekerRoutes from "./routes/jobseeker.routes.js";
import cors from "cors";

dotenv.config()
//create an instance of the express application
const app = express();
app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173",
        ""
    ],
    credentials: true
}));

const MYPORT = process.env.PORT;

//health check
app.use("/api/v1/health", (req, res)=>{
    res.status(200).json({
        success: true,
        message: "Backend working just fine"
    });
});

//routes to the controllers
app.use("/api/v1/employer", employerRoutes); 
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobseeker", jobSeekerRoutes);


const startServer = async () => {

    connectDB();

    app.listen(MYPORT, () => {
        console.log(`Listening to request via PORT ${MYPORT}`);
    });
}

startServer();