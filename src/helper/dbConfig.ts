import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL!, {
      dbName: "hulu_user",
    });

    console.log("DB connected successfully");
    // console.log(connection, "connn");
  } catch (err) {
    console.log("DB connection error", err);
  }
};
