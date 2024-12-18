import connectMongoDB from "@/utility/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, Lname, email, phoneNumber, subject, message } =
    await request.json();
  await connectMongoDB();
  await Message.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Message updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const Message = await Message.findOne({ _id: id });
  return NextResponse.json({ Message }, { status: 200 });
}
