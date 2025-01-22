import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "../../../../helper/dbConfig";
import { User } from "../../../../helper/models";

const JWT_SECRET = "your_jwt_secret";

export async function POST(request: Request) {
  await connectDB();
  const { username, email, password, cpassword } = await request.json();
  console.log("Received data:", { username, email, password, cpassword });

  if (password !== cpassword) {
    return NextResponse.json(
      { message: "Passwords do not match" },
      { status: 400 }
    );
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      cpassword: hashedPassword,
    });
    console.log(newUser, "kk");
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log(token, "tt");

    return NextResponse.json(
      { message: "User registered successfully", token },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
    // console.error(
    //   "Error during registration:",
    //   error.stack || error.message || error
    // );
    // return NextResponse.json({
    //   message: "Server error",
    //   error: error.message,
    // });
  }
}
