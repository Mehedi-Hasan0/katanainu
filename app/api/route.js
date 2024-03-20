import connectMongoDB from "@/lib/mongoDB";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  return NextResponse.json(
    { message: "Welcome to KatanaInu" },
    { status: 200 }
  );
}
