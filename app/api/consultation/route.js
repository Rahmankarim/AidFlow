import connectMongoDB from "@/utility/mongodb";
import Signup from "@/models/Signup";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { Username, email, password } = await request.json();
  await connectMongoDB();
  await Signup.create({
    Username,
    email,
    password,
  });
  return NextResponse.json({ message: "Signup Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const Signups = await Signup.find();
  return NextResponse.json({ Signups });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Signup.findByIdAndDelete(id);
  return NextResponse.json({ message: "Signup deleted" }, { status: 200 });
}
