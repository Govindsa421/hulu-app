// pages/api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { jwt } from "jsonwebtoken";
import { connectDB } from "../../../helper/dbConfig";
import { User } from "../../../helper/models";
import { NextResponse } from "next/server";

const JWT_SECRET = "your_jwt_secret";

export default async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 400 }
      );
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return NextResponse.json(
      {
        message: "Login successful",
        token, // Return the JWT token
        user: { id: user._id, email: user.email, username: user.username }, // Limited user info
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
