import connectMongoDB from "@/lib/mongoDB";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  return NextResponse.json(
    { message: "Product created successfully" },
    { status: 200 }
  );
}
