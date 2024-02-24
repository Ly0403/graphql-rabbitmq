import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGOURL as string);
    return con;
  } catch (error) {
    console.log(error);
  }
};


export default connectDB;