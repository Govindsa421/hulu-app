import { NextResponse } from "next/server";
import { connectDB } from "../../../helper/dbConfig";

connectDB();

export function GET(req) {
  const users = [{ userName: "gjjj", male: "19", gender: "male" }];

  return NextResponse.json(users);
}
