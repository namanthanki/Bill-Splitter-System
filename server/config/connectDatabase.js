import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://naman:9026878868$=UchihaMongo@bill-splitter-system.wgimb4a.mongodb.net/?retryWrites=true&w=majority"

const connectDatabase = async () => {
    const connection = await mongoose.connect(MONGO_URL);
    console.log(`Connected to Database: ${connection.connection.host}`);
}

export { connectDatabase };