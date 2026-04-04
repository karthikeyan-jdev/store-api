import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://karthikeyanjdev_db_user:dGczpScMqRK92KkM@cluster0.skjh1ze.mongodb.net/store-api?retryWrites=true&w=majority",
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
