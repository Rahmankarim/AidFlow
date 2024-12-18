import connectMongoDB from "@/utility/mongodb";
import Signup from "@/models/Signup";
import bcrypt from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";

const signupSchema = Joi.object({
  Username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords must match",
  }),
});

export async function POST(request) {
  try {
    const { Username, email, password, confirmPassword } = await request.json();

    const { error } = signupSchema.validate({
      Username,
      email,
      password,
      confirmPassword,
    });
    if (error) {
      return NextResponse.json(
        { message: error.details[0].message },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists. Please sign in." },
        { status: 400 }
      );
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    await Signup.create({
      Username: Username.trim().toLowerCase(),
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Signup successful. Redirecting to sign-in page." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json(
      { message: "Error creating signup" },
      { status: 500 }
    );
  }
}
