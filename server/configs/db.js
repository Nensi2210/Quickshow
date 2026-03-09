import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Trying to connect to MongoDB..."); 

  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected ");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error ", err.message);
    });

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongoose.connect() resolved"); 

  } catch (error) {
    console.error("MongoDB Error ", error.message);
  }
};

export default connectDB;