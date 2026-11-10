import mongoose from "mongoose";

export const connectDB = async()=>{
    try
    {
        const connection = await mongoose.connect(process.env.MONGO_URL);

        if(connection)
        {
            console.log("Connected to the Database!");
        }

    }
    catch(error)
    {
        console.log("Failed to Connect");
        console.log(error);
        process.exit(1);
    }
}