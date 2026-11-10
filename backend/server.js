import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/config.js";


dotenv.config()
//create an instance of the express application
const app = express();

const MYPORT = process.env.PORT;

//health check
app.use("/api/v1/health", (req, res)=>{
    res.status(200).json({
        success: true,
        message: "Backend working just fine"
    });
});

const startServer = async () => {

    connectDB();

    app.listen(MYPORT, () => {
        console.log(`Listening to request via PORT ${MYPORT}`);
    });
}

startServer();