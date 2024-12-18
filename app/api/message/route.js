import connectMongoDB from "@/utility/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, Lname, email, phoneNumber, subject, message } =
    await request.json();
  await connectMongoDB();
  await Message.create({
    name,
    Lname,
    email,
    phoneNumber,
    subject,
    message,
  });
  return NextResponse.json({ message: "Message Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const message = await Message.find();
  return NextResponse.json({ message });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Message.findByIdAndDelete(id);
  return NextResponse.json({ message: "Message deleted" }, { status: 200 });
}
