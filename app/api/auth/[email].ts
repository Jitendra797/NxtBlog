import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/db"; // Import your database connection function
import User from "@/db/models/User"; // Import your User model

export async function POST(
  req: Request,
  { params }: { params: { email?: string } }
) {
  try {
    await connectToDatabase();

    const { email, password } = await req.json(); // Get login credentials from request body

    // For security, find user by email that was extracted from the api endpoint
    const user = await User.findOne(
      params?.email ? { email: params.email } : { email }
    );

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // JWT implementation (example using jsonwebtoken library)
    const jwt = require("jsonwebtoken");
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    }); // Replace with your JWT secret and expiration

    return NextResponse.json({ token, user }, { status: 200 }); // Send token in response
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
