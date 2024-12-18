import connectMongoDB from "@/utility/mongodb";
import Signup from "@/models/Signup";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const normalizedUsername = username.trim().toLowerCase();

    await connectMongoDB();

    const user = await Signup.findOne({ Username: normalizedUsername });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ message: "Error logging in" }, { status: 500 });
  }
}
