import connectMongoDB from "@/lib/mongoDB";
import Blog from "@/model/blog";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const allBlogs = await Blog.find();

  return NextResponse.json({ allBlogs }, { status: 200 });
}

export async function POST(req) {
  const { imgUrl, title, date, desc, content } = await req.json();
  await connectMongoDB();

  await Blog.create({
    imageUrl: imgUrl,
    title,
    Date: date,
    description: desc,
    greetings: "Hello Katafam,",
    content,
  });
  return NextResponse.json(
    { message: "Blog Created Successfully!" },
    { status: 200 }
  );
}
