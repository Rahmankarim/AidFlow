import connectMongoDB from "@/utility/mongodb";
import Signup from "@/models/Signup";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;

  const { Username, email, password } = await request.json();
  await connectMongoDB();
  await Signup.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Signup updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const Signup = await Signup.findOne({ _id: id });
  return NextResponse.json({ Signup }, { status: 200 });
}
