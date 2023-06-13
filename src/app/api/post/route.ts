import { NextResponse } from "next/server";
//import prisma from "@/utils/prisma";

export async function GET() {
  /* const posts = await prisma.post.findMany({
    include: { views: true, likes: true },
  }); */

  return NextResponse.json("posts");
}
