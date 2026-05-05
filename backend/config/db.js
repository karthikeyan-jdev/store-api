import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://karthikeyanjdev_db_user:UqrOtMvDhJ26TOfl@cluster0.skjh1ze.mongodb.net/todo-app?retryWrites=true&w=majority",
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
