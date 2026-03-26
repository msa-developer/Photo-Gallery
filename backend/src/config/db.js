import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("connected to data base");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
